import { AudioClip, AudioSource, Component, _decorator } from "cc";
const { ccclass, property } = _decorator;

@ccclass("AudioController")
export class AudioController extends Component {
  @property(AudioClip)
  public clip: AudioClip = null!;

  @property(AudioSource)
  public audioSource: AudioSource = null!;

  playOneShot(path: string) {
    this.audioSource.playOneShot(this.clip, 1);
  }
}
