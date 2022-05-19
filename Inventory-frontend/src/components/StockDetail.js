import React, { Component } from 'react';

class StockDetail extends Component{
    state = {
        show: false
    }    
    
    render(){
        const {name, tag, total, overstock, understock, stockEvents} = this.props;
        const {show} = this.state;
        function formatMyDate(value, locale = 'en-GB') {
            return new Date(value).toLocaleDateString(locale);
        }
        
        return(
        <div className="StockDetail" onClick={() => this.setState({show: !show}) } >
            <t className = "ProductDetails" ><b>{name}</b> | Tag: {tag} | Over-stock: {overstock} || 
            {total>=overstock || total<=understock ? <b style={{color: "red"}}>Total: {total}</b>
            : <b style={{color: "blue"}}>Total: {total}</b> }
            || Under-stock: {understock} </t>

            {show &&
                <div>
                    {stockEvents.map((event, i) => (
                        <div key={i} className="StockEventTable_Card">
                          <t> Id: {event.id} </t><br />
                          <t>{name}</t> - <t>Tag: {tag}</t><br />                          
                          <t> Date: {formatMyDate(event.attributes.updatedAt)} </t><br />                          
                          <t> Type: {event.attributes.type} </t> <br />
                          <t> Quantity: {event.attributes.qty} </t>
                          
                        </div>
                    ))}
                </div>
            }
        </div>
        );
    }
}

export default StockDetail;
