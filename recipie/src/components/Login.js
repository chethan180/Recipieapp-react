import './Auth/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Airtable from 'airtable';

const base = new Airtable({apiKey : "keyKeIttqs49uTw1L"}).base('appgBXlkhW8q5U7RB');

const Login = () => {

    useEffect (() => {
        base('Table 1').select({
            // Selecting the first 3 records in Grid view:
            maxRecords: 3,
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
        
            records.forEach(function(record) {
                console.log('Retrieved', record.get('Name'));
                console.log('Retrieved', record.get('Email'));
                console.log('Retrieved', record.get('Password'));

            });
        
            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();
        
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    })

    // const history = useHistory()

    // const [ user, setUser] = useState({
    //     email:"",
    //     password:""
    // })

    // const handleChange = e => {
    //     const { name, value } = e.target
    //     setUser({
    //         ...user,
    //         [name]: value
    //     })
    // }
    // const login = () => {
    //     axios.post("http://localhost:9002/login", user)
    //     .then(res => {
    //         alert(res.data.message)
    //         setLoginUser(res.data.user)
    //         history.push("/")
    //     })
    // }

        return (
            <form className ="container"  >
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control"   name = "email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"   name = "password"  placeholder="Enter password" />
                </div>

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                <button type="submit"   className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <div className="button">Register</div>
            </form>
        );
}

// function login(){
//     e.preventDefault();
//     let request = {
//         email : document.getElementById('email').value,
//         password : document.getElementById('password').value

//     }
//     axios.post('http://localhost:3000/login',request)
//     .then(resp => {
//         alert(resp.data.message);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }



  export default Login;

// class Login extends React.Component{
//   render(){
//     return(
//       <div id="loginform">
//         <FormHeader title="Login" />
//         <Form />
//         <OtherMethods />
//       </div>
//     )
//   }
// }

// const FormHeader = props => (
//     <h2 id="headerTitle">{props.title}</h2>
// );


// const Form = props => (
//    <div>
//      <FormInput description="Username" placeholder="Enter your username" type="text" />
//      <FormInput description="Password" placeholder="Enter your password" type="password"/>
//      <FormButton title="Log in"/>
//    </div>
// );

// const FormButton = props => (
//   <div id="button" class="row">
//     <button>{props.title}</button>
//   </div>
// );

// const FormInput = props => (
//   <div class="row">
//     <label>{props.description}</label>
//     <input type={props.type} placeholder={props.placeholder}/>
//   </div>  
// );

// const OtherMethods = props => (
//   <div id="alternativeLogin">
//     <label>Or sign in with:</label>
//     <div id="iconGroup">
//       <Facebook />
//       <Twitter />
//       <Google />
//     </div>
//   </div>
// );

// const Facebook = props => (
//   <a href="#" id="facebookIcon"></a>
// );

// const Twitter = props => (
//   <a href="#" id="twitterIcon"></a>
// );

// const Google = props => (
//   <a href="#" id="googleIcon"></a>
// );

// export default Login;