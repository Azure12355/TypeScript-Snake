//定义表示计分牌的类
class ScorePanel {
    score: number  = 0;
    level: number = 1;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    constructor() {
        this.scoreEle = document.querySelector("#score")!;
        this.levelEle = document.querySelector("#level")!;
    }

    //设置一个加分的方法
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';

        // 难度升级
        if (this.score % 10 === 0) {
            this.levelUp()
        }
    }

    //等级提升
    levelUp() {
        if (this.level < 10) {
            this.levelEle.innerHTML = ++this.level + '';
        }
        
    }

}

export default ScorePanel;