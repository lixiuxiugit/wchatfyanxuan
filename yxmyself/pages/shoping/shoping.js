// pages/shoping/shoping.js
import requestApi from '../../utils/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoppingList:[],
    allMoney:0,
    allSelect:false,
    allItem:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    requestApi.getShopingList("cart/cartList?",'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c',function(res){
      var tempres = res.data.data;
      tempres.forEach((item)=>{
        item.isSelect = false;
      })
      that.setData({
        shoppingList: tempres
      })
      console.log(res.data.data)
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
  calcMoney:function(data){
    var brr = [];
     var total = data.reduce((total,item)=>{
        if(item.isSelect == true){
          brr.push(item);
          return total += item.retail_price * item.number
        }else{
          return total;
        }
     },0)
    this.setData({
      allMoney: total,
      allItem:brr.length
    })
    console.log(total)
  },
  selected: function (event){
    var that = this;
    var index = event.target.dataset.index;
    var data = that.data.shoppingList;
    data[index].isSelect = ! data[index].isSelect;
    
    var myres = data.every((item)=>{
      return item.isSelect == true;
    })
      that.setData({
        shoppingList: data,
        allSelect:myres
      }) 
    that.calcMoney(data)
  },
  selectAll:function(){
    var that = this;
  //  1.首先状态发生变化
  that.setData({
    allSelect: !that.data.allSelect
  })
  // 2.遍历
    var data = that.data.shoppingList;
    data.forEach((item)=>{
      item.isSelect = that.data.allSelect;
    })
    that.setData({
      shoppingList:data
    })
    // 3.计算
    that.calcMoney(data)
  }
})