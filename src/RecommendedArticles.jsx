import RAImage1 from "./assets/images/image-retro-pcs.jpg";
import RAImage2 from "./assets/images/image-top-laptops.jpg";
import RAImage3 from "./assets/images/image-gaming-growth.jpg";

function RecommendedArticle () {


    return (
        <section className="recommended-articles">
                <article className="recommended-article">
                    <div className="ra-image-wrapper">
                        <img className="ra-image" src={RAImage1} alt="article image" />
                    </div>
                    <div className="ra-content-container">
                        <p className="ra-number">01</p>
                        <h2>Reviving Retro PCs</h2>
                        <p className="ra-content">What happens when old PCs are given modern upgrades?</p>
                    </div>
                </article>
                <article className="recommended-article">
                    <div className="ra-image-wrapper">
                        <img className="ra-image" src={RAImage2} alt="article image" />
                    </div>
                    <div className="ra-content-container">
                        <p className="ra-number">02</p>
                        <h2>Top 10 Laptops of 2022</h2>
                        <p className="ra-content">Our best picks for various needs and budgets.</p>
                    </div>
                </article>
                <article className="recommended-article">
                    <div className="ra-image-wrapper">
                        <img className="ra-image" src={RAImage3} alt="article image" />
                    </div>
                    <div className="ra-content-container">
                        <p className="ra-number">03</p>
                        <h2>The Growth of Gaming</h2>
                        <p className="ra-content">How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </article>
            </section>
    )
}

export default RecommendedArticle;