const inistialStateDetail = {
  product: null,
  isLoading: true,
};
const ProductDetailReducer = (state = inistialStateDetail, action) => {
  if (action.type === "GET_DETAIL_PRODUCT") {
    console.log("payload: ", action.payload);
    return {
      ...state,
      product: action.payload,
    };
  }
  return state;
};

export default ProductDetailReducer;
