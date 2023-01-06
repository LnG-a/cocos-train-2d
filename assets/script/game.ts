import { _decorator, Component, Node, tween, v3 } from "cc";
import { AudioController } from "./AudioController";
const { ccclass, property } = _decorator;

@ccclass("game")
export class game extends Component {
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
  }

  update(deltaTime: number) {}
}
