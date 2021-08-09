import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"


const SignUp = () => {

    const [ user, setUser] = useState({
        name: "",
        password:"",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const register = () => {
        console.log(name);
        const { name,  password } = user
        if( name  && password ){
            axios.post("http://localhost:3002/signup", user)
            .then( res => {
                console.log(user.name);
                alert(res.data.message)
            })
        } else {
            alert("invlid input")
        }
        
    }
        return (
            <form style = {{paddingLeft : "200px", paddingRight : "200px"}}>
                <h3>Sign Up</h3>



                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" name = "name" className="form-control" onChange={ handleChange } placeholder="Last name" />
                </div>



                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name = "password" className="form-control" onChange={ handleChange } placeholder="Enter password" />
                </div>


                <button type="submit" onClick={register} className="btn btn-primary btn-block">Sign Up</button>

            </form>
        )
}
export default SignUp;