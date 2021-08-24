import React from "react";


export default function Heading({children , title, styleClass })
{
    return(
        <header>
            <div className = "container-fluid">
                <div className = {`row align items-center ${styleClass}`} style = {{paddingTop : "200px"}}>
                    <div className = "col text-center ">
                        <h1 className= "text-dark text-uppercase display-3 letter-spacing text-slanted ">
                            {title}
                        </h1>
                        {children}
                    </div>
                </div>
            </div>
        </header>
    );
};


Heading.defaultProps = {
    title : 'default title',
    styleClass : "header-hero"
};