import React from 'react';
import StockDetail from './StockDetail';

function StockEventsTable(props){
    const {products, stockEvents} = props    
    return(
        <div className="StockEventTable">
            {products.map(product => {                   
                const relevantStockEvents = stockEvents.filter(se => se.attributes.tag === product.attributes.tag)             
                const stockTotal = relevantStockEvents.reduce((accumulator, currentElement) => {
                    return accumulator + currentElement.attributes.qty;
                },0);
                return(
                    <div className="StockEventTable__ProductsContainer" >
                        <StockDetail 
                            name={product.attributes.name}                            
                            tag={product.attributes.tag}
                            total={stockTotal}
                            overstock={product.attributes.overstock}
                            understock={product.attributes.understock}
                            stockEvents={relevantStockEvents}                                                        
                            />
                    </div>
                );
            })}
        </div>
    );
}

export default StockEventsTable;
