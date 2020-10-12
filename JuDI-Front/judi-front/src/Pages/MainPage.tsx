import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";

export const menuSectionRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const aboutUsRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const contactUsRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const signinRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
export const signupRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()


class MainPage extends React.Component<RouteComponentProps> {

    componentWillMount = async () => {
        window.scrollTo(0, 0)
    }


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <Header />
                {/** END nav  **/}

                {/** footer **/}
                <Footer/>


                {/** loader **/}
                <Loader/>

            </div>
        );
    }
}


export default MainPage;