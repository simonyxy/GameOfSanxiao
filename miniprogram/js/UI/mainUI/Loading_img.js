
//主界面
import Sprite from '../../base/sprite'
const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

let loadingBG1   = 'images/Textures/Loading/loading.png'
let loadingBG2   = 'images/Textures/Loading/loading_2.png'

export default class LoadingImg extends Sprite {
  constructor(){
    super()
    this.img1 = new Image()
    this.img1.src = loadingBG1
    this.img2 = new Image()
    this.img2.src = loadingBG2
    this.x = BG_WIDTH
    this.y = BG_HEIGHT
  }
   /**
   * 背景图重绘函数
   */
  render1(ctx) {
    ctx.drawImage(
      this.img1,
      0,
      0,
      this.x,
      this.y,
    )
  }
  render2(ctx) {
    ctx.drawImage(
      loadingBG2,
      0,
      0,
      this.width,
      this.height,
    )
  }
}