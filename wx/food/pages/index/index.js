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
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id: 1, img_url: 'http://127.0.0.1:3000/img/iterator0.jpg'},
      { id: 2, img_url: 'http://127.0.0.1:3000/img/iterator1.jpg'},
      { id: 3, img_url: 'http://127.0.0.1:3000/img/iterator2.jpg'},
      { id: 4, img_url: 'http://127.0.0.1:3000/img/iterator3.jpg'},
      { id: 5, img_url: 'http://127.0.0.1:3000/img/iterator4.jpg' },
      { id: 6, img_url: 'http://127.0.0.1:3000/img/iterator5.jpg' },
      ],
      navlist:[
        { id: 1, img_url: 'http://127.0.0.1:3000/img/type1.png', type: '10' },
        { id: 2, img_url: 'http://127.0.0.1:3000/img/type2.png', type: '20' },
        { id: 3, img_url: 'http://127.0.0.1:3000/img/type3.png', type: '30' },
        { id: 4, img_url: 'http://127.0.0.1:3000/img/type4.png', type: '40' },
        { id: 5, img_url: 'http://127.0.0.1:3000/img/type5.png', type: '50' },
        { id: 6, img_url: 'http://127.0.0.1:3000/img/type6.png', type: '60' },
        { id: 7, img_url: 'http://127.0.0.1:3000/img/type7.png', type: '70' },
        { id: 8, img_url: 'http://127.0.0.1:3000/img/type8.png', type: '80' },
        { id: 9, img_url: 'http://127.0.0.1:3000/img/type9.png', type: '90' },
      ],
      showlist:[
        { id: 1, img_url: 'http://127.0.0.1:3000/img/show1.jpg',show:101},
        { id: 2, img_url: 'http://127.0.0.1:3000/img/show2.jpg', show: 102},
        { id: 3, img_url: 'http://127.0.0.1:3000/img/show3.jpeg', show: 103},
        { id: 4, img_url: 'http://127.0.0.1:3000/img/show4.jpg', show: 104}
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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