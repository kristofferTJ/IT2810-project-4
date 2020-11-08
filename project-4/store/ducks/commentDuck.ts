import axios from 'axios';
import { IRestaurant } from '../../../backend/models/Restaurant';

// Types

export type commentAction = {
    type: string;
    payload: string;
  };

export type commentType = {
    comment: string
    restaurant: IRestaurant
}
  

// Actions

const UPDATE_COMMENT = 'UPDATE_COMMENT';

// Reducer
export default function commentReducer(state: string = '', action: commentAction) {
  switch (action.type) {
    case UPDATE_COMMENT:
        return {
            state,
            comment: action.payload
        }
    default:
      return state;
  }
}

export const saveComment = ({comment, restaurant}: commentType) => async (dispatch: Function) => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({comment})

    try {
        const response = await axios.put(`http://localhost:8000/api/restaurant/comment/${restaurant._id}`, body, config)

        dispatch({
            type: UPDATE_COMMENT,
            payload: response
        })
    } catch(error) {
        console.log("Kunne ikke lagre kommentar")

    }
}
