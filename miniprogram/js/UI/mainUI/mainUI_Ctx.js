//主界面
import MainUIImg from './mainUI_img'
import LoadingImg from './Loading_img'

/**
 * 游戏背景类只输出一张图
 */

 //展示类型
let SHOW_TYPE ={
    MAP : 1,
    LOADING : 2,
}
let ctx   = canvas.getContext('2d')
export default class MainUICtx 
{
  //构造函数
  constructor() {
    this.hasEventBind = false 
    this.showType = SHOW_TYPE.MAP
    //做假的数据事件进入游戏
    this.IntoGameTimer = 0
    this.bindLoop     = this.loop.bind(this)
    this.mainUIImg    = new MainUIImg()
    this.loadingImg   = new LoadingImg()
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }
  
  loop(){
    this.render()
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
  // 游戏开始的触摸事件处理逻辑
  touchEventHandler(e) {
    e.preventDefault()
  let x = e.touches[0].clientX
  let y = e.touches[0].clientY

  
  if (   x >= 0
      && x <= canvas.width
      && y >= 0
      && y <= canvas.height  )
    {
      //点击游戏开始后事件
      console.log("进入游戏~~~！") 
      this.showType = SHOW_TYPE.LOADING
      canvas.removeEventListener('touchstart', this.touchHandler)
    }
  }
  render(){
    if(this.showType == SHOW_TYPE.MAP)
    {
      this.mainUIImg.render(ctx)
    }
    else if(this.showType  == SHOW_TYPE.LOADING){
      this.loadingImg.render1(ctx)
      // 清除这个画面的动画
      
      window.cancelAnimationFrame(this.aniId);
    }
  }
}