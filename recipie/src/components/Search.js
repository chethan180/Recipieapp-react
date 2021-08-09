import React, { Component } from 'react';
import { InputGroupText } from 'reactstrap';

export default class Search extends Component{
    render (){
        const {handleChange ,handleSubmit ,search } = this.props;

        return <div className = "Container">
                <div className = "row ">
                    <div className = "col-10 mx-auto col-md-8 mt-5 text-center">
                        <h1 className = "text-slanted text-capitalize">
                            search recipies with {" "}<strong className = "text-orange" >Food name</strong>
                        </h1>
                        <form className = "mt-4 ">
                            <label htmlFor = "search" className = "text-capitalize">
                                type recipies
                            </label>
                            <div className= "input-group">
                                <input type = "text" name = "search" className = "form-control form-control-lg" placeholder = "type" value = {search} onChange = {handleChange} />
                                <div className = "input-group-append">
                                    <button type = "submit" onClick = {handleSubmit} className = "input-group-text bg-primary text-white">
                                        <i className = "fas fa-search"/>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    }
} 