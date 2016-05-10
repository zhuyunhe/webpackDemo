webpackJsonp([1,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(7);

	console.log('index2');

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./reset.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./reset.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*basic reset*/\r\ndiv, dl, dt, dd, ul, ol, li, i, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td, header, nav, section, article, footer, aside {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-weight: inherit;\r\n    font-style: inherit;\r\n    list-style-type: none;\r\n}\r\nhtml {\r\n\theight: 100%;\r\n}\r\nbody {\r\n\theight: 100%;\r\n\tmax-width: 600px;\r\n\tmargin: auto;\r\n\tfont-family: \"\\5FAE\\8F6F\\96C5\\9ED1\", Helvetica, Arial, sans-serif;\r\n\tcolor: #343434;\r\n    background-color: #f7f7f7;\r\n}\r\na,a:focus,a:hover,a:active,a:visited{\r\n    text-decoration: none;\r\n    color: inherit;\r\n    -webkit-tap-highlight-color:rgba(0,0,0,0);\r\n}\r\na:hover{\r\n    cursor: pointer;\r\n}\r\ndiv{\r\n    box-sizing:border-box;\r\n}\r\nli{\r\n    list-style: none;\r\n    display: inline-block;\r\n}\r\ndiv, span{\r\n    -webkit-tap-highlight-color:rgba(0,0,0,0);\r\n}\r\nimg{\r\n\tmax-width: 100%;\r\n\tvertical-align: bottom;\r\n}\r\n/*清除浮动*/\r\n.clearfix:after{\r\n    content: \"\";\r\n    display: block;\r\n    height: 0;\r\n    clear: both;\r\n    visibility: hidden;\r\n}\r\n.clearfix {\r\n    *zoom: 1;\r\n}\r\n.taiji{\r\n    width: 120px;\r\n    height: 120px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-image: url(" + __webpack_require__(5) + ");\r\n}", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "html {\n  height: 100%;\n}\nbody {\n  height: 100%;\n  max-width: 600px;\n}\n#header {\n  color: #6c94be;\n}\n", ""]);

	// exports


/***/ }
]);