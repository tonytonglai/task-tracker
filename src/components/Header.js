// import React from 'react' This used to be necessary. No longer!
import Button from "./Button"
import { useLocation } from 'react-router-dom'

// const class can either return const Component = (props) => {}, or you can DESTRUCTURE
// and return const Component = ({propsItem}) => {}
const Header = ({title, toggleAdd, showAdd}) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1> 
            {location.pathname === "/" && <Button 
                color={showAdd ? "red" : "green"}
                text={showAdd ? "Close" : "Add"}
                onClick={() => toggleAdd()}
            />}
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