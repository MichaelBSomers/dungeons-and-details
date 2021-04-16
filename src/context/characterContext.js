import React, { createContext, useReducer } from 'react';
import Attribute from '../models/Attribute';

const initialState = {
  attributes: [
    new Attribute({
      name: 'Strength',
      initialValue: 10,
    }),
    new Attribute({
      name: 'Dexterity',
      initialValue: 10,
    }),
    new Attribute({
      name: 'Constitution',
      initialValue: 10,
    }),
    new Attribute({
      name: 'Wisdom',
      initialValue: 10,
    }),
    new Attribute({
      name: 'Intelligence',
      initialValue: 10,
    }),
    new Attribute({
      name: 'Charisma',
      initialValue: 10,
    }),
  ],
};

const characterContext = createContext(initialState);
const { Provider } = characterContext;

export const characterContextActions = {
  LOAD_CHARACTER: 'loadCharacter',
  UPDATE_CHARACTER: 'updateCharacter',
};

const CharacterContextStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((item, action) => {
    switch (action.type) {
      // case formContextActions.ADD_SUBMISSION:
      //   return state.push(action.value);
      case characterContextActions.LOAD_CHARACTER: {
        const newState = { ...item };
        return newState;
      }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { characterContext, CharacterContextStateProvider };
