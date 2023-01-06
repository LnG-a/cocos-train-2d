import { _decorator, Component, Node, UITransform } from "cc";
const { ccclass, property } = _decorator;

@ccclass("CheckAnswer")
export class CheckAnswer extends Component {
  @property({ type: Node })
  private correctAnswer = null;

  @property({ type: Node })
  private monster = null;

  checkAnswer(answer: Node) {
    if (this.checkCollide(answer, this.monster)) {
      if (answer === this.correctAnswer) {
        this.chooseCorrectAnswer();
      } else {
        this.chooseWrongAnswer();
      }
    }
  }

  private chooseCorrectAnswer() {
    console.log("chooseCorrectAnswer");
  }
  private chooseWrongAnswer() {
    console.log("chooseWrongAnswer");
  }

  private checkCollide(first: Node, second: Node) {
    const size = second.getComponent(UITransform);
    let secondWidth = size.width;
    let secondHeight = size.height;
    let firstX = first.getPosition().x;
    let firstY = first.getPosition().y;
    let secondX = second.getPosition().x;
    let secondY = second.getPosition().y;

    if (
      firstX <= secondX + secondWidth / 2 &&
      firstX >= secondX - secondWidth / 2 &&
      firstY <= secondY + secondHeight / 2 &&
      firstY >= secondY - secondHeight / 2
    ) {
      return true;
    } else {
      return false;
    }
  }
}
