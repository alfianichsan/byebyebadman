import Axios from "axios";

export const setProducts = () => async (dispatch) => {
  //   Axios.get(`http://localhost:4000/v1/product/all-products?page=${page}&perPage=${perPage}`)
  const response = await Axios.get("http://localhost:4000/v1/product/all-products");
  const data = await response.data;
  dispatch({ type: "GET_ALL_PRODUCTS", payload: data.data });
  // .then((result) => {
  //   const response = result.data;

  //   dispatch({ type: "GET_ALL_PRODUCTS", payload: response.data });
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
};

// export const getProductDetail = (id) => (dispatch) => {
//   Axios.get(`http://localhost:4000/v1/product/product/${id}`)
//     .then((result) => {
//       const response = result.data;

//       dispatch({ type: "GET_DETAIL_PRODUCT", payload: response.data });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export async function getProductDetail(id, dispatch) {
  //   Axios.get(`http://localhost:4000/v1/product/all-products?page=${page}&perPage=${perPage}`)
  const response = await Axios.get(`http://localhost:4000/v1/product/product/${id}`);
  const data = await response.data;
  await dispatch({ type: "GET_DETAIL_PRODUCT", payload: data.data });
  // .then((result) => {
  //   const response = result.data;

  //   dispatch({ type: "GET_ALL_PRODUCTS", payload: response.data });
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
}
