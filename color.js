class Color {
  constructor(r, g, b, name){
    this.r = r
    this.g = g
    this.b = b
    this.name = name;
    console.log(`inside constuctor`);
  }

  innnerRGB(){
    const {r, g, b} = this;
    return `${r}, ${g}, ${b}`
  }

  rgb(){
    return `rgb(${this.innnerRGB()})`
  }

  rgba(a = 1.0){
    return `rgba(${this.innnerRGB()}, ${a})`
  }

  hex(){
    const {r, g, b} = this;
    return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
  }

  greet(){
    return `hello from ${this.name}!!!!!!!`
  }
}

const color = new Color(344,554,345, "black");
console.log(color.greet());
console.log(color.rgb());
console.log(color.rgba(0.4));
console.log(color.hex());