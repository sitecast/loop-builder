import { CHANGE_LOOP_TYPE } from '../actions/index'

export default function(state = null, action) {
  switch(action.type) {
    case CHANGE_LOOP_TYPE:
      return action.payload.data;
  }

  return  state
}
