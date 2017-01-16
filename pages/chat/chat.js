var emojiFn = require('../../template/emoj.js');
Page({
    data: {
        iptMsg: '',
        iptFocus: false,
        noFocus: true,
        txtMsg: ''
    },
    onLoad: function () {
        var _this = this;
        var list = [
            'ahaha[微笑]',
            'balabala[流汗][流汗]',
            '我[奮鬥]擦[色]',
            '[\u5fae\u7b11][\u6487\u5634][\u8272][\u53d1\u5446][\u5f97\u610f][\u6d41\u6cea][\u5bb3\u7f9e][\u95ed\u5634][\u7761][\u5927\u54ed][\u5c34\u5c2c][\u53d1\u6012][\u8c03\u76ae][\u5472\u7259][\u60ca\u8bb6][\u96be\u8fc7][\u9177][\u51b7\u6c57][\u6293\u72c2][\u5410][\u5077\u7b11][\u6109\u5feb][\u767d\u773c][\u50b2\u6162][\u9965\u997f][\u56f0][\u60ca\u6050][\u6d41\u6c57][\u61a8\u7b11][\u60a0\u95f2][\u594b\u6597][\u5492\u9a82][\u7591\u95ee][\u5618][\u6655][\u75af\u4e86][\u8870][\u9ab7\u9ac5][\u6572\u6253][\u518d\u89c1][\u64e6\u6c57][\u62a0\u9f3b][\u9f13\u638c][\u7cd7\u5927\u4e86][\u574f\u7b11][\u5de6\u54fc\u54fc][\u53f3\u54fc\u54fc][\u54c8\u6b20][\u9119\u89c6][\u59d4\u5c48][\u5feb\u54ed\u4e86][\u9634\u9669][\u4eb2\u4eb2][\u5413][\u53ef\u601c][\u83dc\u5200][\u897f\u74dc][\u5564\u9152][\u7bee\u7403][\u4e52\u4e53][\u5496\u5561][\u996d][\u732a\u5934][\u73ab\u7470][\u51cb\u8c22][\u5634\u5507][\u7231\u5fc3][\u5fc3\u788e][\u86cb\u7cd5][\u95ea\u7535][\u70b8\u5f39][\u5200][\u8db3\u7403][\u74e2\u866b][\u4fbf\u4fbf][\u6708\u4eae][\u592a\u9633][\u793c\u7269][\u62e5\u62b1][\u5f3a][\u5f31][\u63e1\u624b][\u80dc\u5229][\u62b1\u62f3][\u52fe\u5f15][\u62f3\u5934][\u5dee\u52b2][\u7231\u4f60][NO][OK][\u7231\u60c5][\u98de\u543b][\u8df3\u8df3][\u53d1\u6296][\u6004\u706b][\u8f6c\u5708][\u78d5\u5934][\u56de\u5934][\u8df3\u7ef3][\u6295\u964d][\u6fc0\u52a8][\u4e71\u821e][\u732e\u543b][\u5de6\u592a\u6781][\u53f3\u592a\u6781]',
            'lala[la]'
        ];
        this.setData({
            'emojiMsg': emojiFn.emojiAnalysis(list)
        })

    },
    sendMsg: function (e) {
        this.setData({
            iptMsg: ''
        })
    },
    focusIpt: function () {
        this.setData({
            noFocus: false,
            iptFocus: true
            
        })

    },
    syncIpt: function (e) {
        var v = e.detail.value;
        var reply = [v];
        var tpl = emojiFn.emojiAnalysis(reply,'input');
        this.setData({
            'iptMsgTrans': tpl
        })
    },
    focusOut: function () {
        console.log()
        this.setData({
            noFocus: true
        })
    }
})
