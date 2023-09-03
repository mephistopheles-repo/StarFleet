import * as PIXI from 'pixi.js';
import {Application, Container, Graphics, Loader, Sprite} from "pixi.js";

export class HelloWorld extends Container {
  app: Application;
  // @ts-ignore
  sprite: Sprite;
  state: { velocity: { x: number; y: number } };
  private g: Graphics;

  constructor(app: Application) {
    super();
    this.app = app;
    this.state = {velocity: {x: 1, y: 1}};
    this.update = this.update.bind(this);

    PIXI.Texture.fromURL('assets/hello-world.png')
      .then(texture => {
        this.sprite = new Sprite(texture);
        this.sprite.x = window.innerWidth / 2 - this.sprite.width / 2;
        this.sprite.y = window.innerHeight / 2 - this.sprite.height / 2;
        this.addChild(this.sprite);

        // Handle window resizing
        window.addEventListener('resize', (e) => {
          this.sprite!!.x = window.innerWidth / 2 - this.sprite!!.width / 2;
          this.sprite!!.y = window.innerHeight / 2 - this.sprite!!.height / 2;
        });

        // Handle update
        app.ticker.add(this.update);
      })

    this.g = new Graphics();

    this.g.beginFill(0xFFFF00, 255);
    this.g.drawCircle(100, 100, 10)
    this.g.endFill();

    this.addChild(this.g)
  }

  private radius = 1

  update(delta: number) {

    this.radius += delta
    if (this.radius > 200) {
      this.radius = 20
    }


    if (
      this.sprite.x <= 0 ||
      this.sprite.x >= window.innerWidth - this.sprite.width
    ) {
      this.state.velocity.x = -this.state.velocity.x;
    }
    if (
      this.sprite.y <= 0 ||
      this.sprite.y >= window.innerHeight - this.sprite.height
    ) {
      this.state.velocity.y = -this.state.velocity.y;
    }
    this.sprite.x += this.state.velocity.x;
    this.sprite.y += this.state.velocity.y;
  }
}
