(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["postvideo"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/app/main/components/shared/post-video.vue":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/app/main/components/shared/post-video.vue ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n\n    data: function data() {\n        return {\n            video: {\n                message: \"Hey <a href=\\\"#\\\">Cindi</a>, you should really check out this new song by Iron Maid. The next time they come to the city we should totally go!\",\n                thumbnail: \"img/video-youtube1.jpg\",\n                url: 'https://youtube.com/watch?v=excVFQ2TWig',\n                title: \"Iron Maid - ChillGroves\",\n                comment: \"Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt\\n                        ut labore et dolore magna aliqua...\",\n                linkSite: {\n                    url: \"http://www.youtube.com\",\n                    title: \"YOUTUBE.COM\"\n                }\n\n            }\n        };\n    }\n}));\n\n//# sourceURL=webpack:///./src/app/main/components/shared/post-video.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7be8fcd1\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/app/main/components/shared/post-video.vue":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7be8fcd1","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/app/main/components/shared/post-video.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"p\", [_vm._v(_vm._s(_vm.video.message))]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"post-video\" }, [\n      _c(\"div\", { staticClass: \"video-thumb\" }, [\n        _c(\"img\", { attrs: { src: _vm.video.thumbnail, alt: \"photo\" } }),\n        _vm._v(\" \"),\n        _c(\"a\", { staticClass: \"play-video\", attrs: { href: _vm.video.url } }, [\n          _c(\"svg\", { staticClass: \"olymp-play-icon\" }, [\n            _c(\"use\", {\n              attrs: {\n                \"xlink:href\": \"svg-icons/sprites/icons.svg#olymp-play-icon\"\n              }\n            })\n          ])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"video-content\" }, [\n        _c(\"a\", { staticClass: \"h4 title\", attrs: { href: \"#\" } }, [\n          _vm._v(_vm._s(_vm.video.title))\n        ]),\n        _vm._v(\" \"),\n        _c(\"p\", [\n          _vm._v(\n            \"\\n              \" + _vm._s(_vm.video.comment) + \"\\n            \"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"a\",\n          { staticClass: \"link-site\", attrs: { href: _vm.video.linkSite.url } },\n          [_vm._v(_vm._s(_vm.video.linkSite.title))]\n        )\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\nif (false) {}\n\n//# sourceURL=webpack:///./src/app/main/components/shared/post-video.vue?./node_modules/vue-loader/lib/template-compiler?%7B%22id%22:%22data-v-7be8fcd1%22,%22hasScoped%22:false,%22optionsId%22:%220%22,%22buble%22:%7B%22transforms%22:%7B%7D%7D%7D!./node_modules/vue-loader/lib/selector.js?type=template&index=0");

/***/ }),

/***/ "./src/app/main/components/shared/post-video.vue":
/*!*******************************************************!*\
  !*** ./src/app/main/components/shared/post-video.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_post_video_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./post-video.vue */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/app/main/components/shared/post-video.vue\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7be8fcd1_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_post_video_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-7be8fcd1\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./post-video.vue */ \"./node_modules/vue-loader/lib/template-compiler/index.js?{\\\"id\\\":\\\"data-v-7be8fcd1\\\",\\\"hasScoped\\\":false,\\\"optionsId\\\":\\\"0\\\",\\\"buble\\\":{\\\"transforms\\\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/app/main/components/shared/post-video.vue\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ \"./node_modules/vue-loader/lib/runtime/component-normalizer.js\");\nvar disposed = false\n/* script */\n\n\n/* template */\n\n/* template functional */\nvar __vue_template_functional__ = false\n/* styles */\nvar __vue_styles__ = null\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\n\nvar Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_post_video_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7be8fcd1_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_post_video_vue__WEBPACK_IMPORTED_MODULE_1__[\"render\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7be8fcd1_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_post_video_vue__WEBPACK_IMPORTED_MODULE_1__[\"staticRenderFns\"],\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src\\\\app\\\\main\\\\components\\\\shared\\\\post-video.vue\"\n\n/* hot reload */\nif (false) {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//# sourceURL=webpack:///./src/app/main/components/shared/post-video.vue?");

/***/ })

}]);