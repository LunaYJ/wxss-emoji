#wxss-emoji

还在不断改进中，
借鉴了wxParse 的 思路

之所以要写这么一个东西是因为首先是公司业务需要，然后也是看了 wxParse之后才萌生的念头，不是说wxParse不好，wxParse确实不错功能庞大，但是对于仅仅需要emoji解析的来说就有点累赘了，还要修改源码，因此才自己写了一个不成熟的 组件；欢迎各位指出我的不足

主要文件都在 template目录下

emoj.js 为主要的 js文件必须引入
face.wxss为emoji表情的css文件，本实例采用css sprite 形式的图片 以class的形式定位图片；tpl.wxml 为模板文件

### 用法
以数组形式包裹消息列表，例如：

`var list = [
                            'ahaha[微笑]',
                            'balabala[流汗][流汗]',
                            '我[奮鬥]擦[色]',
                            '[\u5fae\u7b11][\u6487\u5634][\u8272][\u53d1\u5446][\u5f97\u610f][\u6d41\u6cea][\u5bb3\u7f9e][\u95ed\u5634][\u7761][\u5927\u54ed][\u5c34\u5c2c][\u53d1\u6012][\u8c03\u76ae][\u5472\u7259][\u60ca\u8bb6][\u96be\u8fc7][\u9177][\u51b7\u6c57][\u6293\u72c2][\u5410][\u5077\u7b11][\u6109\u5feb][\u767d\u773c][\u50b2\u6162][\u9965\u997f][\u56f0][\u60ca\u6050][\u6d41\u6c57][\u61a8\u7b11][\u60a0\u95f2][\u594b\u6597][\u5492\u9a82][\u7591\u95ee][\u5618][\u6655][\u75af\u4e86][\u8870][\u9ab7\u9ac5][\u6572\u6253][\u518d\u89c1][\u64e6\u6c57][\u62a0\u9f3b][\u9f13\u638c][\u7cd7\u5927\u4e86][\u574f\u7b11][\u5de6\u54fc\u54fc][\u53f3\u54fc\u54fc][\u54c8\u6b20][\u9119\u89c6][\u59d4\u5c48][\u5feb\u54ed\u4e86][\u9634\u9669][\u4eb2\u4eb2][\u5413][\u53ef\u601c][\u83dc\u5200][\u897f\u74dc][\u5564\u9152][\u7bee\u7403][\u4e52\u4e53][\u5496\u5561][\u996d][\u732a\u5934][\u73ab\u7470][\u51cb\u8c22][\u5634\u5507][\u7231\u5fc3][\u5fc3\u788e][\u86cb\u7cd5][\u95ea\u7535][\u70b8\u5f39][\u5200][\u8db3\u7403][\u74e2\u866b][\u4fbf\u4fbf][\u6708\u4eae][\u592a\u9633][\u793c\u7269][\u62e5\u62b1][\u5f3a][\u5f31][\u63e1\u624b][\u80dc\u5229][\u62b1\u62f3][\u52fe\u5f15][\u62f3\u5934][\u5dee\u52b2][\u7231\u4f60][NO][OK][\u7231\u60c5][\u98de\u543b][\u8df3\u8df3][\u53d1\u6296][\u6004\u706b][\u8f6c\u5708][\u78d5\u5934][\u56de\u5934][\u8df3\u7ef3][\u6295\u964d][\u6fc0\u52a8][\u4e71\u821e][\u732e\u543b][\u5de6\u592a\u6781][\u53f3\u592a\u6781]',
                            'lala[la]'
                        ];`

在要使用本功能的 page的 js文件顶部 require一下

`var emojiFn = require('../../template/emoj.js');`

然后调用

`this.setData({
             'emojiMsg': emojiFn.emojiAnalysis(list)
         })`


# P.S  由于这是 本人第一次开源一个小插件作品，所以有很多不成熟以及不完善的地方，而且readMe 也不太会写，所以有啥纰漏等等 欢迎各位指出，不足之处以后一定改正。这个组件我会持续的更新完善的