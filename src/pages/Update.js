import { useNavigate, useParams } from "react-router-dom";
import supabase from "../config/SupaBaseClient";
import { useEffect, useState } from "react";

const Update = () => {
  const [products, setProducts] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const productId = useParams().id;
  console.log(productId);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("store")
        .select()
        .eq("id", productId)
        .single();
      setProducts(data);

      setName(data.name);
      setPrice(data.price);
      setDescription(data.description);
    };
    fetchProducts();
  }, []);

  console.log(products);
  const updateHandle = async () => {
    // console.log(name, price, description);
    const { data, error } = await supabase
      .from("store")
      .update({ name, price, description })
      .eq("id", productId)
      .select();
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      navigate("/");
    }
  };

  return (
    <>
      {products && (
        <div className="w-2/5 mx-auto mt-10">
          <p className="text-black text-xl font-semibold mb-4">Create</p>

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            className="block w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            type="number"
            placeholder="Product Price"
            value={price}
            className="block w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />

          <textarea
            placeholder="Product Description"
            rows={4}
            value={description}
            className="block w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>

          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={updateHandle}
          >
            Add Product
          </button>
        </div>
      )}
      {!products && (
        <p className="text-center text-gray-500 text-lg font-medium py-6 animate-pulse">
          Loading...
        </p>
      )}
    </>
  );
};
export default Update;
