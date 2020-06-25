//生成主界面mainUI
//生成游戏界面，每个物体都有自己的状态，render里面根据状态去渲染动画

//游戏开始脚本
import BackGround from './background'
import DataBus    from '../databus'
import GameInfo   from './gameinfo'
import MainUI     from '../UI/mainUI'

let databus = new DataBus()
//创建画布
let ctx   = canvas.getContext('2d')
export default class GameStart {
  GameEnterUI(){
    // 维护当前requestAnimationFrame的id
    this.aniId    = 0
    databus.reset()
    this.hasEventBind = false 
    this.bg       = new BackGround(ctx)
    this.gameinfo = new GameInfo()
    this.bindLoop     = this.loop.bind(this)
    
    // // 清除上一局的动画
    window.cancelAnimationFrame(this.aniId);
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }
// 实现游戏帧循环
loop( ) {
  databus.frame++
  this.render(ctx)
  this.aniId = window.requestAnimationFrame(
    this.bindLoop,
    canvas
  )
}

render(ctx){
  this.bg.render(ctx)
  this.gameinfo.renderStartBtn(ctx)
  
  if ( !this.hasEventBind ) {
          this.hasEventBind = true
          this.touchHandler = this.touchEventHandler.bind(this)
          canvas.addEventListener('touchstart', this.touchHandler)
  }
}  
// 游戏开始的触摸事件处理逻辑
touchEventHandler(e) {
   e.preventDefault()
  let x = e.touches[0].clientX
  let y = e.touches[0].clientY

  let area = this.gameinfo.btnStartArea
  if (   x >= area.startX
      && x <= area.endX
      && y >= area.startY
      && y <= area.endY  )
    {
      //点击游戏开始后事件
      console.log("向海傻逼~~~！") 
      let mainUI = new MainUI(this.aniId)
      canvas.removeEventListener('touchstart', this.touchHandler)
    }
}
}