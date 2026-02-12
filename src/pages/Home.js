import { useEffect, useState } from "react";
import supabase from "../config/SupaBaseClient";
import { Link } from "react-router-dom";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("store")
        .select()
        .order("price", { ascending: false });

      if (error) {
        setFetchError("Data Not Found");
        console.log(error);
        setProducts(null);
      }
      if (data) {
        setProducts(data);
        setFetchError(null);
      }
    };
    fetchProducts();
  }, []);

  const deleteHandle = async (id) => {
    const { data, error } = await supabase
      .from("store")
      .delete()
      .eq("id", id)
      .select();
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      setProducts((prev) => {
        return prev.filter((product) => product.id !== id);
      });
    }
  };

  return (
    <>
      {fetchError && <p>{fetchError}</p>}
      {products && (
        <div className="mt-10">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-white w-2/3 mt-3 mx-auto shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300 border border-gray-100"
              >
                <p className="text-lg font-semibold text-gray-800">
                  {product.name}
                </p>

                <p className="text-xl font-bold text-indigo-600 mt-2">
                  ${product.price}
                </p>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {product.Description}
                </p>
                <Link to={`/${product.id}`} className="m-4">
                  Edid
                </Link>
                <span
                  onClick={() => {
                    deleteHandle(product.id);
                  }}
                  className="m-4"
                >
                  Delete
                </span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default Home;
