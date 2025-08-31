import { Link } from 'react-router-dom';

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, imageUrl }) => {
  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow hover:shadow-md transition">
      <Link to={`/product/${id}`}>
        <img className="h-48 w-full object-cover" src={imageUrl} alt={title} />
      </Link>
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
        </Link>
        <p className="mb-4 text-gray-600">${price}</p>
        <Link to={`/product/${id}`}>
          <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
