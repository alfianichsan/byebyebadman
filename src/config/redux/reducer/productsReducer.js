const inistialStateHome = {
  products: [],
  pages: {
    currentPage: 1,
    totalPage: 1,
  },
};
const ProductsReducer = (state = inistialStateHome, action) => {
  if (action.type === "GET_ALL_PRODUCTS") {
    return {
      ...state,
      products: action.payload,
    };
  }
  if (action.type === "UPDATE_PAGE") {
    return {
      ...state,
      pages: action.payload,
    };
  }
  return state;
};

export default ProductsReducer;
