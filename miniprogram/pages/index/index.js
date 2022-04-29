// index.js
//const app = getApp()
const { envList } = require('../../envList.js');
const db=wx.cloud.database()
Page({
  data: {
    swiper_main_list: '',
    music_list:'',
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    nav_text:['助眠音乐','睡眠技巧','医师咨询']
  },
  getdetail(e) {
    console.log(e)
    let id = e.currentTarget.dataset.item._id
    wx.navigateTo({
      url: '/pages/musicdetail/musicdetail?id=' + id,
    })
  },
  navigatetofindings(e){
    wx.switchTab({
      url: '/pages/findings/findings',
    })
  },
  navigatetoconsulting(e){
    wx.switchTab({
      url: '/pages/consulting/consulting',
    })
  },

/**
     * 生命周期函数--监听页面加载
     */
    onLoad () {
      db.collection("swiper").get({
        success:res=>{
          console.log(res)
          this.setData({
            swiper_main_list:res.data
          })
        }
      })
      db.collection("music").get({
        success:res=>{
          console.log(res)
          this.setData({
            music_list:res.data
          })
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
});
