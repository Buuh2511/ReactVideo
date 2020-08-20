import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


class ListVideo extends Component{
    /*
    viewDetails(text){
        alert(text);
        console.log(text);
    }
    */

    /*
            <a href="/details" class="btn btn-primary" onClick={ () => {this.viewDetails('Details Page')}}>Details</a>
            <a href="/listvideo" class="btn btn-dark">Hide</a>
    */

    render(){
        return(
            <Router>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="thumbnail">
                    <img src={ this.props.image }></img>
                    <video controls autoPlay>
                        <source src = { this.props.video }></source>
                    </video>
                    <div className="title">
                        <h3>
                            { this.props.name }
                        </h3>
                    </div>
                </div>
                </div>
            </Router>        
        );
    }   
}

export default ListVideo;