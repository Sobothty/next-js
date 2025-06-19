const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllProducts = async () => {
  const productData = `${BASE_URL}/products`;
  if (!productData) {
    throw new Error("BASE_URL is not defined in the environment variables");
  }
  const res = await fetch(productData);
  const data = await res.json();
  console.log(data.products);
  return data.products;
};

export const getProductById = async (id: string) => {
  const product = `${BASE_URL}/products/${id}`;
  if (!product) {
    throw new Error("BASE_URL is not defined in the environment variables");
  }
  const res = await fetch(product);
  if (!res.ok) {
    throw new Error(`Product with ID ${id} not found`);
  }
  const data = await res.json();
  console.log(data);
  return data;
};
