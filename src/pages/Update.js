import { useParams } from "react-router-dom";
import supabase from "../config/SupaBaseClient";
import { useEffect, useState } from "react";

const Update = () => {
  const [products, setProducts] = useState(null);

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
    };
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <>
      <p className="text-black">Update</p>
    </>
  );
};
export default Update;
