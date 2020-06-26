import GameStart  from './runtime/gameStart_Ctx'
GameGlobal.BG_WIDTH     = canvas.width  
GameGlobal.BG_HEIGHT    = canvas.height

/*
 * 游戏主函数(进入口)
 */

export default class Main {
  constructor() {
    this.gameStart = new GameStart()
    this.gameStart.GameEnterUI()
    // this.login()

  }

  // login() {
  //   // 获取 openid
  //   wx.cloud.callFunction({
  //     name: 'login',
  //     success: res => {
  //       window.openid = res.result.openid
  //       this.prefetchHighScore()
  //     },
  //     fail: err => {
  //       console.error(
  //         'get openid failed with error', err)
  //     }
  //   })
  // }
}
