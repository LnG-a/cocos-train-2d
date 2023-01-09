import {
  _decorator,
  Component,
  Node,
  tween,
  v3,
  AudioSource,
  UIOpacity,
} from "cc";
import { AudioController } from "./AudioController";
const { ccclass, property } = _decorator;

@ccclass("Game")
export class Game extends Component {
  @property({ type: Node })
  private homeScreen = null;

  @property({ type: Node })
  private gateScreen = null;

  @property({ type: Node })
  private multipleChoicesScreen = null;

  start() {
    this.gateScreen.active = false;
    this.multipleChoicesScreen.active = false;
  }

  navigateToGate() {
    this.gateScreen.active = true;
  }

  navigateToPlayScreen() {
    this.multipleChoicesScreen.active = true;

    tween(this.multipleChoicesScreen.getComponent(UIOpacity))
      .to(2, {
        opacity: 255,
      })
      .start();

    tween(this.gateScreen.getComponent(UIOpacity))
      .to(2, {
        opacity: 0,
      })
      .start();

    tween(this.gateScreen)
      .to(2, { scale: v3(2, 2, 1) })
      .start();

    this.scheduleOnce(function () {
      this.gateScreen.active = false;
    }, 2);
  }
}
