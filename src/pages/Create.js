import { useState } from "react";
import supabase from "../config/SupaBaseClient";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const addHandle = async () => {
    const { data, error } = await supabase
      .from("store")
      .insert([{ name, price, description }])
      .select()
      .single();
    console.log(error, data);

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      navigate("/");
    }
  };
  return (
    <div className="w-2/5 mx-auto mt-10">
      <p className="text-black text-xl font-semibold mb-4">Create</p>

      <input
        type="text"
        placeholder="Product Name"
        className="block w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="number"
        placeholder="Product Price"
        className="block w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />

      <textarea
        placeholder="Product Description"
        rows={4}
        className="block w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>

      <button
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        onClick={addHandle}
      >
        Add Product
      </button>
    </div>
  );
};
export default Create;
