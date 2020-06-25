import Sprite from '../base/sprite'

const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

const BG_IMG_SRC   = 'images/backgroud.png'
const BG_WIDTH     = canvas.width  
const BG_HEIGHT    = canvas.height

/**
 * 游戏背景类只输出一张图
 * 提供update和render函数实现无限滚动的背景功能
 */
export default class BackGround extends Sprite 
{
  constructor(ctx) {
    super(BG_IMG_SRC, BG_WIDTH, BG_HEIGHT)
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

    
  }
}
