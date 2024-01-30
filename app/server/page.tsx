import { Suspense } from "react";
import { ProductType } from "../types";
import ProductGrid from "../_components/ProductGrid";

// Next.js fetch API in action
async function loadPosts() {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}

const PostList = async () => {
  const {products} = await loadPosts();
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
        <ProductGrid data={products}/>
    </Suspense>
  );
};

export default PostList;