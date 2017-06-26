import _ from 'lodash';
import { DELETE_POST, FETCH_POSTS, FETCH_POST } from '../actions';

const ID = 'id';

export default function (state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, ID);

    default:
      return state;
  }
}
