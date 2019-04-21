// pages/component/shoping/alertbox/alertbox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow:{
    type:Boolean,
    observer:function(newval,oldval){
      var that = this;
      console.log(newval)
      if (newval){
       var animate = wx.createAnimation({
          "duration":300,
          "timingFunction":"ease"
        })
       animate.translateY(-250).step();
       that.setData({
         animation: animate.export()
       })
      }else{
        var animate = wx.createAnimation({
          "duration": 300,
          "timingFunction": "ease"
        })
        animate.translateY(250).step();
        that.setData({
          animation: animate.export()
        })
      }
     }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    animation:null,
    inputValue: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeValue(event){
      // console.log(this.data.inputValue)
      // console.log(event.detail.vaule)
      this.setData({
        inputValue:event.detail.value
      })
    },
    getnumber:function(){
      return parseInt(this.data.inputValue)

    },
    closemask:function(){
      this.setData({
        isShow: !this.properties.isShow
      })
    },
    add:function(){
      this.setData({
          inputValue: ++this.data.inputValue
      })
    },
    sub:function(){
      var num = --this.data.inputValue
      if(num < 0){
        num = 0
      }
      this.setData({
        inputValue: num
      })
    }
  }
})
