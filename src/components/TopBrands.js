import React, { Component } from 'react';
import NiveaLogo from '../img/1200px-Nivea_logo.svg.png';
import TheOrdinaryLogo from '../img/untitled-1_97.png';
import TheBodyShopLogo from '../img/download.png';

class TopBrands extends Component {
    render () {

            return (
                <div className="container">
                    <h3>Top Brands</h3>
                    <div className="row navbar">
                        <h5 style={{color:"gray", float:"left"}}>We all know and love</h5>
                        <span style={{float:"right"}}>
                            <h5 style={{color:"#ff0080"}}>See More</h5>
                        </span>
                    </div>
                    <div class="card-columns">
                        <img class="card-img-top" src={ NiveaLogo } style={{width:"100px"}} alt="Card image cap"/>
                        <div />
                        <img class="card-img-top" src={ TheOrdinaryLogo } style={{width:"190px"}} alt="Card image cap"/>
                        <div />
                        <img class="card-img-top" src={ TheBodyShopLogo } style={{width:"100px"}} alt="Card image cap"/>
                    </div>
                    <div style={{height: "50px"}}></div>
                    <h3>Female Daily - Find everything you want to know about beauty on Female Daily</h3>
                    <h5 style={{color:"gray", float:"left"}}>Product Reviews, Tips % Trick, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything! We are here to be your friendly solution to all things beauty, inside and out!</h5>
                    <div style={{height: "50px"}}></div>
                </div>
                
            )
    }

        
}

export default TopBrands;