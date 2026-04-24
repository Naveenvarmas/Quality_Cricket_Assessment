import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="cursor-pointer group">
        <div className="bg-white rounded border p-4 h-56 flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            className="max-h-44 object-contain group-hover:scale-105 transition duration-300"
          />
        </div>

        <h3 className="text-sm mt-3 leading-5 min-h-[40px]">
          {product.name}
        </h3>

        <div className="mt-2">
          <span className="text-blue-600 font-semibold mr-2">
            ${product.price}
          </span>

          <span className="text-gray-400 line-through text-sm">
            {product.oldPrice}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;