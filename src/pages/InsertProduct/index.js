import Axios from "axios";
import React, { useState } from "react";
import { DefaultImage } from "../../assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const InsertProduct = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [pxl, setPxl] = useState("");
  const [tag, setTag] = useState("");
  const [stock, setStock] = useState("ready");
  const [price, setPrice] = useState("");
  const [image1, setImage1] = useState(DefaultImage);
  const [image2, setImage2] = useState(DefaultImage);
  const [image3, setImage3] = useState(DefaultImage);

  const submitProduct = (event) => {
    event.preventDefault();

    // console.log("name : ", name);
    // console.log("type : ", type);
    // console.log("size : ", size);
    // console.log("pxl : ", pxl);
    // console.log("tag : ", tag);
    // console.log("stock : ", stock);
    // console.log("price : ", price);
    // console.log("image1 : ", image1.name);

    const data = new FormData();
    data.append("name", name);
    data.append("type", type);
    data.append("size", size);
    data.append("pxl", pxl);
    data.append("tag", tag);
    data.append("stock", stock);
    data.append("price", price);
    data.append("images", image1);
    data.append("images", image2);
    data.append("images", image3);

    Axios.post("http://localhost:4000/v1/product/createProduct", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("post:", res);
        setName("");
        setType("");
        setSize("");
        setPxl("");
        setTag("");
        setStock("");
        setPrice("");
        // setImage1(DefaultImage);
        // setImage2(DefaultImage);
        // setImage3(DefaultImage);
        toast.success("Data successfully added", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // history("/admin/data-products", { replace: true });
      })
      .catch((err) => {
        console.log("post:", err);
        toast.failed("Failed to create product", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <form onSubmit={submitProduct}>
      <ToastContainer />
      <div className="h-screen w-full flex flex-col mb-8">
        <p className="font-semibold text-xl uppercase">Add product</p>
        <div className="mt-5 flex flex-row w-full flex-wrap items-center">
          <div className="flex flex-col mx-2 my-2">
            <label className="mb-1 font-medium text-base">Product Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Product Name" className="w-full px-1 py-2 border border-solid border-slate-600 rounded focus:ring" />
          </div>
          <div className="flex flex-col mx-2 my-2">
            <label className="mb-1 font-medium text-base">Tag</label>
            <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} name="name" placeholder="Gildan/Nike/Adidas/..." className="w-full px-1 py-2 border border-solid border-slate-600 rounded focus:ring" />
          </div>
          <div className="flex flex-col mx-2 my-2">
            <label className="mb-1 font-medium text-base">Product Type </label>
            <select name="type" value={type} onChange={(e) => setType(e.target.value)} className="w-full px-1 py-3 border border-solid border-slate-600 rounded focus:ring">
              <option value="">Select Type</option>
              <option value="t-shirt/long-sleeves">T-Shirts & Long Sleeves</option>
              <option value="shirts/polos">Shirts & Polos</option>
              <option value="bottoms/trousers">Bottoms & Trousers</option>
              <option value="shorts/swimwear">Shorts & Swimwear</option>
              <option value="hoodies/sweatshirts">Hoodies & Sweatshirts</option>
              <option value="jacket/coats">Jackets & Coats</option>
              <option value="footwear">Footwear</option>
            </select>
          </div>
          <div className="flex flex-col mx-2 my-2">
            <label className="mb-1 font-medium text-base">Size</label>
            <input type="text" value={size} onChange={(e) => setSize(e.target.value)} name="name" placeholder="S/X/.. 39/40/.." className="w-24 px-1 py-2 border border-solid border-slate-600 rounded focus:ring" />
          </div>
          <div className="flex flex-col mx-2 my-2">
            <label className="mb-1 font-medium text-base">PxL</label>
            <input type="text" value={pxl} onChange={(e) => setPxl(e.target.value)} name="name" placeholder="50x50/40US/..." className="w-36 px-1 py-2 border border-solid border-slate-600 rounded focus:ring" />
          </div>
          <div className="flex flex-col mx-2 my-2">
            <label className="mb-1 font-medium text-base">Stock </label>
            <select name="stock" value={stock} onChange={(e) => setStock(e.target.value)} className="w-full px-1 py-3 border border-solid border-slate-600 rounded focus:ring">
              <option value="ready">READY</option>
              <option value="sold">SOLD</option>
            </select>
          </div>
          <div className="flex flex-col mx-2 my-2">
            <label className="mb-1 font-medium text-base">Price</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} min="0" name="name" placeholder="Rp. 12345" className="w-36 px-1 py-2 border border-solid border-slate-600 rounded focus:ring" />
          </div>
        </div>
        <div className="mt-3 flex flex-row flex-wrap">
          <div className="flex flex-col m-2">
            <label className="mb-1 font-medium text-base">Image 1</label>
            {/* <img src={image1} alt="imgPreview" id="imgPreview1" className="h-64 object-cover" /> */}
            <input type="file" onChange={(e) => setImage1(e.target.files[0])} className="w-56 px-1 py-1 border my-2 border-solid border-slate-600 rounded focus:ring" />
          </div>
          <div className="flex flex-col m-2">
            <label className="mb-1 font-medium text-base">Image 2</label>
            {/* <img src={image2} alt="imgPreview" id="imgPreview2" className="h-64 object-cover" /> */}
            <input type="file" onChange={(e) => setImage2(e.target.files[0])} className="w-56 px-1 py-1 border my-2 border-solid border-slate-600 rounded focus:ring" />
          </div>
          <div className="flex flex-col m-2">
            <label className="mb-1 font-medium text-base">Image 3</label>
            {/* <img src={image3} alt="imgPreview" id="imgPreview3" className="h-64 object-cover" /> */}
            <input type="file" onChange={(e) => setImage3(e.target.files[0])} className="w-56 px-1 py-1 border my-2 border-solid border-slate-600 rounded focus:ring" />
          </div>
        </div>
        <div className="flex flex-row flex-wrap mt-3 ">
          <button className="bg-emerald-500 text-white border-green-900 w-36 border-2 border-solid rounded hover:ring cursor-pointer text-base font-medium">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default InsertProduct;
