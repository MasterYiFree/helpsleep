// pages/myhome/myhome.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      haveGetOpenId: false,
      envId: '',
      openId: '',
      btns:[{text:'取消'},
      {text:'确定'}],
      dialogShow:false,
      btndisabled:true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        if (wx.getUserProfile) {
            this.setData({
              canIUseGetUserProfile: true
            })
          }
    },
      getopenid(){
        wx.showLoading({
          title: '加载中',
        })
        wx.cloud.callFunction({
          name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'getOpenId'
      }
        }).then((res)=>{
          this.setData({
            haveGetOpenId: true,
            openId: res.result.openid
          });
        })
        wx.hideLoading({
          success: (res) => {},
        })
        wx.getUserProfile({
          desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true,
              islink:true,
              btndisabled:false
            })
          }
        })
      },
      tapDialogButton(e) {
          const _btn = e.detail.item.text;
          if(_btn =='确定'){
            this.clearOpenId();
          }
          this.setData({
            dialogShow:false
          })
      },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    showdialog(){
      this.setData({
        dialogShow:true
      })
    },
    clearOpenId() {
        this.setData({
          haveGetOpenId: false,
          openId: '',
          hasUserInfo: false,
          islink:false,
          userInfo:'',
          btndisabled:true
        }); 
    },

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