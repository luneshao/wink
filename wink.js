/**
 * 眨眼
 * params (el, itemImgName, time) // el: 容器节点，itemImgName：图片名称数组，time：眨眼间隔时间
 **/
(function (global, factory) {
  global.$Wink = factory()
}) (this, function () {
  function Wink(el, itemImgName, time) {
    this.itemImgName = itemImgName
    this.el = el
    this.time = time || 1500
    this.prev = 0
    this.current = 0
  }
  
  // dom渲染模版
  Wink.prototype.template = function(imgName) {
    return `
    <div class="box">
      <img class="img" id="${imgName}" src="./img/${imgName}.png" alt="图片${imgName}">
      <img class="img" style="opacity: 0" id="${imgName}Close" src="./img/${imgName}-closed.png" alt="图片${imgName}">
    </div>
    `
  }
  
  // 渲染三个盒子
  Wink.prototype.renderBox = function() {
    for (let i = 0; i < this.itemImgName.length; i++) {
      this.el.innerHTML += this.template(this.itemImgName[i])
    }
  }
  
  // 是否眨眼
  Wink.prototype.ifClose = function(ifClose) {
    const currentImgs = this.el
      .querySelectorAll('.box')
      [this.current].querySelectorAll('.img')
    currentImgs[0].setAttribute('style', `opacity: ${+!ifClose}`)
    currentImgs[1].setAttribute('style', `opacity: ${+ifClose}`)
  }
  
  // 眨眼
  Wink.prototype.wink = function() {
    var st1 = setTimeout(() => {
      this.ifClose(true)
      clearTimeout(st1)
    }, 100)
    var st2 = setTimeout(() => {
      this.ifClose(false)
      clearTimeout(st2)
    }, 200)
  }
  
  // 随机获取第几个眨眼
  Wink.prototype.getRandomNum = function() {
    return Math.floor(this.itemImgName.length * Math.random())
  }
  
  Wink.prototype.init = function() {
    this.renderBox()
  
    setInterval(() => {
      this.current = this.prev
      do {
        this.current = this.getRandomNum()
      } while (this.current === this.prev)
      this.wink(this.current)
      this.prev = this.current
    }, this.time)
  }

  return Wink
})
