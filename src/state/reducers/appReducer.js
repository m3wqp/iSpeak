import {setUser} from "./auth-Reducer";

const SET_INITIALIZED = "SET_INITIALIZED"

let initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialState: true
      }
    default: return state;
  }

}

const initializedSuccess = () => ({ type: SET_INITIALIZED,

})

export const initializeApp = () => (dispatch) =>{
  let promise = dispatch(setUser())
  Promise.all([promise]).then(() =>{
    dispatch(initializedSuccess())
  })
}


export default appReducer;

