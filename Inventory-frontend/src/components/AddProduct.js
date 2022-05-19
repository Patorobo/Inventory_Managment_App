import React, { Component } from 'react';
import axios from 'axios';

class AddProduct extends Component{
    state = {
        name: '',
        tag: 0,
        overstock: 0,
        understock: 0
    }
    handleSubmit = async(event) => {
        event.preventDefault()
        const {name} = this.state;
        const {tag} = this.state;
        const {overstock} = this.state;
        const {understock} = this.state;


        //Async
        const createProductRest = await axios({
            method: 'POST',
            url: 'http://localhost:1337/api/products',

            data:
            {
                data: 
                    {
                        name,                   
                        tag,
                        overstock,
                        understock
                    }  
            }
           
        });

        if(createProductRest.status === 200){
            alert("Successfully created new product!");
            window.location = window.location.href;
        }
    }

    render(){
        const {name} = this.state;
        const {tag} = this.state;
        const {overstock} = this.state;
        const {understock} = this.state;
        return(
            <div>
                <div>
                    <p className="NPtagline">Add New Product to Inventory.</p>
                </div>
                <div className="AddProduct">
                    <h3 className="ASErequest">Input a New Product</h3>
                    <form onSubmit={this.handleSubmit}>
                        <t className="ProductLabel">Product</t>
                        <input 
                            className="InputText"
                            type="text" 
                            name="name" 
                            placeholder="Product Name"
                            value={name}
                            onChange={(event) => this.setState({name: event.target.value})} 
                        />
                        <t className="ProductLabel">Tag</t>
                        <input 
                            className="InputTag"
                            type="number" 
                            name="tag" 
                            value={tag}
                            onChange={(event) => this.setState({tag: event.target.value})} 
                        />                       
                        <t className="ProductLabel">Over stock</t>                       
                        <input 
                            className="InputTag"
                            type="number" 
                            name="overstock" 
                            value={overstock}
                            onChange={(event) => this.setState({overstock: event.target.value})} 
                        />
                         <t className="ProductLabel">Under stock</t>
                        <input 
                            className="InputTag"
                            type="number" 
                            name="understock" 
                            value={understock}
                            onChange={(event) => this.setState({understock: event.target.value})} 
                        />
                        <br />
                        <button className="ProductButton" type="submit">Create new product</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddProduct;
