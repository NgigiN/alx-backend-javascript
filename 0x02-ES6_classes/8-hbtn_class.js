export default class HolbertonCourse {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    if (typeof (size) === 'number') {
      this._size = size;
    }
  }

  get location() {
    return this._location;
  }

  set location(location) {
    if (typeof (location) === 'string') {
      this._location = location;
    }
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
