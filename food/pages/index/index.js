//index.js
//获取应用实例
const app = getApp()

Page({
  articalShow:function(e){
      var show=e.target.dataset.show;
      wx.navigateTo({
        url:"/pages/article/article?show="+show,
      })
  },
  jumpType:function(e){
    var type=e.target.dataset.type;
    wx.navigateTo({
      url:'/pages/type/type?type='+type,
    })
  },
  swipeData:function(){
    var url='http://127.0.0.1:3000/swipeData';
    wx.request({
      url:url,
      success:(res)=>{
        this.setData({
          list: res.data
        })
      }
    })
  },
  navData:function(){
    var url ='http://127.0.0.1:3000/navData';
    wx.request({
      url:url,
      success:(res)=>{
        this.setData({
          navlist:res.data
        })
      }
    })
  },
  indexList:function(){
    var url ='http://127.0.0.1:3000/indexList';
    wx.request({
      url:url,
      success:(res)=>{
        this.setData({
          showlist:res.data
        })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
      list:[],
      navlist:[],
      showlist:[]
      // showlist:[
      //   { id: 1, img_url: 'http://127.0.0.1:3000/img/show1.jpg',show:101},
      //   { id: 2, img_url: 'http://127.0.0.1:3000/img/show2.jpg', show: 102},
      //   { id: 3, img_url: 'http://127.0.0.1:3000/img/show3.jpeg', show: 103},
      //   { id: 4, img_url: 'http://127.0.0.1:3000/img/show4.jpg', show: 104}
      // ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.swipeData();
    this.navData();
    this.indexList();
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
    
  }
})