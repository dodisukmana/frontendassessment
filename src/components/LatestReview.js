import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class LatestReview extends Component {
    
    state = {
        loading: true,
        product: null
    };

    async componentDidMount () {
        const url = "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ latestarticle: data.["latest review"], loading: false });
    }

    render () {

        if (this.state.loading || !this.state.latestarticle){
            return <div>Loading...</div>;
        }

        else {
            return (
                <div className="container">
                    
                    <h3>Latest Reviews</h3>
                    <div className="row navbar">
                        <h5 style={{color:"gray", float:"left"}}>So you can make better purchase decision</h5>
                        <span style={{float:"right"}}>
                            <h5 style={{color:"#ff0080"}}>See More</h5>
                        </span>
                    </div>
                    <div class="card-columns">
                        { this.state.latestarticle.map ((latestarticle) => {
                            return (
                                <div class="card">
                                    
                                    <div class="card-body">
                                        <div class="row border-bottom">
                                            <img class="card-img-top" style={{width:"100px"}} src={ latestarticle.product.image } alt="Card image cap"/>
                                            <div class="column">
                                                <h5 class="card-title">{ latestarticle.product.name }</h5>
                                                <h5 class="card-title">{ latestarticle.product.desc }</h5>
                                            </div>
                                        </div>
                                        
                                        <StarRatings
                                            rating={ latestarticle.star }
                                            starDimension="15px"
                                            starSpacing="10px"
                                        />
                                        <p class="card-text">{ latestarticle.comment }</p>
                                    </div>
                                </div>
                            )
                        }) }
                    </div>
                    <div style={{height: "50px"}}></div>
                </div>
            )
        }
    }

        
}

export default LatestReview;