import Axios from "axios";

export const setProducts = (filter, search, perPage, page) => async (dispatch) => {
  //   Axios.get(`http://localhost:4000/v1/product/all-products?page=${page}&perPage=${perPage}`)
  // console.log(filter, search);
  if (search !== "") {
    const response = await Axios.get(`http://localhost:4000/v1/product/all-products?name=${search}&perPage=${perPage}&page=${page}`);
    const data = response.data;
    dispatch({ type: "GET_ALL_PRODUCTS", payload: data.data });
    dispatch({
      type: "UPDATE_PAGE",
      payload: {
        currentPage: data.current_page,
        totalPage: Math.ceil(data.total_data / data.per_page),
      },
    });
  }
  if (filter === "all-products" && search === "") {
    const response = await Axios.get(`http://localhost:4000/v1/product/all-products?perPage=${perPage}&page=${page}`);
    const data = response.data;
    // console.log(data);
    dispatch({ type: "GET_ALL_PRODUCTS", payload: data.data });
    dispatch({
      type: "UPDATE_PAGE",
      payload: {
        currentPage: data.current_Page,
        totalPage: Math.ceil(data.total_Data / data.per_Page),
      },
    });
  }
  if (filter !== "all-products" && search === "") {
    const response = await Axios.get(`http://localhost:4000/v1/product/all-products?type=${filter}&perPage=${perPage}&page=${page}`);
    const data = response.data;
    dispatch({ type: "GET_ALL_PRODUCTS", payload: data.data });
    dispatch({
      type: "UPDATE_PAGE",
      payload: {
        currentPage: data.current_page,
        totalPage: Math.ceil(data.total_data / data.per_page),
      },
    });
  }

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
