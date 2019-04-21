// pages/topic/topic.js
import requestApi from '../../utils/api.js'
// console.log(requestApi.getTopicList)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topicPage: null,
    page:1
  },

  /**
   * 生命周期函数--监听页面加载
  */
  onLoad: function(options) {
    var that = this;
    requestApi.getTopicList("topic/listaction?", that.data.page, function (res) {
      that.setData({
        topicPage:res.data.data
      })
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
    var that = this;

    console.log("1111");
    wx.showLoading({
      title: '页面加载中。。。。'
    })

    requestApi.getTopicList("topic/listaction?", that.data.page, function (res) {
      that.setData({
        topicPage: res.data.data
      })
      wx.stopPullDownRefresh();
      wx.hideLoading();
    })

    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that = this;
    var page = ++that.data.page;
    
    requestApi.getTopicList("topic/listaction?", page, function (res) {
      if (res.data.data.length === 0) {
        wx.showLoading({
          title: '没有更多内容了。。',
        })
        setTimeout(function () {
          wx.hideLoading()
        }, 1500)
      }
      that.setData({
        page: page,
        topicPage: [...that.data.topicPage, ...res.data.data]
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})