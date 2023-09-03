import {Application, Container, Graphics} from 'pixi.js';

export class GalaxyMap extends Container {
  app: Application;
  // @ts-ignore
  private g: Graphics;

  constructor(app: Application) {
    super();
    this.app = app;
    this.update = this.update.bind(this);

    this.g = new Graphics();


    this.addChild(this.g)

    this.app.ticker.add(this.update)
  }

  private state = {
    radius: 1,
    x: 100,
    y: 100
  }


  update(delta: number) {

    let state = this.state;

    state.radius += delta
    if (state.radius > 200) {
      state.radius = 20
    }

    state.x += delta
    state.y += delta

    state.x = state.x > 400 ? 100 : state.x
    state.y = state.y > 400 ? 100 : state.y

    this.g.clear()
    this.g.beginFill([1, 1, 1, .3]);
    this.g.drawCircle(state.x, state.y, state.radius)
    this.g.endFill();
    this.g.beginFill([.8, .8, .8, 1]);
    this.g.drawCircle(state.x, state.y, state.radius)
    this.g.beginHole()
    this.g.drawCircle(state.x, state.y, state.radius - 2)
    this.g.endHole()
    this.g.endFill();

  }


}
