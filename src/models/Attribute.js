class Attribute {
  constructor({
    name = '',
    initialValue = 0,
    description = ''
  } = {}) {
    this.name = name;
    this.initialValue = initialValue;
    this.description = description;
  }

  // Modifiers will be another 'Type' that knows how to apply itself
  // to a given value.  Not a problem just yet.. but eventually the order
  // of modifiers is going to be a big deal, unless we stick with 
  value({modifiers = []} = {}) {
    let curValue = this.initialValue;
    modifiers.forEach((mod) => (
      curValue = mod.apply(this.initialValue, curValue)
    ));

    return curValue;
  }

};

export default Attribute;
