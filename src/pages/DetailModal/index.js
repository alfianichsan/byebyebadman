import React, { useEffect, useState } from "react";
import { Modal, Loading } from "../../components/index";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Axios from "axios";

const DetailModal = (props) => {
  const { idProduct } = props;
  const [isDetail, setIsDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function getDetail() {
    await Axios.get(`http://localhost:4000/v1/product/product/${idProduct}`)
      .then(async (result) => {
        const response = await result.data;
        setIsDetail(response.data);
        console.log("data: ", isDetail);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getDetail();
  }, [idProduct]);

  if (!isDetail.name && isLoading) {
    return <Loading />;
  }
  return (
    <Modal onClose={props.onClose}>
      <div className="p-5 flex flex-col">
        <div className="flex flex-row uppercase font-semibold text-lg w-full border-b-2 pb-2">
          <p>Detail Product</p>
          <CloseRoundedIcon onClick={props.onClose} sx={{ fontSize: 28 }} className="absolute right-6 cursor-pointer hover:ring-2 ring-slate-600 rounded-md" />
        </div>
        <div className="flex flex-col text-base mt-5 w-full">
          <div className="flex items-center justify-center w-full flex-wrap">
            <img src={`http://localhost:4000/images/${isDetail.images[0]}`} alt={`${isDetail.name} 1`} className="h-32 m-2" />
            <img src={`http://localhost:4000/images/${isDetail.images[1]}`} alt={`${isDetail.name} 2`} className="h-32 m-2" />
            <img src={`http://localhost:4000/images/${isDetail.images[2]}`} alt={`${isDetail.name} 3`} className="h-32 m-2" />
          </div>

          <div className="flex items-center justify-center w-full overflow-x-auto ">
            <table className="w-4/5 text-sm text-center text-gray-500 dark:text-gray-400 border-2 shadow-md sm:rounded-lg">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {isDetail.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Type
                  </th>
                  <td className="px-6 py-4">{isDetail.type}</td>
                </tr>
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Size
                  </th>
                  <td className="px-6 py-4 uppercase">{isDetail.size}</td>
                </tr>
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Stock
                  </th>
                  <td className="px-6 py-4 uppercase">{isDetail.stock}</td>
                </tr>
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Pxl
                  </th>
                  <td className="px-6 py-4">{isDetail.pxl}</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Price
                  </th>
                  <td className="px-6 py-4">{isDetail.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailModal;
