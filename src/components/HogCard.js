import React, { Component } from "react";
import { render } from "react-dom";
import HogDetails from './HogDetails'

export default class HogCard extends Component {
    
    state = {
        details: false
    }

    changeDetails = () => {
        this.setState({
            details: !this.state.details
        })
    }

    render() {
        const { name } = this.props.hog
        let formatedName = name.replaceAll(" ","_")
        let pigImages = require(`../hog-imgs/${formatedName.toLowerCase()}.jpg`)
        return(
            // <div className='ui eight wide column'>
                <div onClick={()=> this.changeDetails()} className='pigTile'>
                    <div className='Card-img'>
                        <img src={pigImages}/>
                    </div>
                    <div className='card-contents'>
                        <div className='card-name'>
                            <h3>Name: { name } </h3>
                        </div>
                        {this.state.details ? <HogDetails hog={this.props.hog} /> : null}
                    </div>
                </div>
            // </div>
        )
    }

}