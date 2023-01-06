import {
  _decorator,
  Component,
  Node,
  EventTouch,
  v3,
  Vec3,
  Vec2,
  UITransform,
} from "cc";
import { CheckAnswer } from "./CheckAnswer";
const { ccclass, property } = _decorator;

@ccclass("Draggable")
export class Draggable extends Component {
  dragging: boolean = false;
  defaultPos: Vec3 = null;

  start() {
    this.defaultPos = this.node.getPosition();
    this.node.on(Node.EventType.TOUCH_START, this.onTouchStarted.bind(this));
    this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMoved.bind(this));
    this.node.on(Node.EventType.TOUCH_END, this.onTouchEnded.bind(this));
  }

  onTouchStarted(event: EventTouch) {
    this.dragging = true;
  }

  onTouchMoved(event: EventTouch) {
    if (this.dragging) {
      let point3 = event.getUILocation();
      let touchLocation = v3(point3.x, point3.y, 0);
      this.node.setWorldPosition(touchLocation);
    }
  }

  onTouchEnded(event: EventTouch) {
    this.dragging = false;
    let checkAnswer = this.node.parent
      .getComponent(CheckAnswer)
      .checkAnswer(this.node);

    //this.node.parent.setPosition(200, 200, 0);
    this.node.setPosition(this.defaultPos);
  }
}
