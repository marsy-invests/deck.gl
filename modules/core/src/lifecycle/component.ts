import {
  LIFECYCLE,
  Lifecycle,
  COMPONENT_SYMBOL,
  ASYNC_ORIGINAL_SYMBOL,
  ASYNC_RESOLVED_SYMBOL,
  ASYNC_DEFAULTS_SYMBOL
} from './constants';
import {createProps} from './create-props';

import type {LayerContext} from '../lib/layer-manager';
import type LayerState from '../lib/layer-state';
import type {LayerProps} from '../types/layer-props';

let counter = 0;

export type StatefulComponentProps<PropsT> = PropsT &
  Required<LayerProps> & {
    [COMPONENT_SYMBOL]: Component<PropsT>;
    [ASYNC_DEFAULTS_SYMBOL]: Partial<PropsT>;
    [ASYNC_ORIGINAL_SYMBOL]: Partial<PropsT>;
    [ASYNC_RESOLVED_SYMBOL]: Partial<PropsT>;
  };

export default class Component<PropsT = any> {
  static componentName: string = 'Component';
  static defaultProps: Readonly<{}> = {};

  id: string;
  props: StatefulComponentProps<PropsT>;
  count: number;
  lifecycle: Lifecycle;
  parent: Component | null;
  context: LayerContext | null;
  state: Record<string, any> | null;
  internalState: LayerState<PropsT> | null;

  constructor(...propObjects: Partial<PropsT>[]) {
    // Merge supplied props with default props and freeze them.
    /* eslint-disable prefer-spread */
    this.props = createProps<PropsT>(this, propObjects);
    /* eslint-enable prefer-spread */

    // Define all members before layer is sealed
    this.id = this.props.id; // The layer's id, used for matching with layers from last render cycle
    this.count = counter++; // Keep track of how many layer instances you are generating
    this.lifecycle = LIFECYCLE.NO_STATE; // Helps track and debug the life cycle of the layers
    this.parent = null; // reference to the composite layer parent that rendered this layer
    this.context = null; // Will reference layer manager's context, contains state shared by layers
    this.state = null; // Will be set to the shared layer state object during layer matching
    this.internalState = null;

    // Seal the layer
    Object.seal(this);
  }

  get root(): Component {
    // eslint-disable-next-line
    let component: Component = this;
    while (component.parent) {
      component = component.parent;
    }
    return component;
  }

  // clone this layer with modified props
  clone(newProps: Partial<PropsT>) {
    const {props} = this;

    // Async props cannot be copied with Object.assign, copy them separately
    const asyncProps: Partial<PropsT> = {};

    // See async props definition in create-props.js
    for (const key in props[ASYNC_DEFAULTS_SYMBOL]) {
      if (key in props[ASYNC_RESOLVED_SYMBOL]) {
        asyncProps[key] = props[ASYNC_RESOLVED_SYMBOL][key];
      } else if (key in props[ASYNC_ORIGINAL_SYMBOL]) {
        asyncProps[key] = props[ASYNC_ORIGINAL_SYMBOL][key];
      }
    }

    // Some custom layer implementation may not support multiple arguments in the constructor
    // @ts-ignore
    return new this.constructor({...props, ...asyncProps, ...newProps});
  }
}