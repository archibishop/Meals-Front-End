import React from 'react';
import dish from '../../img/dish.svg';
import food from '../../img/food.svg';
import NavBar from '../nav/NavBar';
import rolex from '../../img/rolex.jpg';
import lasagna from '../../img/lasagna.jpg';
import matooke from '../../img/matooke.jpg';
import Footer from '../footer/Footer';


function LandingPage () {
    return (
        <div>
            <NavBar />

            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 font-weight-normal">Fast Foods</h1>
                    <p class="lead font-weight-normal">We deliver the bests foods and beverages around town. We ensure our customer has the best experience while having their meals.</p>
                    <a class="btn btn-outline-secondary" href="#">Register</a>
                </div>
                <div class="product-device  d-none d-md-block"><img src={dish} className="App-logo" alt="logo" /></div>
                <div class="product-device product-device-2  d-none d-md-block"><img src={dish} className="App-logo" alt="logo" /></div>
            </div>

            {/* <!-- START THE FEATURETTES --> */}
            <div class="container marketing">
                <hr class="featurette-divider"/>

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
                        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div class="col-md-5">
                        <img src={rolex} alt="logo" />
                    </div>
                </div>

                <hr class="featurette-divider"/>

                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
                        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img src={lasagna} alt="logo" />
                    </div>
                </div>

                <hr class="featurette-divider"/>

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
                        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div class="col-md-5">
                        <img src={matooke} alt="logo" />
                    </div>
                </div>

                <hr class="featurette-divider"/>
            </div>
            {/* <!-- /END THE FEATURETTES --> */}

            <Footer />
        </div>
    );
}

export default LandingPage;
