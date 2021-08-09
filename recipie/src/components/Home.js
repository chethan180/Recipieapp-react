import React , {Component} from 'react';
import Heading from './Heading';
import {Link} from 'react-router-dom';

class Home extends Component

{
    render(){
        return  <Heading title = "amazing recipies">
            <Link to = "/recipies" className = "text-uppercase btn btn-secondary btn-lg mt-3">
                search recipies
            </Link>
        </Heading>
}
}

export default Home;