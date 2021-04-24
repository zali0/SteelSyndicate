export const loadData = () => {
    return {
        type: "LOAD_DATA",
    }
}
export const addProduct = (data) => {
    return {
        
        type: "ADD_PRODUCT",
        payload: data
    }
}