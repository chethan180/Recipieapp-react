import React , {Component} from 'react';
// import {recipieDataDetail} from './DetailExport';
import {Link} from 'react-router-dom'; 

class SingleRecipie extends Component
{
    constructor(props)
    {
        super(props);
        const id = this.props.match.params.id;
        this.state = {
            recipie : {},
            id,
            loading :true
        } 
    }

    async componentDidMount(){
        const url = `https://api.spoonacular.com/recipes/${this.state.id}/information?apiKey=872f4af49f574c51ae0af5fe64887764&includeNutrition=false` ;
        try {
            const response = await fetch(url);
            const responseData = await response.json();
            this.setState ({
                recipie:responseData,
                loading :false
            })
            console.log(responseData);
            const ingridients = responseData.extendedIngredients;
            console.log(ingridients);
        }
        catch (error){
            console.log(error);
        }
        
    }


    render(){
        const {
             image,
             title,
            sourceUrl,
            extendedIngredients,
            instructions,
            // readyInMinutes,
            // spoonacularScore,    
        } = this.state.recipie;

        if(this.state.loading ){
        return(
            <div className = "contatiner">
                <div className = "row">
                    <div className = "col-10 mx-auto col-md-6 my-3">
                        <h2 className = "text-uppercase text-orange text-center">
                            Loading recipie 
                        </h2>
                    </div>
                </div>
            </div>
        );
        };
        return(
            <div className = "container my-5 ">
                <div className = "row">
                    <div className = "col">
                        <Link to = "/recipies" className = "btn btn-warning mb-5 text-capitailize" style = {{width :"25%"}}>
                            Back
                        </Link>
                        <h2 className = "text-uppercase">{title}</h2>
                        <img src = {image} className= "d-block w-100" style = {{maxHeight : "30rem"}} alt = "" />
                    </div>
                    <div className = "col-10 mx-auto col-md-6 my-3">
                        {/* <h6 className = "text-warning text-capitalize text-slanted" */}
                        <a href = {sourceUrl} target = "_blank" rel = "noopener noreferrer" className = "btn btn-primary mt-2 text-capitalize">
                            source url
                        </a>
                        <p>
                        {extendedIngredients.map(item => {
                            return (
                                <div>
                                    <li>{item.aisle}</li>
                                    <li>{item.original}</li>
                                    <br></br>
                                </div>         
                        );})}
                        </p>
                        <p>
                            {instructions}
                        </p>

                    </div> 
                </div>
            </div>
        )


    };
};

export default SingleRecipie;