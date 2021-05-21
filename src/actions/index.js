const DATA_REQUESTED = "DATA_REQUESTED";
const DATA_RECIEVED = "DATA_RECIEVED";
const DATA_FAILED = "DATA_FAILED";

export function getDataAction() {
    return function(dispatch) {
      dispatch({
        type: DATA_REQUESTED,
      });
    fetch("http://localhost:3003/data")
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

export const addProduct = (data) => {
    return {
        type: "ADD_PRODUCT",
        payload: data
    }
}