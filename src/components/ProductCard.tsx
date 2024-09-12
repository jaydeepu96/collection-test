import { FC } from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };
  onClick: () => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' }}
      onClick={onClick}
    >
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">${product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
