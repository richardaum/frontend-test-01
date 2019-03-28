import EventEmitter from "events";

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

export default new Router();
