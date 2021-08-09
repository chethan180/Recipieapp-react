import React, { Component } from 'react';
import Recipie from './Recipie';


export default class RecipieList extends Component{
    render (){
        const {recipies} = this.props;

        return(
            <>
                {/* title */}
                <div className = "container py-5">
                    <div className = "row" >
                        <div className = "col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className = "text-slanted" >
                                recipielist
                            </h1>
                        </div>
                    </div>
                    {/* end of title */}
                    <div className = "row">
                        {recipies.map(recipie => (<Recipie key = {recipie.id} recipie = {recipie}></Recipie>))}
                    </div>
                </div>
            </>
        ) 
    }
} 