// pages/sort/sort.js
import requestApi from '../../utils/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList:null,
    currentIndex:0,
    categoryDetail:null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var that = this;
   wx.request({
     url: 'https://www.heyuhsuo.xyz/heyushuo/category/indexaction',
     success:function(res){
       that.setData({
         categoryList: res.data.categoryList
       })
       requestApi.getDetail("category/currentaction?", res.data.categoryList[0].id, function (res) {
         that.setData({
           categoryDetail: res.data.data.currentOne
         })
         console.log(res.data.data.currentOne)
       })
       console.log(res)
     }
   })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getDetailInfo:function(event){
    var that = this;
    var cid = event.target.dataset.id;
    var index = event.target.dataset.index;
    // console.log(event.target.dataset)
    requestApi.getDetail("category/currentaction?",cid,function(res){
       that.setData({
         categoryDetail: res.data.data.currentOne
       })
      console.log(res.data.data.currentOne)
    })
    that.setData({
      currentIndex: index
    })
  } 
})