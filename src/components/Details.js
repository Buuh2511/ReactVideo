import React, { Component } from 'react';
import './Details.css';

class Details extends Component {

    viewListVideo(text) {
        this.props.click({ name: this.props.name, image: this.props.image })
    }

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="thumbnail">
                    <img src={this.props.image}></img>
                    <div className="title">
                        <h3>
                            {this.props.name}
                        </h3>
                        <p className="content">
                            {this.props.content}
                        </p>
                        <p>
                            <a href="#" className="btn btn-primary" onClick={() => { this.viewListVideo('Video Page') }} >Back</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;