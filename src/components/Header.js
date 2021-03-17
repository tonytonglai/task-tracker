// import React from 'react' This used to be necessary. No longer!
import Button from "./Button"

// const class can either return const Component = (props) => {}, or you can DESTRUCTURE
// and return const Component = ({propsItem}) => {}
const Header = ({title}) => {
    
    const onClick = (e) => {
        console.log("peepeee")
    }

    return (
        <header className="header">
            <h1>{title}</h1> 
            <Button color="green" text="Add" onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title : "Task Tracker",
}

// Header.propTypes = {
//     title : PropTypes.string,
// }

export default Header