"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[3091],{34982:(i,t,n)=>{function e(i){let t=1/0,n=1/0,e=1/0,o=-1/0,r=-1/0,c=-1/0;const l=i.POSITION?i.POSITION.value:[],a=l&&l.length;for(let h=0;h<a;h+=3){const i=l[h],a=l[h+1],s=l[h+2];t=i<t?i:t,n=a<n?a:n,e=s<e?s:e,o=i>o?i:o,r=a>r?a:r,c=s>c?s:c}return[[t,n,e],[o,r,c]]}n.d(t,{v:()=>e})},86751:(i,t,n)=>{n.d(t,{Z:()=>r});var e=n(15804),o=n(51355);class r extends e.Z{constructor(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{id:t=(0,o.hQ)("sphere-geometry")}=i,{indices:n,attributes:e}=function(i){const{nlat:t=10,nlong:n=10}=i;let{radius:e=1}=i;const o=0,r=Math.PI-o,c=0,l=2*Math.PI-c,a=(t+1)*(n+1);if("number"==typeof e){const i=e;e=(t,n,e,o,r)=>i}const h=new Float32Array(3*a),s=new Float32Array(3*a),g=new Float32Array(2*a),u=new(a>65535?Uint32Array:Uint16Array)(t*n*6);for(let p=0;p<=t;p++)for(let i=0;i<=n;i++){const o=i/n,c=p/t,a=i+p*(n+1),u=2*a,d=3*a,f=l*o,_=r*c,v=Math.sin(f),b=Math.cos(f),m=Math.sin(_),L=b*m,k=Math.cos(_),C=v*m,A=e(L,k,C,o,c);h[d+0]=A*L,h[d+1]=A*k,h[d+2]=A*C,s[d+0]=L,s[d+1]=k,s[d+2]=C,g[u+0]=o,g[u+1]=1-c}const d=n+1;for(let p=0;p<n;p++)for(let i=0;i<t;i++){const n=6*(p*t+i);u[n+0]=i*d+p,u[n+1]=i*d+p+1,u[n+2]=(i+1)*d+p,u[n+3]=(i+1)*d+p,u[n+4]=i*d+p+1,u[n+5]=(i+1)*d+p+1}return{indices:{size:1,value:u},attributes:{POSITION:{size:3,value:h},NORMAL:{size:3,value:s},TEXCOORD_0:{size:2,value:g}}}}(i);super({...i,id:t,indices:n,attributes:{...e,...i.attributes}})}}},15804:(i,t,n)=>{n.d(t,{Z:()=>c});var e=n(51355),o=n(6745);const r={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6};class c{static get DRAW_MODE(){return r}constructor(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{id:t=(0,e.hQ)("geometry"),drawMode:n=r.TRIANGLES,attributes:o={},indices:c=null,vertexCount:l=null}=i;this.id=t,this.drawMode=0|n,this.attributes={},this.userData={},this._setAttributes(o,c),this.vertexCount=l||this._calculateVertexCount(this.attributes,this.indices)}get mode(){return this.drawMode}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(i){return"Geometry ".concat(this.id," attribute ").concat(i)}_setAttributes(i,t){t&&(this.indices=ArrayBuffer.isView(t)?{value:t,size:1}:t);for(const n in i){let t=i[n];t=ArrayBuffer.isView(t)?{value:t}:t,(0,o.h)(ArrayBuffer.isView(t.value),"".concat(this._print(n),": must be typed array or object with value as typed array")),"POSITION"!==n&&"positions"!==n||t.size||(t.size=3),"indices"===n?((0,o.h)(!this.indices),this.indices=t):this.attributes[n]=t}return this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this}_calculateVertexCount(i,t){if(t)return t.value.length;let n=1/0;for(const e in i){const t=i[e],{value:o,size:r,constant:c}=t;!c&&o&&r>=1&&(n=Math.min(n,o.length/r))}return(0,o.h)(Number.isFinite(n)),n}}},54591:(i,t,n)=>{n.d(t,{H:()=>c});const e="#if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))\n\nstruct AmbientLight {\n vec3 color;\n};\n\nstruct PointLight {\n vec3 color;\n vec3 position;\n vec3 attenuation;\n};\n\nstruct DirectionalLight {\n  vec3 color;\n  vec3 direction;\n};\n\nuniform AmbientLight lighting_uAmbientLight;\nuniform PointLight lighting_uPointLight[MAX_LIGHTS];\nuniform DirectionalLight lighting_uDirectionalLight[MAX_LIGHTS];\nuniform int lighting_uPointLightCount;\nuniform int lighting_uDirectionalLightCount;\n\nuniform bool lighting_uEnabled;\n\nfloat getPointLightAttenuation(PointLight pointLight, float distance) {\n  return pointLight.attenuation.x\n       + pointLight.attenuation.y * distance\n       + pointLight.attenuation.z * distance * distance;\n}\n\n#endif\n",o={lightSources:{}};function r(){let{color:i=[0,0,0],intensity:t=1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.map((i=>i*t/255))}const c={name:"lights",vs:e,fs:e,getUniforms:function i(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;if("lightSources"in t){const{ambientLight:i,pointLights:n,directionalLights:e}=t.lightSources||{};return i||n&&n.length>0||e&&e.length>0?Object.assign({},function(i){let{ambientLight:t,pointLights:n=[],directionalLights:e=[]}=i;const o={};return o["lighting_uAmbientLight.color"]=t?r(t):[0,0,0],n.forEach(((i,t)=>{o["lighting_uPointLight[".concat(t,"].color")]=r(i),o["lighting_uPointLight[".concat(t,"].position")]=i.position,o["lighting_uPointLight[".concat(t,"].attenuation")]=i.attenuation||[1,0,0]})),o.lighting_uPointLightCount=n.length,e.forEach(((i,t)=>{o["lighting_uDirectionalLight[".concat(t,"].color")]=r(i),o["lighting_uDirectionalLight[".concat(t,"].direction")]=i.direction})),o.lighting_uDirectionalLightCount=e.length,o}({ambientLight:i,pointLights:n,directionalLights:e}),{lighting_uEnabled:!0}):{lighting_uEnabled:!1}}if("lights"in t){const n={pointLights:[],directionalLights:[]};for(const i of t.lights||[])switch(i.type){case"ambient":n.ambientLight=i;break;case"directional":n.directionalLights.push(i);break;case"point":n.pointLights.push(i)}return i({lightSources:n})}return{}},defines:{MAX_LIGHTS:3}}},89771:(i,t,n)=>{n.d(t,{N:()=>l,s:()=>a});var e=n(54591);const o="\nuniform float lighting_uAmbient;\nuniform float lighting_uDiffuse;\nuniform float lighting_uShininess;\nuniform vec3  lighting_uSpecularColor;\n\nvec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {\n    vec3 halfway_direction = normalize(light_direction + view_direction);\n    float lambertian = dot(light_direction, normal_worldspace);\n    float specular = 0.0;\n    if (lambertian > 0.0) {\n      float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);\n      specular = pow(specular_angle, lighting_uShininess);\n    }\n    lambertian = max(lambertian, 0.0);\n    return (lambertian * lighting_uDiffuse * surfaceColor + specular * lighting_uSpecularColor) * color;\n}\n\nvec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {\n  vec3 lightColor = surfaceColor;\n\n  if (lighting_uEnabled) {\n    vec3 view_direction = normalize(cameraPosition - position_worldspace);\n    lightColor = lighting_uAmbient * surfaceColor * lighting_uAmbientLight.color;\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uPointLightCount) {\n        break;\n      }\n      PointLight pointLight = lighting_uPointLight[i];\n      vec3 light_position_worldspace = pointLight.position;\n      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);\n      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);\n    }\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uDirectionalLightCount) {\n        break;\n      }\n      DirectionalLight directionalLight = lighting_uDirectionalLight[i];\n      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);\n    }\n  }\n  return lightColor;\n}\n\nvec3 lighting_getSpecularLightColor(vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {\n  vec3 lightColor = vec3(0, 0, 0);\n  vec3 surfaceColor = vec3(0, 0, 0);\n\n  if (lighting_uEnabled) {\n    vec3 view_direction = normalize(cameraPosition - position_worldspace);\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uPointLightCount) {\n        break;\n      }\n      PointLight pointLight = lighting_uPointLight[i];\n      vec3 light_position_worldspace = pointLight.position;\n      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);\n      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);\n    }\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uDirectionalLightCount) {\n        break;\n      }\n      DirectionalLight directionalLight = lighting_uDirectionalLight[i];\n      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);\n    }\n  }\n  return lightColor;\n}\n",r={};function c(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;if(!("material"in i))return{};const{material:t}=i;return t?function(i){const{ambient:t=.35,diffuse:n=.6,shininess:e=32,specularColor:o=[30,30,30]}=i;return{lighting_uAmbient:t,lighting_uDiffuse:n,lighting_uShininess:e,lighting_uSpecularColor:o.map((i=>i/255))}}(t):{lighting_uEnabled:!1}}const l={name:"gouraud-lighting",dependencies:[e.H],vs:o,defines:{LIGHTING_VERTEX:1},getUniforms:c},a={name:"phong-lighting",dependencies:[e.H],fs:o,defines:{LIGHTING_FRAGMENT:1},getUniforms:c}},98254:(i,t,n)=>{n.d(t,{q:()=>o});const e={pickingSelectedColor:null,pickingHighlightColor:new Uint8Array([0,255,255,255]),pickingActive:!1,pickingAttribute:!1};const o={name:"picking",vs:"uniform bool picking_uActive;\nuniform bool picking_uAttribute;\nuniform vec3 picking_uSelectedColor;\nuniform bool picking_uSelectedColorValid;\n\nout vec4 picking_vRGBcolor_Avalid;\n\nconst float COLOR_SCALE = 1. / 255.;\n\nbool picking_isColorValid(vec3 color) {\n  return dot(color, vec3(1.0)) > 0.001;\n}\n\nbool isVertexPicked(vec3 vertexColor) {\n  return\n    picking_uSelectedColorValid &&\n    !picking_isColorValid(abs(vertexColor - picking_uSelectedColor));\n}\n\nvoid picking_setPickingColor(vec3 pickingColor) {\n  if (picking_uActive) {\n    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));\n\n    if (!picking_uAttribute) {\n      picking_vRGBcolor_Avalid.rgb = pickingColor * COLOR_SCALE;\n    }\n  } else {\n    picking_vRGBcolor_Avalid.a = float(isVertexPicked(pickingColor));\n  }\n}\n\nvoid picking_setPickingAttribute(float value) {\n  if (picking_uAttribute) {\n    picking_vRGBcolor_Avalid.r = value;\n  }\n}\nvoid picking_setPickingAttribute(vec2 value) {\n  if (picking_uAttribute) {\n    picking_vRGBcolor_Avalid.rg = value;\n  }\n}\nvoid picking_setPickingAttribute(vec3 value) {\n  if (picking_uAttribute) {\n    picking_vRGBcolor_Avalid.rgb = value;\n  }\n}\n",fs:"uniform bool picking_uActive;\nuniform vec3 picking_uSelectedColor;\nuniform vec4 picking_uHighlightColor;\n\nin vec4 picking_vRGBcolor_Avalid;\nvec4 picking_filterHighlightColor(vec4 color) {\n  if (picking_uActive) {\n    return color;\n  }\n  bool selected = bool(picking_vRGBcolor_Avalid.a);\n\n  if (selected) {\n    float highLightAlpha = picking_uHighlightColor.a;\n    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);\n    float highLightRatio = highLightAlpha / blendedAlpha;\n\n    vec3 blendedRGB = mix(color.rgb, picking_uHighlightColor.rgb, highLightRatio);\n    return vec4(blendedRGB, blendedAlpha);\n  } else {\n    return color;\n  }\n}\nvec4 picking_filterPickingColor(vec4 color) {\n  if (picking_uActive) {\n    if (picking_vRGBcolor_Avalid.a == 0.0) {\n      discard;\n    }\n    return picking_vRGBcolor_Avalid;\n  }\n  return color;\n}\nvec4 picking_filterColor(vec4 color) {\n  vec4 highightColor = picking_filterHighlightColor(color);\n  return picking_filterPickingColor(highightColor);\n}\n\n",getUniforms:function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;const t={};if(void 0!==i.pickingSelectedColor)if(i.pickingSelectedColor){const n=i.pickingSelectedColor.slice(0,3);t.picking_uSelectedColorValid=1,t.picking_uSelectedColor=n}else t.picking_uSelectedColorValid=0;if(i.pickingHighlightColor){const n=Array.from(i.pickingHighlightColor,(i=>i/255));Number.isFinite(n[3])||(n[3]=1),t.picking_uHighlightColor=n}return void 0!==i.pickingActive&&(t.picking_uActive=Boolean(i.pickingActive),t.picking_uAttribute=Boolean(i.pickingAttribute)),t}}},25405:(i,t,n)=>{n.d(t,{Z:()=>a});var e=n(4942),o=n(59122),r=n(28835),c=n(77160);const l=1e-6;class a{constructor({phi:i=0,theta:t=0,radius:n=1,bearing:o,pitch:r,altitude:c,radiusScale:l=6371e3}={}){(0,e.Z)(this,"phi",void 0),(0,e.Z)(this,"theta",void 0),(0,e.Z)(this,"radius",void 0),(0,e.Z)(this,"radiusScale",void 0),this.phi=i,this.theta=t,this.radius=n||c||1,this.radiusScale=l||1,void 0!==o&&(this.bearing=o),void 0!==r&&(this.pitch=r),this.check()}toString(){return this.formatString(r.vc)}formatString({printTypes:i=!1}){const t=r.Bw;return"".concat(i?"Spherical":"","[rho:").concat(t(this.radius),",theta:").concat(t(this.theta),",phi:").concat(t(this.phi),"]")}equals(i){return(0,r.fS)(this.radius,i.radius)&&(0,r.fS)(this.theta,i.theta)&&(0,r.fS)(this.phi,i.phi)}exactEquals(i){return this.radius===i.radius&&this.theta===i.theta&&this.phi===i.phi}get bearing(){return 180-(0,r.RW)(this.phi)}set bearing(i){this.phi=Math.PI-(0,r.uR)(i)}get pitch(){return(0,r.RW)(this.theta)}set pitch(i){this.theta=(0,r.uR)(i)}get longitude(){return(0,r.RW)(this.phi)}get latitude(){return(0,r.RW)(this.theta)}get lng(){return(0,r.RW)(this.phi)}get lat(){return(0,r.RW)(this.theta)}get z(){return(this.radius-1)*this.radiusScale}set(i,t,n){return this.radius=i,this.phi=t,this.theta=n,this.check()}clone(){return(new a).copy(this)}copy(i){return this.radius=i.radius,this.phi=i.phi,this.theta=i.theta,this.check()}fromLngLatZ([i,t,n]){return this.radius=1+n/this.radiusScale,this.phi=(0,r.uR)(t),this.theta=(0,r.uR)(i),this.check()}fromVector3(i){return this.radius=c.kE(i),this.radius>0&&(this.theta=Math.atan2(i[0],i[1]),this.phi=Math.acos((0,r.uZ)(i[2]/this.radius,-1,1))),this.check()}toVector3(){return new o.Z(0,0,this.radius).rotateX({radians:this.theta}).rotateZ({radians:this.phi})}makeSafe(){return this.phi=Math.max(l,Math.min(Math.PI-l,this.phi)),this}check(){if(!(Number.isFinite(this.phi)&&Number.isFinite(this.theta)&&this.radius>0))throw new Error("SphericalCoordinates: some fields set to invalid numbers");return this}}},3905:(i,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var e=n(67294);function o(i,t,n){return t in i?Object.defineProperty(i,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[t]=n,i}function r(i,t){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(i);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.push.apply(n,e)}return n}function c(i){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(i,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(n,t))}))}return i}function l(i,t){if(null==i)return{};var n,e,o=function(i,t){if(null==i)return{};var n,e,o={},r=Object.keys(i);for(e=0;e<r.length;e++)n=r[e],t.indexOf(n)>=0||(o[n]=i[n]);return o}(i,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);for(e=0;e<r.length;e++)n=r[e],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(i,n)&&(o[n]=i[n])}return o}var a=e.createContext({}),h=function(i){var t=e.useContext(a),n=t;return i&&(n="function"==typeof i?i(t):c(c({},t),i)),n},s=function(i){var t=h(i.components);return e.createElement(a.Provider,{value:t},i.children)},g="mdxType",u={inlineCode:"code",wrapper:function(i){var t=i.children;return e.createElement(e.Fragment,{},t)}},d=e.forwardRef((function(i,t){var n=i.components,o=i.mdxType,r=i.originalType,a=i.parentName,s=l(i,["components","mdxType","originalType","parentName"]),g=h(n),d=o,p=g["".concat(a,".").concat(d)]||g[d]||u[d]||r;return n?e.createElement(p,c(c({ref:t},s),{},{components:n})):e.createElement(p,c({ref:t},s))}));function p(i,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof i||o){var r=n.length,c=new Array(r);c[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=i,l[g]="string"==typeof i?i:o,c[1]=l;for(var h=2;h<r;h++)c[h]=n[h];return e.createElement.apply(null,c)}return e.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20745:(i,t,n)=>{var e=n(73935);t.s=e.createRoot,e.hydrateRoot}}]);