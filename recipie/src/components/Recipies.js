import React , {Component} from 'react';
import RecipieList from './RecipieList';
import Search from './Search';
// import {recipieData} from './Export'

class Recipies extends Component
{
    constructor(props){
        super(props);
        this.getRecipies = this.getRecipies.bind(this);
    }
    state = {
        recipies:[],
        loading :true,
        search:'',
        url : `https://api.spoonacular.com/recipes/complexSearch?apiKey=872f4af49f574c51ae0af5fe64887764&query=`,
        base_url : `https://api.spoonacular.com/recipes/complexSearch?apiKey=872f4af49f574c51ae0af5fe64887764&query=`,
    };

    async getRecipies(){
        try {
            const data = await fetch(this.state.url);
            console.log(this.state.url);
            const jsondata = await data.json();
            console.log(jsondata);
            this.setState({
                recipies:jsondata.results,
                loading :false
            })
        }
        catch(error){
            console.log(error);
        }
    }

    componentDidMount(){
        this.getRecipies();
    }

    handleChange = e =>{
        this.setState({
            search:e.target.value
        });
    };
    handleSubmit = e =>{
        e.preventDefault();
        const {base_url, search} = this.state;
        // history.pushState({search} , '' , url);
        this.setState (
            {
                url:`${base_url}${search}`,
                search : "",
            },
            () => this.getRecipies()
        )
    }
    render(){
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
        }
        return(
            <>
                <Search
                    search = {this.state.search}
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit} 
                />
                <RecipieList recipies = {this.state.recipies}/>
            </>
        );
    };
};

export default Recipies;