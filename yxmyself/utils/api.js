var app = getApp();
var baseUrl = app.globalData.baseUrl;
var requestApi = {
  getTopicList:function(url,page,fn){
    wx.request({
      url: baseUrl +url,
      data:{
        page:page
      },
      success:function(res){
         fn(res)
      }
    })
  },
  getDetail: function (url,cid,fn) {
    var that = this;
    wx.request({
      url: baseUrl + url,
      data: {
        id: cid
      },
      success: function (res) {
        fn(res)
      }
    })
  },
  getShopingList: function (url, openId, fn) {
    var that = this;
    wx.request({
      url: baseUrl + url,
      data: {
        openId: openId
      },
      success: function (res) {
        fn(res)
      }
    })
  },
  getProductDetail: function (url, id, openId, fn) {
    var that = this;
    wx.request({
      url: baseUrl + url,
      data: {
        id:id,
        openId: openId
      },
      success: function (res) {
        fn(res)
      }
    })
  }
}
export default requestApi