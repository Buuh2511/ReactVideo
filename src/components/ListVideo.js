import React, { Component } from 'react';

class ListVideo extends Component{

    viewDetails(text){
        alert(text);
        console.log(text);
    }

    render(){
        return(
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="thumbnail">
                    <img src={ this.props.image }></img>
                    <div class="title">
                        <h3>
                            { this.props.name }
                        </h3>
                        <p>
                            <a href="#" class="btn btn-primary" onClick={ () => {this.viewDetails('Details Page')}}>Details</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }   
}

export default ListVideo;