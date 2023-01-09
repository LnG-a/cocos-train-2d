import {
  AudioClip,
  AudioSource,
  Component,
  _decorator,
  resources,
  error,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("AudioController")
export class AudioController extends Component {
  @property(AudioClip)
  public clip: AudioClip = null!;

  @property(AudioSource)
  static audioSource: AudioSource = new AudioSource();

  playOneShot() {
    AudioController.audioSource.clip = this.clip;
    AudioController.audioSource.play();
  }

  static playOneShotWithPath(path: string) {
    console.log(path);

    // let sound = new AudioClip(path);
    // AudioController.audioSource.playOneShot(sound, 1);
    resources.load(path, AudioClip, (err, clip) => {
      if (err) {
        console.error("Failed to load audio");
        return;
      }
      AudioController.audioSource.playOneShot(clip, 1);
    });
  }
}
