//蛇类
class Snake {
  //表示蛇头的元素
  head: HTMLElement;
  //蛇的身体(包括蛇头)
  bodies: HTMLCollection;
  //获取蛇的容器
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake > div")!;
    this.bodies = document.getElementById("snake")!.getElementsByTagName("div");
  }

  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value: number) {
    if (this.X === value) {
      return;
    }

    if (value < 20 || value > 290) {
      throw new Error("蛇撞墙了!!!");
    }

    //判断蛇是否掉头
    if (
      this.bodies[1] &&
      (this.bodies[1] as HTMLElement).offsetLeft === value
    ) {
      console.log("水平方向发生了掉头!!!");
      //如果发生了掉头, 让蛇向反方向继续移动
      if (value > this.X) {
        //如果新值value大于旧值X, 则说明蛇在向右走, 此时发生掉头, 应该使蛇继续向左走
        value = this.X - 10;
      } else {
        //向左走
        value = this.X + 10;
      }
    }

    //移动身体
    this.moveBody();

    this.head.style.left = value + "px";

    //检查有没有撞到自己
    this.checkHeadBody();
  }

  set Y(value: number) {
    if (this.Y === value) {
      return;
    }

    if (value < 20 || value > 290) {
      throw new Error("蛇撞墙了!!!");
    }

    //判断蛇是否掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      console.log("水平方向发生了掉头!!!");
      //如果发生了掉头, 让蛇向反方向继续移动
      if (value > this.Y) {
        //如果新值value大于旧值X, 则说明蛇在向右走, 此时发生掉头, 应该使蛇继续向左走
        value = this.Y - 10;
      } else {
        //向左走
        value = this.Y + 10;
      }
    }

    //移动身体
    this.moveBody();

    this.head.style.top = value + "px";

    //检查有没有撞到自己
    this.checkHeadBody();
  }

  //蛇增加身体的方法
  addBody() {
    //向element中添加一个div
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }

  //蛇身体的移动
  moveBody() {
    //思路: 将后边身体的位置移动到前一节身体的位置
    //遍历所有的身体
    for (let i = this.bodies.length - 1; i > 0; i--) {
      //获取前面身体的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      //将值设置到当前身体上
      (this.bodies[i] as HTMLElement).style.left = X + "px";
      (this.bodies[i] as HTMLElement).style.top = Y + "px";
    }
  }

  /**
   * 检查头和身体是否相撞
   */
  checkHeadBody() {
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        //进入判断, 说明蛇头撞到了身体, 游戏就结束了
        throw new Error("撞到自己了");
      }
    }
  }
}
export default Snake;
