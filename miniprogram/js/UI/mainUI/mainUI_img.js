//主界面
import Sprite from '../../base/sprite'

const Map_IMG   = 'images/Textures/Loading/map.png'

export default class MainUIImg extends Sprite{
  constructor(){
    super(Map_IMG,BG_WIDTH, BG_HEIGHT)
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
