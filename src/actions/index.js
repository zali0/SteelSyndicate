const DATA_REQUESTED = "DATA_REQUESTED";
const DATA_RECIEVED = "DATA_RECIEVED";
const DATA_FAILED = "DATA_FAILED";

export function getDataAction(id) {
    return function(dispatch) {
      dispatch({
        type: DATA_REQUESTED,
      });
    fetch(`https://cors-anywhere.herokuapp.com/https://quiet-taiga-70836.herokuapp.com/data/${id}`)
      .then(response => response.json())
      .then(data => {
          dispatch({
          type: DATA_RECIEVED,
          payload: data
        })
    })
      .catch(error => dispatch({
          type: DATA_FAILED,
          payload: error
        })
      );
    }
}
export function userInfo(data) {
  return {
    type: "LOAD_USER_DATA",
    payload: data
}
}
export const addProduct = (data) => {
    return {
        type: "ADD_PRODUCT",
        payload: data
    }
}