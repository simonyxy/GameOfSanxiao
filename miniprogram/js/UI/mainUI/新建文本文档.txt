//主界面
import Sprite from '../../base/sprite'

const BG_IMG_SRC   = 'images/Textures/Loading/map.png'
// const BG_WIDTH     = canvas.width  
// const BG_HEIGHT    = canvas.height

export default class MainUIImg extends Sprite{
  constructor(){
    super(BG_IMG_SRC,BG_WIDTH, BG_HEIGHT)
  }
  /**
   * 背景图重绘函数
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
