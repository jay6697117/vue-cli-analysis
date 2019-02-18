(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{150:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),n("p",[t._v("对，你没有看错，这就是 "),n("code",[t._v("@vue/cli-init 的源码")]),t._v("。这段代码引入了 "),n("a",{attrs:{href:"https://github.com/sindresorhus/execa",target:"_blank",rel:"noopener noreferrer"}},[t._v("execa"),n("OutboundLink")],1),t._v("，execa 是可以调用 shell 和本地外部程序的 javascript 封装，会启动子进程执行。支持多操作系统，包括 windows。如果父进程退出，则生成的全部子进程都被杀死。对应在这里就会启动一个子线程去执行 "),n("code",[t._v("vue-cli/bin/vue-init")]),t._v(" 脚本，那么 "),n("code",[t._v("vue-cli/bin/vue-init")]),t._v(" 又是什么脚本？其实就是 "),n("code",[t._v("vue-cli 2.x")]),t._v(" 中对应 "),n("code",[t._v("vue init")]),t._v(" 的脚本（"),n("code",[t._v("vue cli 3.0")]),t._v(" 中 "),n("code",[t._v("vue init")]),t._v(" 命令的源码就是加载 "),n("code",[t._v("vue-cli 2.x")]),t._v(" 中的 "),n("code",[t._v("vue init")]),t._v(" 命令）。")]),t._v(" "),t._m(3)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vue-cli-init-分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-init-分析","aria-hidden":"true"}},[this._v("#")]),this._v(" @vue/cli-init 分析")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("@vue/cli-init")]),this._v(" 的源码很简单，如下：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" execa "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'execa'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" binPath "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" require"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'vue-cli/bin/vue-init'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("execa")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  binPath"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  process"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("slice")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("indexOf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'init'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" stdio"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'inherit'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("那么接下来就开始分析 "),s("code",[this._v("vue-cli 2.x")]),this._v(" 中 "),s("code",[this._v("init")]),this._v(" 命令的源码。")])}],!1,null,null,null);e.options.__file="vue-cli-init-module.md";s.default=e.exports}}]);