import{L as $,_ as v,C as b,n as T,E as z,t as C,v as k,x as B,y as G,z as A,F as U,A as j,B as x,D as K,G as q,f as W}from"./index-CaPlJDh4.js";import{U as Ce,h as xe,T as Pe,P as Se,Z as Le,a0 as Oe,a6 as $e,O as ze,Q as ke,W as Be,a7 as Ge,a8 as Ue,X as je,a4 as Ke,a5 as qe,I as We,o as Ye,a1 as Ve,a2 as Ne,a3 as He,N as Je,V as Qe,H as Xe,M as Ze,l as et,J as tt,R as nt,Y as at,$ as it,K as st,S as rt,w as ot}from"./index-CaPlJDh4.js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y="analytics",Y="firebase_id",V="origin",N=60*1e3,H="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",I="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=new $("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},u=new z("analytics","Analytics",J);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){if(!e.startsWith(I)){const t=u.create("invalid-gtag-resource",{gtagURL:e});return d.warn(t.message),""}return e}function P(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function X(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Z(e,t){const n=X("firebase-js-sdk-policy",{createScriptURL:Q}),i=document.createElement("script"),a=`${I}?l=${e}&id=${t}`;i.src=n?n?.createScriptURL(a):a,i.async=!0,document.head.appendChild(i)}function ee(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function te(e,t,n,i,a,s){const r=i[a];try{if(r)await t[r];else{const c=(await P(n)).find(l=>l.measurementId===a);c&&await t[c.appId]}}catch(o){d.error(o)}e("config",a,s)}async function ne(e,t,n,i,a){try{let s=[];if(a&&a.send_to){let r=a.send_to;Array.isArray(r)||(r=[r]);const o=await P(n);for(const c of r){const l=o.find(h=>h.measurementId===c),f=l&&t[l.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",i,a||{})}catch(s){d.error(s)}}function ae(e,t,n,i){async function a(s,...r){try{if(s==="event"){const[o,c]=r;await ne(e,t,n,o,c)}else if(s==="config"){const[o,c]=r;await te(e,t,n,i,o,c)}else if(s==="consent"){const[o,c]=r;e("consent",o,c)}else if(s==="get"){const[o,c,l]=r;e("get",o,c,l)}else if(s==="set"){const[o]=r;e("set",o)}else e(s,...r)}catch(o){d.error(o)}}return a}function ie(e,t,n,i,a){let s=function(...r){window[i].push(arguments)};return window[a]&&typeof window[a]=="function"&&(s=window[a]),window[a]=ae(s,e,t,n),{gtagCore:s,wrappedGtag:window[a]}}function se(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(I)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=30,oe=1e3;class ce{constructor(t={},n=oe){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const S=new ce;function le(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function de(e){var t;const{appId:n,apiKey:i}=e,a={method:"GET",headers:le(i)},s=H.replace("{app-id}",n),r=await fetch(s,a);if(r.status!==200&&r.status!==304){let o="";try{const c=await r.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw u.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function ue(e,t=S,n){const{appId:i,apiKey:a,measurementId:s}=e.options;if(!i)throw u.create("no-app-id");if(!a){if(s)return{measurementId:s,appId:i};throw u.create("no-api-key")}const r=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new he;return setTimeout(async()=>{o.abort()},N),L({appId:i,apiKey:a,measurementId:s},r,o,t)}async function L(e,{throttleEndTimeMillis:t,backoffCount:n},i,a=S){var s;const{appId:r,measurementId:o}=e;try{await fe(i,t)}catch(c){if(o)return d.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:r,measurementId:o};throw c}try{const c=await de(e);return a.deleteThrottleMetadata(r),c}catch(c){const l=c;if(!pe(l)){if(a.deleteThrottleMetadata(r),o)return d.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:r,measurementId:o};throw c}const f=Number((s=l?.customData)===null||s===void 0?void 0:s.httpStatus)===503?A(n,a.intervalMillis,re):A(n,a.intervalMillis),h={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return a.setThrottleMetadata(r,h),d.debug(`Calling attemptFetch again in ${f} millis`),L(e,h,i,a)}}function fe(e,t){return new Promise((n,i)=>{const a=Math.max(t-Date.now(),0),s=setTimeout(n,a);e.addEventListener(()=>{clearTimeout(s),i(u.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function pe(e){if(!(e instanceof U)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class he{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function me(e,t,n,i,a){if(a&&a.global){e("event",n,i);return}else{const s=await t,r=Object.assign(Object.assign({},i),{send_to:s});e("event",n,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ge(){if(B())try{await G()}catch(e){return d.warn(u.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return d.warn(u.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ye(e,t,n,i,a,s,r){var o;const c=ue(e);c.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&d.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>d.error(p)),t.push(c);const l=ge().then(p=>{if(p)return i.getId()}),[f,h]=await Promise.all([c,l]);se(s)||Z(s,f.measurementId),a("js",new Date);const g=(o=r?.config)!==null&&o!==void 0?o:{};return g[V]="firebase",g.update=!0,h!=null&&(g[Y]=h),a("config",f.measurementId,g),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this.app=t}_delete(){return delete m[this.app.options.appId],Promise.resolve()}}let m={},D=[];const E={};let w="dataLayer",Ie="gtag",M,O,R=!1;function ve(){const e=[];if(k()&&e.push("This is a browser extension environment."),q()||e.push("Cookies are not available."),e.length>0){const t=e.map((i,a)=>`(${a+1}) ${i}`).join(" "),n=u.create("invalid-analytics-context",{errorInfo:t});d.warn(n.message)}}function be(e,t,n){ve();const i=e.options.appId;if(!i)throw u.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)d.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw u.create("no-api-key");if(m[i]!=null)throw u.create("already-exists",{id:i});if(!R){ee(w);const{wrappedGtag:s,gtagCore:r}=ie(m,D,E,w,Ie);O=s,M=r,R=!0}return m[i]=ye(e,D,E,t,M,w,n),new we(e)}function Te(e=j()){e=C(e);const t=x(e,y);return t.isInitialized()?t.getImmediate():Ae(e)}function Ae(e,t={}){const n=x(e,y);if(n.isInitialized()){const a=n.getImmediate();if(K(t,n.getOptions()))return a;throw u.create("already-initialized")}return n.initialize({options:t})}function De(e,t,n,i){e=C(e),me(O,m[e.app.options.appId],t,n,i).catch(a=>d.error(a))}const F="@firebase/analytics",_="0.10.8";function Ee(){v(new b(y,(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),a=t.getProvider("installations-internal").getImmediate();return be(i,a,n)},"PUBLIC")),v(new b("analytics-internal",e,"PRIVATE")),T(F,_),T(F,_,"esm2017");function e(t){try{const n=t.getProvider(y).getImmediate();return{logEvent:(i,a,s)=>De(n,i,a,s)}}catch(n){throw u.create("interop-component-reg-failed",{reason:n})}}}Ee();console.log("%c🚀 Using Optimized Firebase (Tracing Disabled)","color: blue; font-weight: bold; font-size: 14px");let Me;typeof window<"u"&&(Me=Te(W));export{Me as analytics,W as app,Ce as collection,xe as db,Pe as deleteDoc,Se as doc,Le as endAt,Oe as endBefore,$e as equalTo,ze as get,ke as getDoc,Be as getDocs,Ge as getTracingInfo,Ue as isTracingEnabled,je as limit,Ke as limitToFirst,qe as limitToLast,We as onValue,Ye as orderBy,Ve as orderByChild,Ne as orderByKey,He as orderByValue,Je as push,Qe as query,Xe as ref,Ze as remove,et as rtdb,tt as set,nt as setDoc,at as startAfter,it as startAt,st as update,rt as updateDoc,ot as where};
//# sourceMappingURL=traced-firebase-BDoSwXcB.js.map
