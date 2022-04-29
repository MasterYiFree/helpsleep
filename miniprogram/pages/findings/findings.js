// pages/findings/findings.js
    const app = getApp()
    const db=wx.cloud.database()
Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        music_list:'',
        tech_list:''
    },
    changecontent(e){
        console.log(e);
            this.setData({
            item:!e.currentTarget.dataset.item
        })
        if(!e.currentTarget.dataset.item)
        {
            this.setData({
                color1:"darkmagenta",
                color2:"darkgray"
            })
        }
        else{
            this.setData({
                color1:"darkgray",
                color2:"darkmagenta"
            })
        }
    },
    getdetail(e) {
        console.log(e)
        let id = e.currentTarget.dataset.item._id
        wx.navigateTo({
          url: '/pages/musicdetail/musicdetail?id=' + id,
        })
      },
      getcontent(e) {
        console.log(e)
        let id = e.currentTarget.dataset.item._id
        wx.navigateTo({
          url: '/pages/techcontent/techcontent?id=' + id,
        })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            item:true,
            color1:"darkmagenta",
            color2:"darkgray"
        })
        db.collection("music").get({
            success:res=>{
              console.log(res)
              this.setData({
                music_list:res.data
              })
            }
          })
          db.collection("technique").get({
            success:res=>{
              console.log(res)
              this.setData({
                tech_list:res.data
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
})