//index.js

Page({
  "usingComponents": {
    "mp-icon": "weui-miniprogram/icon/icon"
  },
  data: {
    data: [],
    msg: "",
    loading:false
  },
  onLoad: function () {

  },
  sendMessage() {
    let message=""
    let id=Date.now()
    let id2=id++

    const newData=[...this.data.data,{msg:this.data.msg,type:0,id}];
    const msg=this.data.msg;
    this.setData({
      msg:"",
      loading:true,
      data:newData
    });

    const task=wx.request({
      url: 'https://www.dodream.cn/chatgptproxy/api/chatgpt', //仅为示例，并非真实的接口地址
      data: {
        message:msg
      },
      method:"POST",
      dataType:"json",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res)=> {
        newData.push({msg:res.data.text,type:1,id:id2})
        this.setData({
          loading:false,
          data:[...newData]
        });
      },
      fail:(res)=>{
        newData.push({msg:"无法响应数据",type:1,id:id2})
        this.setData({
          loading:false,
          data:[...newData]
        });
      }
    })
  },
})