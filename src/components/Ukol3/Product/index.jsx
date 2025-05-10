import './style.css';

export const Product = ({ image, name, price, onSelectPrice }) => {
  const handleSelect = () => {
    console.log(price);
    onSelectPrice(price);
  };

  return (
    <div onClick={handleSelect} className="product">
      <img src={image} className="product__image" />
      <div className="product__body">
        {name}: {price} Kč
      </div>
    </div>
  );
};
