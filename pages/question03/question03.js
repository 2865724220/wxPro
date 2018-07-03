// pages/question03/question03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    member: ['配偶', '爸爸', '妈妈', '儿子', '女儿', '小儿子', '小女儿'],
    isActive:{},
  },
  goQu02:function(){
    wx.redirectTo({
      url: '../question02/question02',
    })
  },
  goQu04:function(){
    wx.redirectTo({
      url: '../question04/question04',
    })
  },
  memberS:function(event){
    var mIndex = event.currentTarget.dataset['index'];
    this.setData({
        isActive:{
          ...this.data.isActive,
          [mIndex]: !this.data.isActive[mIndex]

        }
    })
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