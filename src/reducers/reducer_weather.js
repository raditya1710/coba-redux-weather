import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATHER:
      return [action.payload.data,...state];//create an entirely new array
      //same as:
      //return state.concat([action.payload.data]); //doesn't change the state arrray, better than:
      //state.push(action.payload.data);
  }
  return state;
}
