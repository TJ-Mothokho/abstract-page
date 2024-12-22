import react from "react";
import './Main.css'

const Main = () =>{
    return(
        <main>
            <div className="row">
                <div className="card">
                    <b className="card-heading">Branch</b>
                    <div className="description">
                        Abstract Branch lets you manage, version, and document your designs in one place.
                    </div>
                    <a href="#">Learn More</a>
                </div>

                <div className="card">
                    <b className="card-heading">Manage your account</b>
                    <div className="description">
                        Configure your account settings, such as your email, profile details, and password.
                    </div>
                    <a href="#">Learn More</a>
                </div>
            </div>

            <div className="row">
                <div className="card">
                    <b className="card-heading">Manage organizations, teams, and projects</b>
                    <div className="description">
                        Use Abstract organizations, teams, and projects to organize your people and your work.
                    </div>
                    <a href="#">Learn More</a>
                </div>

                <div className="card">
                    <b className="card-heading">Manage billing</b>
                    <div className="description">
                        Change subscriptions and payment details.
                    </div>
                    <a href="#">Learn More</a>
                </div>
            </div>

            <div className="row">
                <div className="card">
                    <b className="card-heading">Authenticate to Abstract</b>
                    <div className="description">
                        Set up and configure SSO, SCIM, and Just-in-Time provisioning.
                    </div>
                    <a href="#">Learn More</a>
                </div>

                <div className="card">
                    <b className="card-heading">Abstract support</b>
                    <div className="description">
                        Get in touch with a human.
                    </div>
                    <a href="#">Learn More</a>
                </div>
            </div>
    </main>
    );
}
export default Main;