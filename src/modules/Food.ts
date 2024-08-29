
class Food {
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;

    constructor() {
        //获取页面中的food元素并将其赋值给element
        this.element = document.querySelector("#food")!;
    }

    // 定义一个获取食物X轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }

    // 定义一个获取食物Y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }

    //修改食物的位置
    change() {

        let top: number = Math.round(Math.random() * 27 + 2) * 10;
        let left: number = Math.round(Math.random() * 27 + 2) * 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

export default Food;