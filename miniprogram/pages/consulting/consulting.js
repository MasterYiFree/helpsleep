// pages/consulting/consulting.js
    const db=wx.cloud.database()
Page({
    /**
     * 页面的初始数据
     */
    data: {
      swiper_main_list:'',
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 2000,
      duration: 500,
      doctor_list:'',
    },
    getdetail(e) {
      console.log(e)
      let id = e.currentTarget.dataset.item._id
      wx.navigateTo({
        url: '/pages/doctordetail/doctordetail?id=' + id,
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      db.collection("consultingdetail").get({
        success:res=>{
          console.log(res)
          this.setData({
            doctor_list:res.data
          })
          console.log(swiper_main_list)
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

    }
})