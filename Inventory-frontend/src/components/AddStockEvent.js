import React, { Component } from "react";
import axios from "axios";
import "../App.css";

class AddStockEvent extends Component {
  state = {
    tag: 0,
    qty: 0,
    type: "add",
    product: "no",
    show: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { tag, qty, type, product } = this.state;
    if (product !== "no") {
      const data = {
        tag: parseInt(tag),
        qty,
        type,
        product: parseInt(product),
      };

      const AddStockRes = await axios({
        method: "POST",
        url: "http://localhost:1337/api/stockevents",

        data: {
          data,
        },
      });

      if (AddStockRes.status === 200) {
        alert("Success!");
        window.location = window.location.href;
      }
    } else {
      alert("No product chosen");
      return;
    }
  };

  render() {
    //Select a product

    //Add a quantity

    //Select a type

    //Submit to Strapi
    
    const { tag, qty, type, product, show } = this.state;
    const { products } = this.props;

    return (
      <div>
        <div className="ASEtagline">
          <p>Regularize your Inventory, Keep stocks up to date.</p>
        </div>
        <div className="AddStockEvent">
          <h3 className="ASErequest">Enter Stock Event</h3>
          <button
            className="AddButton"
            onClick={() => this.setState({ show: !show })}
          >
            Update
          </button>
          {show && (
            <form onSubmit={this.handleSubmit}>
              <select
                className="SelectInput"
                name="product"
                value={product}
                onChange={this.handleChange}
              >
                <option value="no">Please Select a Product!</option>
                {products.map((product, i) => (
                  <option key={i} value={product.id}>
                    {product.attributes.name} = Tag:
                    {product.attributes.tag}                    
                  </option>
                ))}
              </select>
              <b className="ProductLabel">Tag</b>
              <input
                className="InputTag"
                type="number"                
                name="tag"
                value={tag}
                onChange={this.handleChange}
              />

              <select
                className="SelectInput"
                name="type"
                value={type}
                onChange={this.handleChange}
              >
                <option value="add">Add</option>
                <option value="remove">Remove</option>
              </select>

              <input
                className="InputTag"
                type="number"
                name="qty"                
                value={qty}
                onChange={this.handleChange}
              />

              <button className="ASEbutton">Submit</button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default AddStockEvent;
