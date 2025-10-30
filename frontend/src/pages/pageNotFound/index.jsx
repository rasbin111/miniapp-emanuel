import { Link } from "react-router"

import "./styles.css"

const PageNotFound = () => {
    return (
        <div className='not-found-main'>
            <h1>404 | Not Found </h1>
            <p> You seem lost. Please visit <Link to="/"> Home </Link> </p>
        </div>
    )
}

export default PageNotFound