import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Recipie extends Component{
    render (){
        const {image ,title,id} = this.props.recipie;
        return(
        <div className = "col-10 mx-auto col-md-10 col-lg-4 my-3">
            <div className = "card" style = {{height : '100%'}}>
                <img src = {image} style = {{height : "14rem" }} className = "img-card-top"  alt = ""/>
                <div className = "card-body text-capitalize">
                    <h6>{title}</h6>
                </div>
                <div className = "card-footer">
                    <Link to= {`/recipies/${id}`} className = "btn btn-primary text-capitalize">
                        View Recipie
                    </Link>
                </div>
            </div>
        </div>
        )
    }
} 