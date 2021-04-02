import Attribute from './Attribute';

class CharacterSheet {

  constructor({
    attributes = [],
  } = {}) {
    attributes.forEach((attr) => {
      this[attr.name.toLowerCase()] = attr;
    });
  };

  get attributes() {
    return Object.values(this).filter(
      (field) => (field instanceof Attribute)
    )
  }

};

function SRD5eCharacterSheet() {
  return new CharacterSheet({
    attributes : [
      new Attribute({
        name : 'Strength',
        initialValue : 10
      }),
      new Attribute({
        name : 'Dexterity',
        initialValue : 10
      }),
      new Attribute({
        name : 'Constitution',
        initialValue : 10
      }),
      new Attribute({
        name : 'Wisdom',
        initialValue : 10
      }),
      new Attribute({
        name : 'Intelligence',
        initialValue : 10
      }),
      new Attribute({
        name : 'Charisma',
        initialValue : 10
      }),
    ],
  })
};

export default CharacterSheet;
export {SRD5eCharacterSheet};
