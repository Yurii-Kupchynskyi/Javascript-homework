class StringBuilder {
  _value;
  constructor(value) {
    this._value = value;
  }
  get value() {
    return this._value;
  }

  append(str) {
    this._value = this._value + str;
  }
  prepend(str) {
    this._value = str + this._value;
  }
  pad(str) {
    this.append(str);
    this.prepend(str);
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
