export const FETCH_DATA_BEGIN   = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';


export const fetchData = (data) => {
    return {
        type: "FETCH_DATA",
        payload: data
    }

}

// export const fetchDataBegin = () => {
//     return{
//         type: FETCH_DATA_BEGIN
//     }
// };

// export const fetchDataSuccess = data => ({
//   type: FETCH_DATA_SUCCESS,
//   payload: { data }
// });

// export const fetchDataFailure = error => ({
//   type: FETCH_DATA_FAILURE,
//   payload: { error }
// });

export const addProduct = (data) => {
    return {
        type: "ADD_PRODUCT",
        payload: data
    }
}
// export function fetchData() {
//     console.log("FETCHING DATA")
//     return dispatch => {
//       dispatch(fetchDataBegin());
//       return  fetch("localhost:3001/data")
//         .then(handleErrors)
//         .then(res => {console.log("DATAAAAAAAAA", res); res.json()})
//         .then(json => {
//           dispatch(fetchDataSuccess(json.data));
//           return json.data;
//         })
//         .catch(error => dispatch(fetchDataFailure(error)));
//     };
//   }
  
//   // Handle HTTP errors since fetch won't.
//   function handleErrors(response) {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response;
//   }