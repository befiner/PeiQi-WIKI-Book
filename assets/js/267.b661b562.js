(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{2640:function(s,a,t){s.exports=t.p+"assets/img/1627121334280-904d0c7a-4bc8-46ee-a4f2-6fe9939c2237.4f48eafb.png"},2641:function(s,a,t){s.exports=t.p+"assets/img/1627121338258-e1128eab-4a37-4915-8c7b-584c0baea8d1.d8e69859.png"},2642:function(s,a,t){s.exports=t.p+"assets/img/1627121342813-aab7d6da-b925-451f-9abb-49f03eb53c84.6394c4f8.png"},3280:function(s,a,t){"use strict";t.r(a);var e=t(64),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"jboss-4-x-jbossmq-jms-反序列化漏洞-cve-2017-7504"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jboss-4-x-jbossmq-jms-反序列化漏洞-cve-2017-7504"}},[s._v("#")]),s._v(" JBoss 4.x JBossMQ JMS 反序列化漏洞 CVE-2017-7504")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("Red Hat JBoss Application Server 是一款基于JavaEE的开源应用服务器。JBoss AS 4.x及之前版本中，JbossMQ实现过程的JMS over HTTP Invocation Layer的HTTPServerILServlet.java文件存在反序列化漏洞，远程攻击者可借助特制的序列化数据利用该漏洞执行任意代码。")]),s._v(" "),a("h2",{attrs:{id:"影响版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[s._v("#")]),s._v(" 影响版本")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("JBoss AS 4.x及之前版本")]),a("br"),s._v(" "),a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("https://github.com/vulhub/vulhub.git\ncd vulhub/jboss/CVE-2017-7504\ndocker-compose build\ndocker-compose up -d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("p",[s._v("访问控制台")]),s._v(" "),a("p",[a("img",{attrs:{src:t(2640),alt:"img"}})]),s._v(" "),a("p",[s._v("使用工具 "),a("a",{attrs:{href:"https://github.com/joaomatosf/jexboss",target:"_blank",rel:"noopener noreferrer"}},[s._v("Jexboss"),a("OutboundLink")],1),s._v(" 进行漏洞扫描")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("python3 jexboss.py -host http://192.168.51.133:8080\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(2641),alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(2642),alt:"img"}})]),s._v(" "),a("p",[s._v("成功利用漏洞执行命令")])],1)}),[],!1,null,null,null);a.default=r.exports}}]);