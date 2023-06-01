import { Action } from "../utils/interfaces/Action";

const contactsReducer = (state = [], action: Action) => {
    console.log('state before:', state);

    switch (action.type) {
      case 'SET_CONTACTS':
   
        return action.payload;
      default:
        return state;
    }
  };
  
  export default contactsReducer;