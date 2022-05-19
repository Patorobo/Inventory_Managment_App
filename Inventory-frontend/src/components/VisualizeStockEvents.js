import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import VisualizeEvents from "./VisualizeEvents";

function VisualizeStockEvents(props) {
  const [productState, setProductState] = useState("");
  const [productEventState, setProductEventState] = useState([]);
  const { products } = props;
  useEffect(() => {
    async function fetchData() {
      const qs = require("qs");
      const product = productState;
      const query = qs.stringify(
        {
          filters: {
            product: {
              name: {
                $eq: [`${product}`],
              },
            },
          },
        },
        {
          encodeValuesOnly: true, // prettify url
        }
      );

      const result = await axios({
        method: "GET",
        url: `http://localhost:1337/api/stockevents?${query}`,
      });

      const fetchedResults = result.data.data;
      setProductEventState(fetchedResults);
    }
    fetchData();
  }, [productState]);
  const sumEvents=[];
  let accumulator = 0;
  const num = productEventState.length
  for (let i=0; i < num; i++) {
    accumulator += productEventState[i].attributes.qty;
    sumEvents[i]= accumulator
  }
  const stockTotal=accumulator;
  
  return (
    <div className="container p-5">
      <h3>Select Product for Analysis</h3>
      <select
        className="custom-select"
        value={productState}
        onChange={(e) => {
          const selectedProduct = e.target.value;

          setProductState(selectedProduct);
        }}
      >
        <option value="">Please Select a Product!</option>
        {products.map((product, i) => (
          <option key={i} value={product.attributes.name}>
            {product.attributes.name} = Tag:
            {product.attributes.tag}
          </option>
        ))}
      </select>
      <div className="StockEventTable__ProductsContainer">
        <VisualizeEvents
          name={productState}
          products={products}
          total={stockTotal}
          eventSum={sumEvents}
          stockEvents={productEventState}
        />
      </div>
    </div>
  );
}

export default VisualizeStockEvents;
