import { FC } from "react";
import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import { IoClose } from "react-icons/io5";

interface ProductDetailProps {
  product: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };
  onClose: () => void;
}

const ProductDetail: FC<ProductDetailProps> = ({ product, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 p-6 md:p-10 lg:p-12 overflow-y-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <IoClose className="text-2xl" />
      </button>
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
          {product.name}
        </h2>
        <div className="mb-6">
          <ImageCarousel images={[product.imageUrl]} />
        </div>
        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 mb-2">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          voluptates perspiciatis itaque, officiis quis molestias in sint magnam
          animi est provident optio accusamus facere sunt esse perferendis
          impedit illum libero.
        </p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 md:py-3 md:px-6 rounded shadow-md transition-transform transform hover:scale-105">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
