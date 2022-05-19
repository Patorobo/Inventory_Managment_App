import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
            <div>
                <div className="Welcome">
                    <p>Welcome!</p>
                    <p>Inventory Management - Product Analysis System</p>
                </div>
                <div className="Imgs">
                    <div className="Main_image">
                      <img 
                        src={require('../images/frontImage.jpg')}
                        alt="Front_Image"
                        className="Front_img" 
                        />                     
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
