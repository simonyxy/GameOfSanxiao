import GameStart  from './runtime/gameStart_Ctx'
GameGlobal.BG_WIDTH     = canvas.width  
GameGlobal.BG_HEIGHT    = canvas.height

//初始化服务端
wx.cloud.init({
  env :'luoke-01app',
  traceUser: true,
})
GameGlobal.Start_BG_IMG = ''

/*
 * 游戏主函数(进入口)
 */

export default class Main {
  constructor() {
    this.gameStart = new GameStart()
    this.login()

    wx.cloud.downloadFile({
      fileID: 'cloud://luoke-01app.6c75-luoke-01app-1302512012/backgroud.png', // 文件 ID
      success: res => {
        // 返回临时文件路径
        console.log(res.tempFilePath,"图片加载完成")
        Start_BG_IMG  = res.tempFilePath
        this.gameStart.GameEnterUI()
      },
      fail: console.error
    })
  }

  login() {
    // 获取 openid
    wx.cloud.callFunction({
      name: 'login', 
      success: res => {
        // window.openid = res.result.wx.onBLEPeripheralConnectionStateChanged((result) => {})
        console.log('用户信息', res.result)
        //保存用户openid
        GameGlobal.openid = res.result.userInfo.openId
        GameGlobal.appId  = res.result.userInfo.appId
      },
      fail: err => {
        console.error(
          'get openid failed with error', err)
      }
    })
  }
}
