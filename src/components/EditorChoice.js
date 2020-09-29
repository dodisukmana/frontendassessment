import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import peopleimage from '../img/Salam1-superJumbo.jpg';

class EditorChoice extends Component {
    
    state = {
        loading: true,
        product: null
    };

    async componentDidMount () {
        const url = "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ editorchoice: data.["editor's choice"], loading: false });
    }

    render () {

        if (this.state.loading || !this.state.editorchoice){
            return <div>Loading...</div>;
        }

        else {
            return (
                <div className="container">
                    <h3>Editor's Choice</h3>
                    <h5 style={{color:"gray"}}>Curated with Love</h5>
                    
                    <div class="card-deck">
                        { this.state.editorchoice.map ((editorchoice) => {
                            return (
                                <div class="card">
                                    <h5 class="card-title">{ editorchoice.editor }</h5>
                                    <p>{ editorchoice.role }</p>
                                </div>
                            )
                        }) }
                    </div>
                    <div class="card-deck">

                        { this.state.editorchoice.map ((editorchoice) => {
                            return (
                                <div class="card">
                                    <img class="card-img-top" src={ editorchoice.product.image } alt="Card image cap"/>
                                    <div class="card-body">
                                        
                                        <div className="row navbar">
                                            <h5 style={{color:"gray", fontSize:"15px"}}>{ editorchoice.product.rating }</h5>
                                            
                                            <StarRatings
                                                rating={ editorchoice.product.rating }
                                                starDimension="10px"
                                                starSpacing="10px"
                                            />
                                            
                                        </div>
                                    <h5 class="card-title">{ editorchoice.product.name }</h5>
                                    <p class="card-text">{ editorchoice.product.description }</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            )
                        }) }

                    </div>
                    
                </div>
            )
        }
    }

        
}

export default EditorChoice;