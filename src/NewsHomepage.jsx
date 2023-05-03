import Header from "./Header";
import MainContent from "./MainContent";
import { useState, useRef } from "react";


function NewsHomepage () {
    
    const [ isNavOpen, setIsNavOpen ] = useState(false);

    return (
        <div className="new-body">
            <Header setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen}/>
            <MainContent />
            <div className={`${isNavOpen === false ? "non-visible" : "visible"} non-focus-background`}></div>
        </div>
    )
}

export default NewsHomepage;