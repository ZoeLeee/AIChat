//index.js

Page({
  "usingComponents": {
    "mp-icon": "weui-miniprogram/icon/icon"
  },
  data: {
    data: [],
    msg: "你好",
  },
  onLoad: function () {

  },
  sendMessage() {
    let message=""
    let id=Date.now()
    let id2=id++
    this.setData({
      data:[...this.data.data,{msg:this.data.msg,type:0,id},{msg:"",type:1,id:id2}]
    });
  },
})