import GameStart  from './runtime/gameStart_Ctx'
GameGlobal.BG_WIDTH     = canvas.width  
GameGlobal.BG_HEIGHT    = canvas.height

//初始化服务端
wx.cloud.init({
  env :'luoke-01app',
  traceUser: true,
})

/*
 * 游戏主函数(进入口)
 */

export default class Main {
  constructor() {
    this.gameStart = new GameStart()
    this.gameStart.GameEnterUI()
    this.login()
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
