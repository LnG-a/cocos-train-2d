import { _decorator, Component, Node, tween, v3 } from "cc";
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
    this.homeScreen.active = true;
    this.gateScreen.active = true;
    this.multipleChoicesScreen.active = true;
  }

  navigateToGate() {
    this.homeScreen.active = false;
  }

  navigateToPlayScreen() {
    this.gateScreen.active = false;
  }

  update(deltaTime: number) {}
}
