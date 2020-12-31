/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Product.css";
import { useStateValue } from "./StateProvider";

// ★ &#11088;
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  // console.log("this is the basket", basket);

  const addToBasket = () => {
    // dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className=" product ">
      <Card className="" style={{}}>
        <Card.Img className="img" variant="top" src={image} />
        <Card.Body>
          <div className="cardStyle">
            <Card.Text className="product__info">
              <div>{title}</div>
              <div className="product__price">
                <small>RS</small>
                {/* <small>$</small> */}
                <strong>{price}</strong>
              </div>
            </Card.Text>
            <Card.Text>
              <div className="product__rating">
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i} role="img" aria-label="star">
                      ⭐
                    </span>
                  ))}
              </div>
            </Card.Text>
          </div>
          <button className="btn-basket" onClick={addToBasket}>
            Add To Basket
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;

{
  /* <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt="product_image" />
      <button onClick={addToBasket}>Add To Basket</button> */
}
