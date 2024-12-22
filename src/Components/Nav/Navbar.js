import react from "react";
import './Navbar.css'

const Navbar = () => {
    return(
        <div className="body">
            <div className="left-side">
                <div className="heading"> <b>Abstract </b></div>
                <div className="sub-heading"> | Help Center</div>
            </div>
            <div className="buttons">
                <button className="btn-request">Submit a request</button>
                <button className="btn-signin">Sign in</button> 
            </div>
        </div>
    );
}
export default Navbar;