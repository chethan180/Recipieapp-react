import React , {Component} from 'react';
// import {recipieDataDetail} from './DetailExport';
import { Link } from 'react-router-dom';
import Heading from './Heading';

const {REACT_APP_APIKEY} = process.env;

class SingleRecipie extends Component
{
    constructor(props)
    {
        super(props);
        const id = this.props.match.params.id;
        this.state = {
            recipie : {},
            user: JSON.parse(localStorage.getItem('profile')),
            id,
            loading :true
        } 
    }


    async componentDidMount(){
        const url = `https://api.spoonacular.com/recipes/${this.state.id}/information?apiKey=${REACT_APP_APIKEY}&includeNutrition=false` ;
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
            readyInMinutes,
            spoonacularScore,  
            vegan,
            vegetarian,
            veryHealthy,
            glutenFree,
            healthScore
        } = this.state.recipie;

        console.log(instructions);
        // var hello = new String(instructions);
        // // console.log(hello.charAt(0));
        // let hello1;
        // if(hello.charAt(0) === '<')
        // {
        //     hello1 = hello.split('<li>')
        // }

        // console.log(hello1);

        const token = this.state.user?.result;
        if(token){

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
                        <div>
                            <h3>Recipie Score </h3>
                            {spoonacularScore}
                        </div>
                        <div>
                            <h3>Ready in minutes</h3>
                            {readyInMinutes}
                        </div>
                        <div>
                            <h3>healthScore</h3>
                            {healthScore}
                        </div>
                        
                        <div>
                            <h3>vegan</h3>
                            {vegan}
                        </div>
                        <div>
                            <h3> vegetarian</h3>
                            {vegetarian}
                        </div>
                        <div>
                            <h3>veryHealthy</h3>
                            {veryHealthy}
                        </div>
                        <div>
                            <h3>glutenFree</h3>
                            {glutenFree}
                        </div>

                    </div>
                    <div className = "col-10 mx-auto col-md-6 my-3">
                        {/* <h6 className = "text-warning text-capitalize text-slanted" */}
                        <a href = {sourceUrl} target = "_blank" rel = "noopener noreferrer" className = "btn btn-primary mt-2 text-capitalize offset-2">
                            source url
                        </a>
                        <p className = "offset-2">
                            <h3>Ingridients</h3>
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
                            <h3>Steps for instructions</h3>
                            {instructions}
                        </p>

                    </div> 
                </div>
            </div>
        )
        }
        else{
            return (
            <Heading title = "Log in to view more recipies">
                <Link to = "/auth" className = "text-uppercase btn btn-secondary btn-lg mt-3">
                   Sign in
                </Link>
            </Heading>
            )
        }
    };
};

export default SingleRecipie;