import { FC } from "react";
import { motion } from "framer-motion";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: FC<ImageCarouselProps> = ({ images }) => {
  return (
    <div className="overflow-hidden relative">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Product image ${index + 1}`}
          className="w-full h-64 object-cover"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
