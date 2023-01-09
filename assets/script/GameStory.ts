import { _decorator, Component, Node, AudioSource, tween, UIOpacity } from "cc";
import { AudioManager } from "./AudioManager";
const { ccclass, property } = _decorator;

@ccclass("GameStory")
export class GameStory extends Component {
  @property({ type: AudioManager })
  private audioManager = null;
  after: Array<Node> = new Array();

  start() {
    this.after.push(this.node.getChildByName("Leaves"));
    this.after.push(this.node.getChildByName("Monster_1"));
    this.after.push(this.node.getChildByName("Board_2"));
    this.after.push(this.node.getChildByName("Loudspeaker"));
    this.after.push(this.node.getChildByName("Question"));
    this.after.push(this.node.getChildByName("Apple"));
    this.after.push(this.node.getChildByName("Banana"));
    this.after.push(this.node.getChildByName("Strawberry"));

    this.node.on(
      "ended",
      (event) => {
        this.appearAnimation();
      },
      this
    );
  }

  appearAnimation() {
    this.after.forEach((ele) => {
      tween(ele.getComponent(UIOpacity)).to(0.7, { opacity: 255 }).start();
    });
    this.scheduleOnce(function () {
      // Here this refers to component
      this.audioManager.playSoundQuestion();
    }, 1);
  }
}
