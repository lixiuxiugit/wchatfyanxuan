// pages/component/index/productdetail/productdetail.js
import requestApi from '../../../../utils/api.js'
var WxParse = require('../../../../wxParse/wxParse.js')
console.log(requestApi)
Page({
  /**
   * 页面的初始数据
   */
  data: {
    alldata:null,
    currentId: null,
    brandList: [],
    info:null,
    isShowalertbox:false,
    allnum:0,
    mydesc:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    console.log(options.id)
    that.setData({
      currentId: options.id
    })
    requestApi.getProductDetail('goods/detailaction?', that.data.currentId, 'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c', function(res) {
      console.log(res.data)
      that.setData({
        alldata: res.data,
        brandList: res.data.gallery,
        info: res.data.info,
        allnum:res.data.allnumber
      })
      WxParse.wxParse('mydesc', 'html', res.data.info.goods_desc, that, 4);
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  showalertbox:function(){
     this.setData({
       isShowalertbox: !this.data.isShowalertbox
     })
  },
  joincart:function(){
    var that = this;
    if(!that.data.isShowalertbox){
      that.setData({
        isShowalertbox:!that.data.isShowalertbox
      })
      return;
    }
    //1.获取组件
    var sm = that.selectComponent('#sm');
    console.log(sm.getnumber())
    
    wx.request({
      url: 'https://www.heyuhsuo.xyz/heyushuo/cart/addCart',
      method:'post',
      data:{
        goodsId:that.data.currentId,
        openId:'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c',
        number: sm.getnumber()
      },
      success:function(res){
       if(res.data.data == 'success'){
         that.setData({
           isShowalertbox:!that.data.isShowalertbox,
           allnum: that.data.allnum + sm.getnumber()
         })
         wx.showToast({
           title: '已加入购物车',
         })
       }
      }

    })
  }
})