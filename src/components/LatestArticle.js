import React, { Component } from 'react';

class LatestArticle extends Component {
    
    state = {
        loading: true,
        product: null
    };

    async componentDidMount () {
        const url = "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ latestarticle: data.["latest articles"], loading: false });
    }

    render () {

        if (this.state.loading || !this.state.latestarticle){
            return <div>Loading...</div>;
        }

        else {
            return (
                <div className="container">
                    <h3>Latest Article</h3>
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
                                    <img class="card-img-top" src={ latestarticle.image } alt="Card image cap"/>
                                    <div class="card-body">
                                        <h5 class="card-title">{ latestarticle.title }</h5>
                                        <p class="card-text">{ latestarticle.author } || { latestarticle.published_at }</p>
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

export default LatestArticle;