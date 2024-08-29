//蛇类
class Snake{
    //表示蛇头的元素
    head: HTMLElement;
    //蛇的身体(包括蛇头)
    bodies: HTMLCollection;
    //获取蛇的容器
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById("snake")!;
        this.head = document.querySelector("#snake > div")!;
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
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
            throw new Error("蛇撞墙了!!!")
        }

        this.head.style.left = value + 'px';
    }

    set Y(value: number) {
        this.head.style.top = value + 'px';
    }

    //蛇增加身体的方法
    addBody() {
        //向element中添加一个div
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    //蛇撞墙


}
export default Snake;