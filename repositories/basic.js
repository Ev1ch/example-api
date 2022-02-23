class BasicRepository {
  constructor() {
    this.data = new Map();

    if (this._instance) {
      return this._instance;
    }

    this._instance = this;
  }

  add(id, model) {
    this.data.set(id, model);
    return this.getById(id);
  }

  getById(id) {
    return this.data.get(id);
  }

  deleteById(id) {
    return this.data.delete(id);
  }

  updateById(id, value) {
    return this.data.set(id, value);
  }

  getAll() {
    return this.data.values();
  }
}

module.exports = BasicRepository;
