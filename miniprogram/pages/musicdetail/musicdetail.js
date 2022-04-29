// pages/musicdetail/musicdetail.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        detail:'',
        playStatus:false,
        progress: 0,
        duration: 0,
        isplay:'playmusic'
    },
    playmusic:function(){
        let audio = this.data.detail /*记住这里，很关键*/
        const manager = wx.getBackgroundAudioManager();
        manager.title = audio.title;
        manager.src = audio.music1;
        manager.currentTime=0;
        let that = this;
        manager.onPlay(function() {
          console.log("======onPlay======");
          that.setData({
            playStatus: true,
            isplay:'playOrpause'
          })
          that.countTimeDown(that, manager);
        });
        manager.onPause(function() {
            that.setData({
              playStatus: false
            })
            console.log("======onPause======");
          });
        manager.onEnded(function() {
          console.log("======onEnded======");
          that.setData({
            playStatus: false,
            isplay:'playmusic'
          })
        });
    },
    countTimeDown: function(that, manager, cancel) {
        if (that.data.playStatus) {
          setTimeout(function() {
            if (that.data.playStatus) {
              // console.log("duration: " + manager.duration);
              // console.log(manager.currentTime);
              that.setData({
                progress: Math.ceil(manager.currentTime),
                progressText: that.formatTime(Math.ceil(manager.currentTime)),
                duration: Math.ceil(manager.duration),
                durationText: that.formatTime(Math.ceil(manager.duration))
              })
              that.countTimeDown(that, manager);
            }
          }, 1000)
        }
      },
      sliderChange: function(e) {
        let manager = wx.getBackgroundAudioManager();
        manager.pause();
        manager.seek(e.detail.value);
        this.setData({
          progressText: this.formatTime(e.detail.value)
        })
        setTimeout(function() {
          manager.play();
        }, 1000);
      },
      playOrpause: function() {
        let manager = wx.getBackgroundAudioManager();
        if (this.data.playStatus) {
          this.setData({
            playStatus:true
          })
          manager.pause();
        } else {
          manager.play();
        }
      },
      formatTime: function(s) {
        let t = '';
        s = Math.floor(s);
        if (s > -1) {
          let min = Math.floor(s / 60) % 60;
          let sec = s % 60;
          if (min < 10) {
            t += "0";
          }
          t += min + ":";
          if (sec < 10) {
            t += "0";
          }
          t += sec;
        }
        return t;
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log("数据：",options)
        let id = options.id
        wx.cloud.database().collection('music').doc(id).get({
            success:res=>{
                this.setData({
                    detail:res.data
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