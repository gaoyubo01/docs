(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{436:function(t,e,a){"use strict";a.r(e);var s=a(56),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"配置参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置参考"}},[t._v("#")]),t._v(" 配置参考")]),t._v(" "),a("Bit"),t._v(" "),a("h2",{attrs:{id:"基本配置-basic-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本配置-basic-config"}},[t._v("#")]),t._v(" 基本配置(basic config)")]),t._v(" "),a("h3",{attrs:{id:"base"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base"}},[t._v("#")]),t._v(" base")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("/")])])]),t._v(" "),a("p",[t._v("网站用来部署的基准 URL。如果你打算在子路径下部署你的站点，例如 GitHub 页面，则需要设置此项。如果你打算将你的网站部署到"),a("code",[t._v("https://foo.github.io/bar/")]),t._v("，则应将 "),a("code",[t._v("base")]),t._v(" 设置为 "),a("code",[t._v('"/bar/"')]),t._v("。它应该始终以斜杠开始和结束。")]),t._v(" "),a("p",[t._v("在其他选项中，"),a("code",[t._v("base")]),t._v(" 会自动添加到以 "),a("code",[t._v("/")]),t._v(" 开头的所有 URL 中，因此你只需指定一次即可。")]),t._v(" "),a("p",[a("strong",[t._v("另请参考：")])]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/assets.html#相对-urls"}},[t._v("基准 URL")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/guide/deploy.html#github-页面"}},[t._v("部署教程 > Github 页面")])],1)]),t._v(" "),a("h3",{attrs:{id:"title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" title")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("网站的标题。这将是所有页面标题的前缀，并显示在默认主题的导航栏中。")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("网站描述。这将在页面 HTML 中表现为一个 "),a("code",[t._v("<meta>")]),t._v(" 标签。")]),t._v(" "),a("h3",{attrs:{id:"head"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[t._v("#")]),t._v(" head")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Array")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("[]")])])]),t._v(" "),a("p",[t._v("被注入页面 HTML "),a("code",[t._v("<head>")]),t._v(" 额外的标签。每个标签可以用 "),a("code",[t._v("[tagName, { attrName: attrValue }, innerHTML?]")]),t._v(" 的形式指定。例如，要添加自定义图标：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("head")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/logo.png'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" host")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("'0.0.0.0'")])])]),t._v(" "),a("p",[t._v("指定用于 dev 服务器的主机。")]),t._v(" "),a("h3",{attrs:{id:"port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[t._v("#")]),t._v(" port")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("number")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("8080")])])]),t._v(" "),a("p",[t._v("指定用于 dev 服务器的端口。")]),t._v(" "),a("h3",{attrs:{id:"dest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dest"}},[t._v("#")]),t._v(" dest")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v(".vuepress/dist")])])]),t._v(" "),a("p",[t._v("指定 "),a("code",[t._v("vuepress build")]),t._v(" 的输出目录。")]),t._v(" "),a("h3",{attrs:{id:"ga"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ga"}},[t._v("#")]),t._v(" ga")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("提供 Google AnalyticsID 来开启集成功能。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("请留意 "),a("a",{attrs:{href:"https://ec.europa.eu/commission/priorities/justice-and-fundamental-rights/data-protection/2018-reform-eu-data-protection-rules_en",target:"_blank",rel:"noopener noreferrer"}},[t._v("GDPR (2018年欧盟数据保护规则改革)"),a("OutboundLink")],1),t._v(", 在合适或者需要的情况下，考虑将 Google Analytics 设置为"),a("a",{attrs:{href:"https://support.google.com/analytics/answer/2763052?hl=zh-Hans",target:"_blank",rel:"noopener noreferrer"}},[t._v("匿名化的 IP"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"serviceworker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serviceworker"}},[t._v("#")]),t._v(" serviceWorker")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("如果设置为 "),a("code",[t._v("true")]),t._v("，VuePress 将自动生成并注册一个 service worker ，这个 worker 将内容缓存以供离线使用（仅在生产环境中启用）。")]),t._v(" "),a("p",[t._v("如果开发了一个自定义主题，"),a("code",[t._v("Layout.vue")]),t._v(" 组件还将触发以下事件：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("sw-ready")])]),t._v(" "),a("li",[a("code",[t._v("sw-cached")])]),t._v(" "),a("li",[a("code",[t._v("sw-updated")])]),t._v(" "),a("li",[a("code",[t._v("sw-offline")])]),t._v(" "),a("li",[a("code",[t._v("sw-error")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("PWA 注意事项")]),t._v(" "),a("p",[a("code",[t._v("serviceWorker")]),t._v(" 选项只能处理 service worker。要使你的站点完全符合 PWA，你需要在"),a("code",[t._v(".vuepress/public")]),t._v(" 中提供 Web App 清单和图标。有关更多详细信息，请参阅 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN 关于 Web 应用程序清单的文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("此外，只有在你能够使用 SSL 部署你的站点时才能启用此功能，因为 service worker 只能在 HTTPs URLs 下注册。")])]),t._v(" "),a("h3",{attrs:{id:"locales"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#locales"}},[t._v("#")]),t._v(" locales")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("{ [path: string]: Object }")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("指定用于 i18n 支持，要获取更多细节，请参考"),a("RouterLink",{attrs:{to:"/guide/i18n.html"}},[t._v("国际化指南")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"shouldprefetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shouldprefetch"}},[t._v("#")]),t._v(" shouldPrefetch")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Function")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("() => true")])])]),t._v(" "),a("p",[t._v("一个函数，用来控制对于哪些文件，是需要生成 "),a("code",[t._v('<link rel="prefetch">')]),t._v(" 资源提示的。请参考 "),a("a",{attrs:{href:"https://ssr.vuejs.org/zh/api/#shouldpreload",target:"_blank",rel:"noopener noreferrer"}},[t._v("shouldPrefetch"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"主题化-theming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题化-theming"}},[t._v("#")]),t._v(" 主题化(theming)")]),t._v(" "),a("h3",{attrs:{id:"theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme"}},[t._v("#")]),t._v(" theme")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("指定此选项来使用自定义主题。使用 "),a("code",[t._v('"foo"')]),t._v(" 的值，VuePress 将尝试在 "),a("code",[t._v("node_modules/vuepress-theme-foo/Layout.vue")]),t._v(" 加载主题组件。")]),t._v(" "),a("h3",{attrs:{id:"themeconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themeconfig"}},[t._v("#")]),t._v(" themeConfig")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("{}")])])]),t._v(" "),a("p",[t._v("为使用的主题提供配置选项。这些选项将根据你使用的主题而有所不同。")]),t._v(" "),a("p",[a("strong",[t._v("另请参阅：")])]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/default-theme-config/"}},[t._v("默认主题配置")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"markdown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown"}},[t._v("#")]),t._v(" Markdown")]),t._v(" "),a("h3",{attrs:{id:"markdown-linenumbers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-linenumbers"}},[t._v("#")]),t._v(" markdown.lineNumbers")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("是否在每个代码块的左侧显示行号。")]),t._v(" "),a("p",[a("strong",[t._v("另请参阅：")])]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/markdown.html#行号"}},[t._v("行号")])],1)]),t._v(" "),a("h3",{attrs:{id:"markdown-slugify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-slugify"}},[t._v("#")]),t._v(" markdown.slugify")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Function")])]),t._v(" "),a("li",[t._v("Default: "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/lib/markdown/slugify.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("source"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("将标题文本转换为别名(slug)的函数。这会影响标题锚点、目录和侧边栏链接生成的 id 和链接。（译者注：此功能是为了解决非 ASCII 码字符生成链接时的 "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/issues/45",target:"_blank",rel:"noopener noreferrer"}},[t._v("bug"),a("OutboundLink")],1),t._v("，具体代码查看 /lib/markdown/slugify 的 slugify 函数）")]),t._v(" "),a("h3",{attrs:{id:"markdown-externallinks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-externallinks"}},[t._v("#")]),t._v(" markdown.externalLinks")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("{ target: '_blank', rel: 'noopener noreferrer' }")])])]),t._v(" "),a("p",[t._v("键和值对将被添加到指向外部链接的 "),a("code",[t._v("<a>")]),t._v(" 标签。默认选项将在新窗口中打开外部链接。")]),t._v(" "),a("h3",{attrs:{id:"markdown-anchor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-anchor"}},[t._v("#")]),t._v(" markdown.anchor")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("{ permalink: true, permalinkBefore: true, permalinkSymbol: '#' }")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/valeriangalliat/markdown-it-anchor",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-anchor"),a("OutboundLink")],1),t._v(" 的选项。(注意：如果你想自定义标题 id 的话尽量使用 "),a("code",[t._v("markdown.slugify")]),t._v("。)")]),t._v(" "),a("h3",{attrs:{id:"markdown-toc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-toc"}},[t._v("#")]),t._v(" markdown.toc")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("{ includeLevel: [2, 3] }")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Oktavilla/markdown-it-table-of-contents",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-table-of-contents"),a("OutboundLink")],1),t._v(" 的选项。(注意：如果你想自定义标题 id 的话尽量使用 "),a("code",[t._v("markdown.slugify")]),t._v("。)")]),t._v(" "),a("h3",{attrs:{id:"markdown-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-config"}},[t._v("#")]),t._v(" markdown.config")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Function")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("修改默认配置，或将额外的插件应用于渲染源文件的 "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),a("OutboundLink")],1),t._v(" 实例的函数。例如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("markdown")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("md")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      md"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("breaks")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      md"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it-xxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"建立管道-build-pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立管道-build-pipeline"}},[t._v("#")]),t._v(" 建立管道(build pipeline)")]),t._v(" "),a("h3",{attrs:{id:"postcss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postcss"}},[t._v("#")]),t._v(" postcss")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("{ plugins: [require('autoprefixer')] }")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/postcss/postcss-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("postcss-loader"),a("OutboundLink")],1),t._v(" 的选项。注意：指定这个值将会覆盖 autoprefixer，你需要把 autoprefixer 的选项也包含进去。")]),t._v(" "),a("h3",{attrs:{id:"stylus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stylus"}},[t._v("#")]),t._v(" stylus")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("{ preferPathResolver: 'webpack' }")])])]),t._v(" "),a("p",[t._v("提供给 "),a("a",{attrs:{href:"https://github.com/shama/stylus-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("stylus-loader"),a("OutboundLink")],1),t._v(" 的参数。")]),t._v(" "),a("h3",{attrs:{id:"scss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scss"}},[t._v("#")]),t._v(" scss")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("{}")])])]),t._v(" "),a("p",[t._v("提供给 "),a("a",{attrs:{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("sass-loader"),a("OutboundLink")],1),t._v(" 的参数，用来加载 "),a("code",[t._v("*.scss")]),t._v(" 文件。")]),t._v(" "),a("h3",{attrs:{id:"sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sass"}},[t._v("#")]),t._v(" sass")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("{ indentedSyntax: true }")])])]),t._v(" "),a("p",[t._v("提供给 "),a("a",{attrs:{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("sass-loader"),a("OutboundLink")],1),t._v(" 的参数，用来加载 "),a("code",[t._v("*.sass")]),t._v(" 文件。")]),t._v(" "),a("h3",{attrs:{id:"less"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less"}},[t._v("#")]),t._v(" less")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("{}")])])]),t._v(" "),a("p",[t._v("提供给 "),a("a",{attrs:{href:"https://github.com/webpack-contrib/less-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("less-loader"),a("OutboundLink")],1),t._v(" 的参数。")]),t._v(" "),a("h3",{attrs:{id:"configurewebpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurewebpack"}},[t._v("#")]),t._v(" configureWebpack")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object | Function")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("修改内部 webpack 配置。如果该值是一个对象，它将被合并到使用 "),a("a",{attrs:{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-merge"),a("OutboundLink")],1),t._v(" 的最终配置中；如果该值是一个函数，它将接收 config 作为第一个参数，并将 "),a("code",[t._v("isServer")]),t._v(" 这个标志作为第二个参数。你可以直接改变配置，或者返回一个要合并的对象：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configureWebpack")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mutate the config for client")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"chainwebpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chainwebpack"}},[t._v("#")]),t._v(" chainWebpack")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Function")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("使用 "),a("a",{attrs:{href:"https://github.com/mozilla-neutrino/webpack-chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-chain"),a("OutboundLink")],1),t._v(" 修改内部的 webpack 配置。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config is an instance of ChainableConfig")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"浏览器兼容性-browser-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器兼容性-browser-compatibility"}},[t._v("#")]),t._v(" 浏览器兼容性(browser compatibility)")]),t._v(" "),a("h3",{attrs:{id:"evergreen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evergreen"}},[t._v("#")]),t._v(" evergreen")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("如果你只针对常青树浏览器，请设置为 "),a("code",[t._v("true")]),t._v(" 。这将禁用 IE5 的 ES5 转码和 polyfill，导致更快的构建和更小的文件。")])],1)}),[],!1,null,null,null);e.default=r.exports}}]);