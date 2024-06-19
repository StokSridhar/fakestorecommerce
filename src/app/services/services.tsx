import axios from "axios";

export async function ProductList() {
  const res = await fetch(process.env.REACT_APP_BASE_URL + "/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export async function ProductDetails() {
  const res = await fetch(process.env.REACT_APP_BASE_URL + "/products/1" );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
 

export async function CatagoryList() {
  const res = await fetch(
    process.env.REACT_APP_BASE_URL + "/products/categories"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function DescSortList() {
  const res = await fetch(
    process.env.REACT_APP_BASE_URL + "/products/?sort=desc"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
