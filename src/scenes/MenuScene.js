import GeneralScene from './GeneralScene.js';

// GeneralScene kommt NICHT von Phaser, sondern ist eine eigene Klasse die von Phaser.Scene erbt
class MenuScene extends GeneralScene {
  constructor(settings) {
    super('MenuScene', settings);
  }

  create() {
    super.create();

    this.setupMusic();

    // .createText kommt NICHT von Phaser sondern von der GeneralScene
    this.createText({
      y: this.config.center.y - this.config.textSpace,
      text: 'Start Game',
      func: () => this.scene.start('GameScene'),
    });

    // .createText kommt NICHT von Phaser sondern von der GeneralScene
    this.createText({
      text: 'Highscore',
      func: () => this.scene.start('HighscoreScene'),
    });

    // .createText kommt NICHT von Phaser sondern von der GeneralScene
    this.createText({
      y: this.config.center.y + this.config.textSpace,
      text: 'Exit',
      func: () => this.game.destroy(true),
    });
  }

  setupMusic() {
    // this.backgroundMusic ist eine selbsterstelle Variable/Attribut (property) und kommt NICHT von Phaser
    if (this.backgroundMusic) {
      this.backgroundMusic.resume();
      return;
    }

    // Hier wird die Sound-Datei hinzugefügt
    this.backgroundMusic = this.sound.add('themeMusic', {
      volume: 0.3,
      loop: true,
    });

    // Hier wird die Sound-Datei abgespielt
    this.backgroundMusic.play();
  }
}

export default MenuScene;
