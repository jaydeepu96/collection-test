import { FC, useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import { Button } from "@nextui-org/button";
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    imageUrl:
      "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 150,
    imageUrl:
      "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Product 3",
    price: 120,
    imageUrl:
      "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Product 4",
    price: 200,
    imageUrl:
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "Product 5",
    price: 180,
    imageUrl:
      "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
  },
  {
    id: 6,
    name: "Product 6",
    price: 90,
    imageUrl:
      "https://images.pexels.com/photos/788200/pexels-photo-788200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    name: "Product 7",
    price: 250,
    imageUrl:
      "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    name: "Product 8",
    price: 300,
    imageUrl:
      "https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    name: "Product 9",
    price: 220,
    imageUrl:
      "https://images.pexels.com/photos/358532/pexels-photo-358532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ProductGrid: FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`container mx-auto py-8 ${
        isDarkMode ? "bg-gray-800 text-black" : "bg-gray-100 text-black"
      }`}
    >
      <Button
        radius="md"
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="absolute top-4 right-4"
        color="success"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </Button>
      <div className="bg-slate-100 p-5">
        <p style={{ fontSize: "20px", textAlign: "center" }}>
          Collection of products
        </p>
      </div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product.id)}
            />
          ))}
        </div>
        {selectedProduct && (
          <ProductDetail
            product={products.find((p) => p.id === selectedProduct)!}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
