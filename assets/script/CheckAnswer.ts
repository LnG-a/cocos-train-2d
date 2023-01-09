import { _decorator, Component, Node, UITransform, tween, UIOpacity } from "cc";
import { AudioController } from "./AudioController";
import { AudioManager } from "./AudioManager";
const { ccclass, property } = _decorator;

@ccclass("CheckAnswer")
export class CheckAnswer extends Component {
  @property({ type: Node })
  private correctAnswer = null;

  @property({ type: Node })
  private monster = null;

  @property({ type: AudioManager })
  private audioManager = null;

  path = "Sound/MultipleChoices/sounds/";
  soundGoodJob = this.path + "good-job";
  soundCoin = this.path + "sound-coin";
  soundCorrect = this.path + "sound-correct";
  soundEatStrawberry = this.path + "sound-eat-strawberry";
  soundWrong = this.path + "sound-wrong";
  soundQuestion = "Sound/MultipleChoices/sentences/i-want-a-strawberry";

  checkAnswer(answer: Node) {
    if (this.checkCollide(answer, this.monster)) {
      if (answer === this.correctAnswer) {
        return this.chooseCorrectAnswer();
      } else {
        return this.chooseWrongAnswer();
      }
    }
  }

  private chooseCorrectAnswer() {
    // AudioController.playOneShotWithPath(this.soundEatStrawberry);
    this.audioManager.playSoundCorrect();
    this.audioManager.playSoundGoodJob();
    this.audioManager.playSoundCoin();
    this.eatStrawberry();
    return true;
  }

  private chooseWrongAnswer() {
    this.audioManager.playSoundWrong();
    this.audioManager.playSoundQuestion();
    return false;
  }

  eatStrawberry() {
    tween(this.correctAnswer.getComponent(UIOpacity))
      .to(0.5, { opacity: 0 })
      .start();
    // this.correctAnswer.active = false;
    console.log("eating.....");
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
