(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{550:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[s._v("流行的跨域认证解决方案, JWT原理和用法")])]),s._v(" "),a("h2",{attrs:{id:"jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[s._v("#")]),s._v(" JWT")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("Json web token (JWT), 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准（(RFC 7519).该token被设计为紧凑且安全的，特别适用于分布式站点的单点登录（SSO）场景。JWT的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源，也可以增加一些额外的其它业务逻辑所必须的声明信息，该token也可直接被用于认证，也可被加密。")])]),s._v(" "),a("h2",{attrs:{id:"传统session认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传统session认证"}},[s._v("#")]),s._v(" 传统session认证")]),s._v(" "),a("p",[s._v("互联网服务离不开用户认证, 一般流程")]),s._v(" "),a("ol",[a("li",[s._v("用户向服务器发送用户名和密码。")]),s._v(" "),a("li",[s._v("服务器验证通过后，在当前对话（session）里面保存相关数据，比如用户角色.登录时间等等。")]),s._v(" "),a("li",[s._v("服务器向用户返回一个 session_id，写入用户的 Cookie。")]),s._v(" "),a("li",[s._v("用户随后的每一次请求，都会通过 Cookie，将 session_id 传回服务器。")]),s._v(" "),a("li",[s._v("服务器收到 session_id，找到前期保存的数据，由此得知用户的身份。")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[s._v("这种模式的问题在于，扩展性（scaling）不好。单机没有问题，如果服务器集群，或者跨域的服务导向架构，就要求 session 数据共享，每台服务器都能够读取 session。")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("举例，A 网站和 B 网站是同一家公司的关联服务。现在要求，用户只要在其中一个网站登录，再访问另一个网站就会自动登录，请问怎么实现？")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("一种解决方案是 session 数据持久化，写入数据库或别的持久层。各种服务收到请求后，都向持久层请求数据。这种方案的优点是架构清晰，缺点是工程量比较大。另外，持久层万一挂了，就会单点失败")])]),s._v(" "),a("li",[a("p",[s._v("另一种方案是服务器索性不保存 session 数据了，所有数据都保存在客户端，每次请求都发回服务器。JWT 就是这种方案的一个代表")])])])]),s._v(" "),a("h2",{attrs:{id:"token的鉴权机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token的鉴权机制"}},[s._v("#")]),s._v(" token的鉴权机制")]),s._v(" "),a("p",[s._v("流程:")]),s._v(" "),a("ul",[a("li",[s._v("用户使用用户名密码来请求服务器")]),s._v(" "),a("li",[s._v("服务器进行验证用户的信息")]),s._v(" "),a("li",[s._v("服务器通过验证发送给用户一个token")]),s._v(" "),a("li",[s._v("客户端存储token，并在每次请求时附送上这个token值")]),s._v(" "),a("li",[s._v("服务端验证token值，并返回数据")])]),s._v(" "),a("p",[s._v("token必须要在每次请求时传递给服务端，应该保存在请求头里， 另外，服务端要支持CORS(跨来源资源共享)策略，一般在服务端这么做就可以"),a("code",[s._v("Access-Control-Allow-Origin: *")])]),s._v(" "),a("h2",{attrs:{id:"jwt-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt-原理"}},[s._v("#")]),s._v(" JWT 原理")]),s._v(" "),a("p",[s._v("JWT 的原理: 服务器认证以后，生成一个 JSON 对象，发回给用户，如下")]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"姓名"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"张三"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"角色"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"管理员"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"到期时间"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2018年7月1日0点0分"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"jwt-数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt-数据结构"}},[s._v("#")]),s._v(" JWT 数据结构")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/chen-zq/bgimages/raw/master/img/20201207180602_JWT%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.png",alt:"结构图"}})]),s._v(" "),a("p",[s._v("中间用点（.）分隔成三个部分。JWT 内部没有换行，这里为了便于展示, 如下:\n"),a("code",[s._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ")])]),s._v(" "),a("p",[s._v("JWT 的三个部分依次如下:")]),s._v(" "),a("ul",[a("li",[s._v("Header（头部）")]),s._v(" "),a("li",[s._v("Payload（负载）")]),s._v(" "),a("li",[s._v("Signature（签名）")])]),s._v(" "),a("h2",{attrs:{id:"jwt-特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt-特点"}},[s._v("#")]),s._v(" JWT 特点")]),s._v(" "),a("ol",[a("li",[s._v("JWT 默认是不加密，但也是可以加密的。生成原始 Token 以后，可以用密钥再加密一次。")]),s._v(" "),a("li",[s._v("JWT 不加密的情况下，不能将秘密数据写入 JWT。")]),s._v(" "),a("li",[s._v("JWT 不仅可以用于认证，也可以用于交换信息。有效使用 JWT，可以降低服务器查询数据库的次数。")]),s._v(" "),a("li",[s._v("JWT 的最大缺点是，由于服务器不保存 session 状态，因此无法在使用过程中废止某个 token，或者更改 token 的权限。也就是说，一旦 JWT 签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。")]),s._v(" "),a("li",[s._v("JWT 本身包含了认证信息，一旦泄露，任何人都可以获得该令牌的所有权限。为了减少盗用，JWT 的有效期应该设置得比较短。对于一些比较重要的权限，使用时应该再次对用户进行认证。")]),s._v(" "),a("li",[s._v("为了减少盗用，JWT 不应该使用 HTTP 协议明码传输，要使用 HTTPS 协议传输。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);