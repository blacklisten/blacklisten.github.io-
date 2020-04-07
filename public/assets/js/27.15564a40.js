(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{420:function(e,s,t){"use strict";t.r(s);var n=t(5),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",[e._v("在git pull的时候，报如下错误：\nPlease move or remove them before you can merge")]),e._v(" "),t("p",[e._v("很奇怪... 本地master这个分支我一般只用于本地合并代码，按道理不会出现本地修改与远端冲突这样的问题（当时查看确实有修改的东西，而且是一大堆，还原了还是pull不了")]),e._v(" "),t("p",[e._v("这个错误的意思是指，因为本地有更改且与远端代码冲突，又没有merge")]),e._v(" "),t("p",[e._v("如果确定使用远端代码的话，最方便的解决办法就是删除本地的修改。"),t("code",[e._v("用命令，图形化界面有时候删除不干净")])]),e._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[e._v("git clean\n  -n 显示 将要删除的文件和目录\n  -f 删除文件\n  -df 删除文件和目录\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("最后我用了"),t("code",[e._v("git clean -df")]),e._v("删除了本地所有修改过的文件和目录...")])])])}),[],!1,null,null,null);s.default=a.exports}}]);