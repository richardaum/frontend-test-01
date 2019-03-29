class Cache {
  constructor() {
    this.reset();
  }

  reset() {
    this.items = [];
    this.playlist = null;
    this.playlistLength = 0;
  }
}

module.exports = new Cache();
