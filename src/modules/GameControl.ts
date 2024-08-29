// 游戏核心控制器
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl{
    //定义三个属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    //蛇的移动方向(按键的方向)
    direction: string = "";
    //游戏是否结束
    isLive: boolean = true;

    constructor() { 
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init()
    }

    //游戏初始化
    init() {
        //绑定键盘的按键按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))

        //绑定蛇的移动方法
        this.run();
    }

    //创建一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key;
    }

    //创建一个控制蛇移动的方法
    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch(this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }

        //检查蛇是否吃到了食物
        if (this.checkEat(X, Y)) {
            console.log('吃到食物了');
            //刷新食物的位置
            this.food.change();
            //增加分数
            this.scorePanel.addScore();
            //增加蛇的长度
            this.snake.addBody();
        }

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert(e)
            this.isLive = false
        }

        //蛇还活着,就能继续往下走
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level-1)*30)
    }

    // 定义一个方法, 用来检查蛇是否吃到了食物
    checkEat(X: number, Y: number) {
        return X === this.food.X && Y === this.food.Y;
    }


} 
export default GameControl;