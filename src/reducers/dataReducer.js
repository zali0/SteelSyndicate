const DATA_REQUESTED = "DATA_REQUESTED";
const DATA_RECIEVED = "DATA_RECIEVED";
const DATA_FAILED = "DATA_FAILED";

const dataReducer = (state = "", action) => {
  switch (action.type) {
    case DATA_REQUESTED:
      state = Object.assign({}, state, {status: "waiting"});
      break;
    case DATA_RECIEVED:
      console.log("DATA HAS BEEN RECEIVED", action.payload)
      state = Object.assign({}, state, {categories: action.payload.categories, products: action.payload.products, status: "received"});
      break;
    case DATA_FAILED:
      state = Object.assign({}, state, {status: "failed", error: action.payload});
    break;
  }
  return state;
}
// const dataReducer = (state = "", action) => {
//     switch(action.type) {
//         case "FETCH_DATA": 
//             return {
//               ...state,
//               products: action.payload.products,
//               categories: action.payload.categories,
//               loaded: true
//             }

//         default:
//           return {
//             ...state,
//             products: "",
//             categories: "",
//             loaded: false
//           };
//     }
// }
export default dataReducer;