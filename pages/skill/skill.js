// pages/skill/skill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    knowledge:[
      {
        category: 'HTML/CSS', id: 'html', content: [
          { name: 'HTML', image: '../../images/html.png', description: 'HTML，即超文本标记语言（Hyper Text Markup Language）' },
          { name: 'HTML5', image: '../../images/html5.png', description: 'HTML5 是下一代 HTML 标准' },
          { name: 'CSS', image: '../../images/css.png', description: '层叠样式表（Cascading StyleSheet）' },
          { name: 'CSS3', image: '../../images/css3.png', description: 'CSS3是CSS技术的升级版本' }
        ]
      },
      {
        category: 'JavaScript', id: 'js', content: [
            { name: 'JavaScript', image: '../../images/js.png', description: 'JavaScript 是 Web 的编程语言' },
            { name: 'jQuery', image: '../../images/jquery.png', description: 'jQuery 是一个 JavaScript 库' },
            { name: 'AngularJS', image: '../../images/angularjs.png', description: 'AngularJS 通过新的属性和表达式扩展了 HTML', introduce: 'AngularJS诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。AngularJS核心特性：MVC、模块化、自动化双向数据绑定、语义化标签、依赖注入等等。' },
            { name: 'Vue.js', image: '../../images/vue.png', description: 'Vue.js 是一套构建用户界面的渐进式框架。' }
        ]
      },
      {
        category: 'Java', id: 'java', content: [
            { name: 'Java', image: '../../images/java.png', description: '一种可以撰写跨平台应用软件的面向对象的程序设计语言' }
        ]
      },
      {
        category: 'PHP', id: 'php', content: [
            { name: 'PHP', image: '../../images/php.png', description: 'PHP 是一种通用开源脚本语言' }
        ]
      }
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