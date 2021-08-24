import React , {Component} from 'react';
import Heading from './Heading';
import {Link} from 'react-router-dom';

class Default extends Component
{
    render(){
        return(
            <Heading title= "404" >
            <h2 className = "text-light text-uppercase">
                Error Page
            </h2>
            <Link to="/" className= "text-uppercase btn btn-secondary btn-lg mt-3">
                return home
            </Link>
            </Heading>

        );
    };
};

export default Default;