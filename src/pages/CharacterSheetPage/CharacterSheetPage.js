import React, {Component} from 'react';

import {
  AttributeContainer,
} from './components';

import {SRD5eCharacterSheet} from '../../models/CharacterSheet';

class CharacterSheetPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sheet : SRD5eCharacterSheet(),
    };

  }

  render() {
    const {sheet} = this.state;

    return (
      <AttributeContainer
        attributes={sheet.attributes}
      />
    )
  }

};


export default CharacterSheetPage;
