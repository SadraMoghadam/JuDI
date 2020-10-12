import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps} from "react-router";
import "../BasePage.css"

const Header: React.FC = () => {
    return(
        <div>
            <div className="App-header-judi">
                JuDI
            </div>
            <div className="App-header">
                <div className="Header-titles">خانه</div>
                <div className="Header-titles">درباره ی سایت</div>
                <div className="Header-titles">درباره ما</div>
            </div>
        </div>
    );
};



export default Header;