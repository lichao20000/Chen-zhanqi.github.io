(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{510:function(e,a,s){"use strict";s.r(a);var t=s(4),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"一、问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、问题"}},[e._v("#")]),e._v(" 一、问题")]),e._v(" "),s("p",[e._v("celery是4.4.2版本，使用的message broker是RabbitMQ3.8.5，在配置好了celery，写好了tasks.py文件后，使用以下命令启动celery:")]),e._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[e._v("celery "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("A celery_app worker "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("l log\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("执行了需要发送邮件的操作后，celery虽然显示接收到了任务，却一直不执行。重启多次celery和rabbitmq也没有效果。")]),e._v(" "),s("h2",{attrs:{id:"二、解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、解决"}},[e._v("#")]),e._v(" 二、解决")]),e._v(" "),s("p",[e._v("celery 4.x 对windows的支持并不是那么好。需要做一些额外的工作。")]),e._v(" "),s("h3",{attrs:{id:"方法一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[e._v("#")]),e._v(" 方法一")]),e._v(" "),s("p",[e._v("添加--pool=solo参数")]),e._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[e._v("celery "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("A celery_app worker "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("pool"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("solo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("l log\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"方法二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[e._v("#")]),e._v(" 方法二")]),e._v(" "),s("p",[e._v("安装gevent，然后在启动celery的时候添加gevent参数")]),e._v(" "),s("p",[s("code",[e._v("pip install gevent")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("celery -A celery_app worker -l info -P gevent\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);