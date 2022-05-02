const inistialStateHome = {
  products: [],
  name: "noname",
};
const ProductsReducer = (state = inistialStateHome, action) => {
  if (action.type === "GET_ALL_PRODUCTS") {
    return {
      ...state,
      products: action.payload,
    };
  }
  return state;
};

export default ProductsReducer;
