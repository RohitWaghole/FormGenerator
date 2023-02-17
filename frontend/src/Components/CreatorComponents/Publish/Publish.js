import React from "react";
import Navbar from "../Navbar/Navbar";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "./Publish.css";
const Publish = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { email } = useParams();
    const hostname = window.location.hostname;
    const port = window.location.port;
    const formID = location.state.formID;
    const url = `http://${hostname}:${port}/userend/${formID}`;
    return (
        <div>      <Navbar email={email} />
            <div className="publish-form-root">
                <h1 className="publish-margin publish-heading">Published!</h1>
                <div>
                    <h2 className="publish-margin">Generated Link :</h2>
                    <h3 className="publish-margin" style={{ color: "blue", cursor: "pointer" }}>{url}</h3>
                    <button className="publish-margin  publish-btn" onClick={() => {
                        navigator.clipboard.writeText(url);
                    }}>
                        Copy to clipboard
                    </button>
                </div>
            </div>
        </div>);
};
export default Publish;