import Sprite from '../base/sprite'
import MainUICtx     from '../UI/mainUI/mainUI_Ctx'
const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight


/*
  每一张图片都必须有的东西：
    1.new时候传参的ctx、
    2.render渲染方法，供外部的控制器使用
    3.如果是按钮要绑定按钮事件在这个照片里面
*/
let btnStart = new Image();
btnStart.src = 'images/button_start.png'
/**
 * 游戏背景类只输出一张图
 * 提供update和render函数实现无限滚动的背景功能
 */
export default class BackGround extends Sprite 
{
  
  constructor(ctx) {
    super(Start_BG_IMG, BG_WIDTH, BG_HEIGHT)
    console.log(Start_BG_IMG,"src")
    this.top = 0
    this.render(ctx)
  }
  /**
   * 背景图重绘函数
   * 绘制两张图片，两张图片大小和屏幕一致
   * 第一张漏出高度为top部分，其余的隐藏在屏幕上面
   * 第二张补全除了top高度之外的部分，其余的隐藏在屏幕下面
   */
  render(ctx) {
    ctx.drawImage(
      this.img,
      0,
      0,
      this.width,
      this.height,
    )
    this.renderStartBtn(ctx)
   
  }

  renderStartBtn(ctx){
    ctx.drawImage(
      btnStart,
      0, 0,
      567,156,
      screenWidth / 2-150,
      screenHeight / 2 + 70,
      283.5 , 78
    )
     /**
     * 重新开始按钮区域
     * 方便简易判断按钮点击
     */
    this.btnStartArea = {
      startX: screenWidth / 2- 150,
      startY:  screenHeight / 2 + 70,
      endX  : screenWidth / 2  - 150+283.5,
      endY  : screenHeight / 2 + 100 + 78
    }
  }
    StartBtnCallback(aniId){
      //点击游戏开始后事件
      console.log("向海傻逼~~~！") 
      let mainUICtx = new MainUICtx()
      canvas.removeEventListener('touchstart', this.touchHandler)
    }
}
