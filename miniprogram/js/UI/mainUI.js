//主界面
import Sprite from '../base/sprite'

const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

const BG_IMG_SRC   = 'images/Textures/CrushBg/map.png'
const BG_WIDTH     = canvas.width  
const BG_HEIGHT    = canvas.height

/**
 * 游戏背景类只输出一张图
 */

let ctx   = canvas.getContext('2d')
export default class BackGround extends Sprite 
{
  constructor(aniId) {
    super(BG_IMG_SRC, BG_WIDTH, BG_HEIGHT)
    this.render()
    this.bindLoop     = this.loop.bind(this)
    // 清除上一画面的动画
    window.cancelAnimationFrame(aniId);
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }
  /**
   * 背景图重绘函数
   */
  render() {
    ctx.drawImage(
      this.img,
      0,
      0,
      this.width,
      this.height,
    )
  }
  loop(){
    this.render()
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }
}