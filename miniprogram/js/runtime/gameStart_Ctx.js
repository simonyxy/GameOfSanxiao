//生成主界面mainUI
//生成游戏界面，每个物体都有自己的状态，render里面根据状态去渲染动画
//aniID都在跳转界面的时候记得释放
//游戏开始脚本
import BackGround from './background'
import DataBus    from '../databus'
import GameInfo   from './gameinfo'

let databus = new DataBus()
//创建画布
let ctx   = canvas.getContext('2d')
export default class GameStart {
  GameEnterUI(){
    // 维护当前requestAnimationFrame的id
    this.aniId    = 0

    //清除上一个画布的动画
    window.cancelAnimationFrame(this.aniId);
    this.hasEventBind = false 

    //绑定这个画布的渲染循环
    this.bindLoop     = this.loop.bind(this)
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )

    this.bg       = new BackGround(ctx)
    this.gameinfo = new GameInfo()
  }
// 实现游戏帧循环
loop( ) {
  // console.log("loop of gameStart")
  this.render(ctx)
  this.aniId = window.requestAnimationFrame(
    this.bindLoop,
    canvas
  )

   //绑定点击事件
   if ( !this.hasEventBind ) {
    this.hasEventBind = true
    this.touchHandler = this.touchEventHandler.bind(this)
    canvas.addEventListener('touchstart', this.touchHandler)
  }
}

render(ctx){
  this.bg.render(ctx)
}  
  // 游戏开始的触摸事件处理逻辑
  touchEventHandler(e) {
    e.preventDefault()
    let x = e.touches[0].clientX
    let y = e.touches[0].clientY

    let area = this.bg.btnStartArea
    if (   x >= area.startX
        && x <= area.endX
        && y >= area.startY
        && y <= area.endY  )
      {
        // 清除这个画面的动画
        window.cancelAnimationFrame(this.aniId);
        canvas.removeEventListener('touchstart', this.touchHandler)
        this.bg.StartBtnCallback();
      }
    }
}