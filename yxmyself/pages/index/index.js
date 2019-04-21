//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    address: "河南省郑州市二七区",
    bannerList: null,
    jiajuList: null,
    brandList: null,
    newgoodList: null,
    hotgoodList: null,
    topicList:null,
    newCategoryList:null
    
  },

  onLoad: function() {
    var that = this;
    // wx.getLocation({
    //   success:function(res){
    //     console.log(res)

    //   }
    // })
    wx.request({
      url: 'https://www.heyuhsuo.xyz/heyushuo/index/index',
      success: function(res) {
        console.log(res.data.newGoods)
        that.setData({
          bannerList: res.data.banner,
          jiajuList: res.data.channel,
          brandList: res.data.brandList,
          newgoodList: res.data.newGoods,
          hotgoodList: res.data.hotGoods,
          topicList: res.data.topicList,
          newCategoryList: res.data.newCategoryList
        })
      }
    })
  },
  gotoDetail:function(event){
    var id = event.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: `/pages/component/index/productdetail/productdetail?id=${id}`,
    })
  }
})