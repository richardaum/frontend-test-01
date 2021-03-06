const { EventEmitter } = require("events");

class Router extends EventEmitter {
  constructor(props) {
    super(props);
    this.current = "/";
  }

  navigate(url, state = {}) {
    this.current = url;
    this.emit("navigate", url, state);
  }
}

module.exports = new Router();
