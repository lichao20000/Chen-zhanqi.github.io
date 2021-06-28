(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{534:function(t,a,s){"use strict";s.r(a);var e=s(4),o=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",[t._v("TB网页登录流程解析，使用Python代码实现登录后保存Cookie信息")])]),t._v(" "),s("h2",{attrs:{id:"一、淘宝登录流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、淘宝登录流程"}},[t._v("#")]),t._v(" 一、淘宝登录流程")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/chen-zq/bgimages/raw/master/img/%E6%B7%98%E5%AE%9D%E7%99%BB%E5%BD%95%E6%B5%81%E7%A8%8B%E5%9B%BE.png",alt:"TB登录流程图"}})]),t._v(" "),s("blockquote",[s("p",[t._v("淘宝ua参数：ua(User-Agent)故名用户代理，淘宝的ua参数加入了浏览器、ip、电脑、时间等信息，然后加密生成，在很多地方使用，不仅仅是登录")])]),t._v(" "),s("p",[s("strong",[t._v("从代码层面考虑将模拟登录淘宝分为以下四个步骤：")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("输入用户名后，浏览器会向淘宝（taobao.com）发起一个post的请求，判断是否出现滑块验证！")])]),t._v(" "),s("li",[s("p",[t._v("用户输入密码后，浏览器向淘宝（taobao.com）又发起一个post请求，验证用户名密码是否正确，如果正确则返回一个token。")])]),t._v(" "),s("li",[s("p",[t._v("浏览器拿着token去阿里巴巴（alibaba.com）交换st码！")])]),t._v(" "),s("li",[s("p",[t._v("浏览器获取st码之后，拿着st码获取cookies，登录成功")])])]),t._v(" "),s("h2",{attrs:{id:"二、模拟登录实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、模拟登录实现"}},[t._v("#")]),t._v(" 二、模拟登录实现")]),t._v(" "),s("h3",{attrs:{id:"_1-判断是否需要滑块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-判断是否需要滑块"}},[t._v("#")]),t._v(" 1.判断是否需要滑块")]),t._v(" "),s("blockquote",[s("p",[t._v("举个例子：某台设备可能出现登录过大量的账号，这时候淘宝就可以从ua参数中获取设备号，然后对该设备进行限制！")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/chen-zq/bgimages/raw/master/img/TB%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E9%9C%80%E8%A6%81%E6%BB%91%E5%9D%97.png",alt:"TB判断是否需要滑块"}})]),t._v(" "),s("h3",{attrs:{id:"_2-验证用户名密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-验证用户名密码"}},[t._v("#")]),t._v(" 2.验证用户名密码")]),t._v(" "),s("p",[t._v("这里一步也就是上面时序图图中的第5步：请求登录，这里会将用户名、ua参数、加密密码等参数post到淘宝（taobao.com）去验证。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/chen-zq/bgimages/raw/master/img/TB%E8%B4%A6%E5%8F%B7%E5%AF%86%E7%A0%81%E9%AA%8C%E8%AF%81.png",alt:"https://gitee.com/chen-zq/bgimages/raw/master/img/TB账号密码验证"}})]),t._v(" "),s("p",[t._v("验证账号密码获取st码申请地址")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/chen-zq/bgimages/raw/master/img/TB%E9%AA%8C%E8%AF%81%E5%AF%86%E7%A0%81%E8%8E%B7%E5%8F%96st%E5%9C%B0%E5%9D%80.png",alt:"TB验证密码获取st地址"}})]),t._v(" "),s("p",[t._v("结果")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/chen-zq/bgimages/raw/master/img/TBst%E7%A0%81%E7%94%B3%E8%AF%B7%E5%9C%B0%E5%9D%80.png",alt:"TBst码申请地址"}})]),t._v(" "),s("p",[t._v("可以看到申请st码链接后面带了一个token")]),t._v(" "),s("h3",{attrs:{id:"_3-申请st码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-申请st码"}},[t._v("#")]),t._v(" 3.申请st码")]),t._v(" "),s("p",[t._v("申请到了淘宝（taobao.com）的token，这一步就是用token来换取st码")]),t._v(" "),s("p",[t._v("为什么淘宝登录需要这么麻烦呢？直接在 taobao.com 登录不就可以吗？为什么要先在taobao验证用户名密码，通过之后再去 alibaba.com 换取st码登录呢？")]),t._v(" "),s("p",[t._v("任何公司的框架都是慢慢演变的结果，我想最开始的淘宝登录肯定没这么复杂。但是随着阿里巴巴的慢慢壮大，很多事业线都划分开来，但是这些事业线之间又有关联性，比如用户登录了淘宝账号之后天猫就不需要再登录了呢？（注意淘宝和天猫的顶级域名不同，所以不能共享cookis）为了解决这个问题，单点登录就出现了。")]),t._v(" "),s("blockquote",[s("p",[t._v("单点登录（Single Sign On），简称为 SSO，是目前比较流行的企业业务整合的解决方案之一。SSO的定义是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统。 ——百度百科")])]),t._v(" "),s("p",[t._v("用户数据在淘宝这里，所以需要现在淘宝（taobao.com）验证用户名和密码，验证通过生成一个token，浏览器拿着token去和阿里巴巴（alibaba.com）申请单点登录码（st码），阿里巴巴收到请求验证token通过则返回st码，所以用token换st码的原因就在于单点登录！")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/chen-zq/bgimages/raw/master/img/TB%E7%94%B3%E8%AF%B7st%E7%A0%81.png",alt:"TB申请st码"}})]),t._v(" "),s("h3",{attrs:{id:"_4-使用st码登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用st码登录"}},[t._v("#")]),t._v(" 4.使用st码登录")]),t._v(" "),s("p",[t._v("成功获取st码之后我们就可以来登录了，这一步是通过st码获取登录的cookies并保存")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/chen-zq/bgimages/raw/master/img/TB%E8%8E%B7%E5%8F%96cookie%E5%B9%B6%E4%BF%9D%E5%AD%98.png",alt:"TB获取cookie并保存"}})]),t._v(" "),s("h2",{attrs:{id:"三-、验证cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-、验证cookie"}},[t._v("#")]),t._v(" 三 、验证cookie")]),t._v(" "),s("p",[t._v("每次运行加载本地cookies文件，判断是否过期。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/chen-zq/bgimages/raw/master/img/TB%E9%AA%8C%E8%AF%81cookie%E6%98%AF%E5%90%A6%E8%BF%87%E6%9C%9F.png",alt:"TB验证cookie是否过期"}})])])}),[],!1,null,null,null);a.default=o.exports}}]);