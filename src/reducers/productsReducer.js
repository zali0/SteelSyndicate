const images = {
    pipes: "data:image/jpeg;base64,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",
    centeringSheets: "https://5.imimg.com/data5/DM/WA/VA/SELLER-2292746/centering-sheets-500x500.jpg",
    columnBox: "https://www.vetrivelengg-srithar.in/wp-content/uploads/2020/02/3-2.jpg",
    bridge40: "https://5.imimg.com/data5/LH/LY/MY-21841048/shuttering-plate-with-angle-500x500.jpg",
    bridge50: "https://5.imimg.com/data5/LH/LY/MY-21841048/shuttering-plate-with-angle-500x500.jpg",
    scaffolders: "https://sinopro.ae/files/inventory/923300_SINOPRO%20H%20frame%20scaffolding%20system%20Access%20scaffolding%20light%20duty%20scaffolding%20systems%20(1).jpg",
    accessories: "https://i.ebayimg.com/images/g/uTMAAOSwxUtbInRK/s-l400.jpg"
}
const products = [
    {
        id:1,
        name: "Centering Sheet",
        category: "Centering Sheets",
        dimensions: "2' x 3'",
        unit: "Angular",
        image: images.centeringSheets,
        stock: 12
    },
    {
        id:3,
        name: "Pipe",
        category: "Pipes",
        dimensions: "Vertical 3",
        unit: "mt",
        stock: 67,
        image: images.pipes
    },
    {
        id:3,
        name: "Column Box",
        category: "Column Box",
        dimensions: "1' x 9'",
        unit: "",
        image: images.columnBox,
        stock: 45
    },
    {
        id:3,
        name: "Bridge 40mm",
        category: "Bridge 40mm",
        dimensions: "7' x 8'",
        unit: "",
        image: images.bridge40,
        stock: 45
    },
    {
        id:3,
        name: "Bridge 50mm",
        category: "Bridge 50mm",
        dimensions: "7' x 8'",
        unit: "",
        image: images.bridge50,
        stock: 45
    },
    {
        id:3,
        name: "Scaffolder",
        category: "Scaffolders",
        dimensions: "450",
        unit: "mm",
        image: images.scaffolders,
        stock: 45
    },
    {
        id:3,
        name: "Nuts",
        category: "Accessories",
        dimensions: "",
        unit: "",
        image: images.accessories,
        stock: 68
    },
]
const productsReducer = (state = products, action) => {
    switch(action.type) {
        case "LOAD_DATA":
            return state;
        case "ADD_PRODUCT":
            console.log("DATAaaaaaaaaaaaaaaaaaaaaaaaa")
            console.log(state)
            let array = products.push(action.payload)
            // return products ;
            // return { products: [...state.products, action.payload] };
        default: 
            return state;
    }
}
export default productsReducer;