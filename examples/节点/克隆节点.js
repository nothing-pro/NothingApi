(async function() {
  const app = new NOTHING.App();
  app.start();

  const backgroundPrototype = await app.loadPrototype('');
  const bollPrototype = await app.loadPrototype('');
  
  // 0 1 2
  // 3 4 5
  // 6 7 8
  const backgrounds = [
    backgroundPrototype.cloneTo(-1.5, 0,  1.5),
    backgroundPrototype.cloneTo( 0.0, 0,  1.5),
    backgroundPrototype.cloneTo( 1.5, 0,  1.5),
    backgroundPrototype.cloneTo(-1.5, 0,  0.0),
    backgroundPrototype.cloneTo( 0.0, 0,  0.0),
    backgroundPrototype.cloneTo( 1.5, 0,  0.0),
    backgroundPrototype.cloneTo(-1.5, 0, -1.5),
    backgroundPrototype.cloneTo( 0.0, 0, -1.5),
    backgroundPrototype.cloneTo( 1.5, 0, -1.5)
  ];
  
  // 将 boll 放置在 0
  const boll = bollPrototype.cloneTo(-1.5, 0,  1.5);
  
  async function waitForOneSecond() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    })
  }
  
  class BollClazz {
  
    BollClazz() {
      const self = this;
      self._boll = undefined;
      self._moveAction = [];
      self._timer = new Date().getTime();
  
      function checkMove() {
        const moveFunc = self._moveAction.shift();
        if (moveFunc !== undefined) {
          moveFunc();
        }
      }
  
      setInterval(checkMove, 1000);
    }
  
    bind(boll) {
      this._boll = boll;
    }
  
    moveX() {
      this._moveAction.push(() => {
        this._boll.setX(this._boll.getX() + 1.5);
      });
    }
  
    moveNX() {
      this._moveAction.push(() => {
        this._boll.setX(this._boll.getX() - 1.5);
      });
    }
  
    moveZ() {
      this._moveAction.push(() => {
        this._boll.setZ(this._boll.getZ() + 1.5);
      });
    }
  
    moveNZ() {
      this._moveAction.push(() => {
        this._boll.setZ(this._boll.getZ() - 1.5);
      });
    }
  }
  
  const bollInstance = new BollClazz();
  
  bollInstance.bind(boll);
  
  bollInstance.moveX();
  bollInstance.moveNZ();
})();