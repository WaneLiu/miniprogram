// pages/number/number.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: 'init data',
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    num: 1,
    view: 'MINA',
    staffA: { firstName: 'Liu', lastName: 'Feng' },
    staffB: { firstName: 'Chen', lastName: 'Xi' },
    staffC: { firstName: 'Guo', lastName: 'Qing' },
    objA: {foo: 1, bar: 2},
    objB: {foo: 3, bar: 4},
    objC: {foo: 5, bar: 6},
    objectArray: [
      { id: 5, unique: 'unique05' },
      { id: 4, unique: 'unique04' },
      { id: 3, unique: 'unique03' },
      { id: 2, unique: 'unique02' },
      { id: 1, unique: 'unique01' },
    ],
    numberArray: [1,2,3,4] 
  },

  switch: function(e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },

  reset: function(e) {
    let objectInitArray = [
      { id: 5, unique: 'unique05' },
      { id: 4, unique: 'unique04' },
      { id: 3, unique: 'unique03' },
      { id: 2, unique: 'unique02' },
      { id: 1, unique: 'unique01' },
    ]
    this.setData({
      objectArray: objectInitArray
    })
  },

  addToFront: function(e) {
    const length = this.data.objectArray.length + 1
    //this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.data.objectArray.unshift({id: length, unique: 'unique_' + length})
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function(e) {
    //this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.data.numberArray.unshift(this.data.numberArray.length + 1)
    this.setData({
      numberArray: this.data.numberArray
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
  addNumber: function() {
    this.setData({num: this.data.num + 1})
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