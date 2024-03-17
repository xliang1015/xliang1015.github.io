(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{344:function(s,e,a){"use strict";a.r(e);var t=a(4),r=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Nodejs升级，引起的构建错误：0308010C:digital envelope routines::unsupported")]),s._v(" "),e("p",[s._v("原文：\nhttps://juejin.cn/post/7202639428132044858\nhttps://blog.csdn.net/m0_48300767/article/details/131450325")]),s._v(" "),e("h2",{attrs:{id:"_1、报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、报错"}},[s._v("#")]),s._v(" 1、报错")]),s._v(" "),e("p",[s._v("启动vue项目，报错如下：\nError: error:0308010C:digital envelope routines::unsupported")]),s._v(" "),e("h2",{attrs:{id:"_2、报错原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、报错原因"}},[s._v("#")]),s._v(" 2、报错原因")]),s._v(" "),e("p",[s._v("出现这个错误是因为 node.js V17版本中最近发布的OpenSSL3.0, 而OpenSSL3.0对允许算法和密钥大小增加了严格的限制，可能会对生态系统造成一些影响.")]),s._v(" "),e("p",[s._v("在node.js V17以前一些可以正常运行的的应用程序,但是在 V17 版本可能会抛出这个异常。")]),s._v(" "),e("h2",{attrs:{id:"_3、解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、解决方案"}},[s._v("#")]),s._v(" 3、解决方案")]),s._v(" "),e("h3",{attrs:{id:"_3-1-版本降级-解决报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-版本降级-解决报错"}},[s._v("#")]),s._v(" 3.1 版本降级，解决报错")]),s._v(" "),e("p",[s._v("尝试卸载Node.js 17+版本并重新安装Node.js 16+版本，然后再重新启动。")]),s._v(" "),e("p",[s._v("这个方法，测试有效，但我推荐的是第二个办法。")]),s._v(" "),e("h2",{attrs:{id:"_3-2-设置参数-解决报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-设置参数-解决报错"}},[s._v("#")]),s._v(" 3.2 设置参数，解决报错")]),s._v(" "),e("p",[s._v("在执行运行项目命令之前，先运行这个命令：")]),s._v(" "),e("p",[s._v("Linux & Mac OS：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("export NODE_OPTIONS=--openssl-legacy-provider \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("windows命令提示符:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("set NODE_OPTIONS=--openssl-legacy-provider \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这样就可以解决了，亲测有效。")]),s._v(" "),e("p",[s._v("唯一不足，是每次启动项目都要运行，所以，我们可以把它配置一下。也就是第三种方法。")]),s._v(" "),e("h2",{attrs:{id:"_3-3-修改配置文件-解决报错-推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-修改配置文件-解决报错-推荐"}},[s._v("#")]),s._v(" 3.3 修改配置文件，解决报错（推荐）")]),s._v(" "),e("p",[s._v("根据你的系统类型，选择一个上面的命令，如，我是Mac系统，我就用：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("export NODE_OPTIONS=--openssl-legacy-provider \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后，找到项目的package.json文件，把自己对应的命令，加上&&，写到启动项目的配置里面（构建写不写都可以），即可。")]),s._v(" "),e("p",[s._v("例1：脚手架")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('"scripts": {\n   "serve": "export NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve",\n   "build": "export NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service build"\n},\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("例2：Vue-Element-Admin")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(' "scripts": {\n    "dev": "export NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve",\n    //略...\n  },\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);