import { PageActionTypes } from './Page.Actions';

//export let initialState = []
// const newState = (state, newData) => {
//
//     return Object.assign( state, newData);
// };
export const Pagereducer = (state = [], action) => {
  switch (action.type) {
    case 'OpenPage': {
      let Page = action.payload;
      //   if(Page.ViewName=='BookingDetails')
      //   {

      //
      //   }

      return [
        ...state.filter((el) => el.ViewName != Page.ViewName),
        action.payload,
      ];
    }

    case 'LogOut': {
      let Page = action.payload;

      // state = undefined;

      return state.filter((el) => el.ViewName != 'UserDetails');
    }
    case 'ClosePage': {
      let ViewName = action.payload;
      return state.filter((el) => el.ViewName != ViewName);
    }

    default:
      return state;
  }
};
