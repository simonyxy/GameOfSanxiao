import GameStart  from './runtime/gameStart'

//声明 canvas control 用来控制生成所有的图片 
// let ctx   = canvas.getContext('2d')

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
