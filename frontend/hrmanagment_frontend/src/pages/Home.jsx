import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

function Home() {
    return (
        <div>
            <div id="carouselExample" className="carousel carousel-overlay slide">
                <div className="carousel-inner rounded-5">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="Slide 3" />
                    </div>
                </div>
                <div className="carousel-overlay-controls">
                    <div>
                        <button className="btn-icon btn-sm btn-subtle theme-secondary" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-icon-prev" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="btn-icon btn-sm btn-subtle theme-secondary" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-icon-next" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;