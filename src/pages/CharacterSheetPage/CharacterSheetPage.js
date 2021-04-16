import React, { useState, useContext } from 'react';

import { AttributeContainer } from './components';

import { SRD5eCharacterSheet } from '../../models/CharacterSheet';
import { characterContext, characterContextActions } from '../../context/characterContext';

const CharacterSheetPage = () => {
  const characterState = useContext(characterContext);
  // This is the hook for state, pretty much the exact same thing as context with limited scope.
  // const [characterSheet, setCharacterSheet] = useState(SRD5eCharacterSheet());
  return <AttributeContainer attributes={characterState.attributes} />;
};

export default CharacterSheetPage;
