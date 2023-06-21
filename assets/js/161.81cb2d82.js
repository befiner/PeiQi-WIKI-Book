(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{2709:function(s,t,a){"use strict";a.r(t);var n=a(64),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_4-telephone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-telephone"}},[s._v("#")]),s._v(" 4.Telephone")]),s._v(" "),t("h2",{attrs:{id:"题目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),t("p",[t("img",{attrs:{src:a(882),alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"解题过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解题过程"}},[s._v("#")]),s._v(" 解题过程")]),s._v(" "),t("p",[s._v("题目源码")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// SPDX-License-Identifier: MIT")]),s._v("\npragma solidity "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\ncontract Telephone "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n  address "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" owner"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    owner "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sender"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("changeOwner")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("address _owner")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("origin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sender"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      owner "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" _owner"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("这里需要区分  tx.origin 和 msg.sender ，msg.sender是函数的直接调用方，")]),s._v(" "),t("p",[s._v("而 tx.origin 则必然是这个交易的原始发起方，无论中间有多少次合约内/跨合约函数调用，一定是账户地址而不是合约地址。")]),s._v(" "),t("p",[t("img",{attrs:{src:a(883),alt:"img"}})]),s._v(" "),t("p",[s._v("回到代码块中, 需要做到的是 tx.origin != msg.sender")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("changeOwner")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("address _owner")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("origin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sender"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      owner "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" _owner"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("如上图，我们只需要部署一个第三方合约A调用目标合约B，就可以通过判断获取 owner权限")]),s._v(" "),t("p",[t("img",{attrs:{src:a(884),alt:"img"}})])])}),[],!1,null,null,null);t.default=e.exports},882:function(s,t,a){s.exports=a.p+"assets/img/1645054982773-847f6b95-e86c-4f6f-94f6-81a374200aec.fdb6dd3a.png"},883:function(s,t,a){s.exports=a.p+"assets/img/1645055928344-cee18fe6-7358-46bc-905d-b1bee7217544.813031f6.png"},884:function(s,t,a){s.exports=a.p+"assets/img/1645094230982-bc21da12-33e6-4223-8e3a-5b6ad380e5aa.323a5106.png"}}]);