import HeroImage from "./assets/images/image-web-3-desktop.jpg";
import MobileHeroImage from "./assets/images/image-web-3-mobile.jpg";
import { useEffect, useState, useRef } from "react";

function MainArticle () {

    const macRef = useRef(null);

    return (
        <section ref={macRef} className="main-article-container">
                <article className="main-article">
                    <div className="article-image-wrapper">
                        <img className="article-image" src={HeroImage} alt="hero image of website" />
                        <img className="article-image-mobile" src={MobileHeroImage} alt="hero image of website" />
                    </div>
                    <div className="article-content-container">
                        <h1>The Bright Future of Web 3.0?</h1>
                        <div className="article-content">
                            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                            <button>READ MORE</button>
                        </div>
                    </div>
                </article>
                <div className="new-articles">
                    <h2>New</h2>
                    <article className="new-article">
                        <h3>Hydrogen VS Electric Cars</h3>
                        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </article>
                    <div className="horizontal-line"></div>
                    <article className="new-article">
                        <h3>The Downsides of AI Artistry</h3>
                        <p>What are the possible adverse effects of on-demand AI image generation?</p>
                    </article>
                    <div className="horizontal-line"></div>
                    <article className="new-article">
                        <h3>Is VC Funding Drying Up?</h3>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </article>
                </div>
        </section>
    )
}

export default MainArticle;