import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className = "portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Featured</li>
                <li>Featured</li>
                <li>Featured</li>
                <li>Featured</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="" alt="" />
                    <h3>Webite/App</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Webite/App</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Webite/App</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Webite/App</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Webite/App</h3>
                </div>
            </div>
        </div>
    )
}
