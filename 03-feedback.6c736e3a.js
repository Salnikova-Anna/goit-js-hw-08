function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function p(e,t,n){var r,i,o,a,f,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function S(e){return l=e,f=setTimeout(j,t),c?b(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function j(){var e=g();if(h(e))return x(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?d(n,o-(e-l)):n}(e))}function x(e){return f=void 0,p&&r?b(e):(r=i=void 0,a)}function O(){var e=g(),n=h(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(j,t),b(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=y(t)||0,v(n)&&(c=!!n.leading,o=(s="maxWait"in n)?m(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=i=f=void 0},O.flush=function(){return void 0===f?a:x(g())},O}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const b={form:document.querySelector(".feedback-form"),input:document.querySelector('input[type="email"]'),textarea:document.querySelector('textarea[name="message"]')};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(b.input.value=e.email?e.email:"",b.textarea.value=e.message?e.message:"")}();let S={};const h=JSON.parse(localStorage.getItem("feedback-form-state"));h&&(S.email=h.email||"",S.message=h.message||""),b.form.addEventListener("input",e(t)((function(e){e.preventDefault(),S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),b.form.addEventListener("submit",(function(e){e.preventDefault();const{email:t,message:n}=e.target.elements;if(""===t.value||""===n.value)return alert("Please fill in all the fields!");console.log(S),S={},e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.6c736e3a.js.map
