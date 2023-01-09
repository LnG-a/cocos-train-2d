import { _decorator, Component, Node } from "cc";
import { AudioController } from "./AudioController";
const { ccclass, property } = _decorator;

@ccclass("AudioManager")
export class AudioManager extends Component {
  private path = "Sound/MultipleChoices/sounds/";
  private soundCoin = this.path + "sound-coin";
  private soundGoodJob = this.path + "good-job";
  private soundEatStrawberry = this.path + "sound-eat-strawberry";
  private soundWrong = this.path + "sound-wrong";
  private soundQuestion = "Sound/MultipleChoices/sentences/i-want-a-strawberry";
  private soundCorrect = this.path + "sound-correct";

  playSoundCoin() {
    AudioController.playOneShotWithPath(this.soundCoin);
  }

  playSoundGoodJob() {
    AudioController.playOneShotWithPath(this.soundGoodJob);
  }
  playSoundEatStrawberry() {
    AudioController.playOneShotWithPath(this.soundEatStrawberry);
  }

  playSoundWrong() {
    AudioController.playOneShotWithPath(this.soundWrong);
  }

  playSoundQuestion() {
    AudioController.playOneShotWithPath(this.soundQuestion);
  }

  playSoundCorrect() {
    AudioController.playOneShotWithPath(this.soundCorrect);
  }
}
