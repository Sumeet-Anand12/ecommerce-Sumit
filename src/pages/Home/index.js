import React from 'react'
import './style.css';
import SliderBanner from './Slider/index';
import CatSlider from '../../components/catSlider';
import Banners from '../../components/banners';
import Product from '../../components/product';
import Banner4 from '../../assets/images/banner4.jpg';
import Slider from "react-slick";
import TopProducts from './TopProducts/index';
import NewsletterImg from '../../assets/images/newsletter.png';
import Newsletter from '../../components/newsletter';





const Home  =() => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows:true,
    autoplay:3000,
};
  return (
    <>
      <SliderBanner/>
      <CatSlider/>
      <Banners/>
      
      <section className='homeProducts'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center justify-content-between '>
                        <h2 className='hd mb-0 mt-0 res-full'>Popular Products</h2>
                            <ul className='list list-inline ml-auto filterTab mb-0 res-full'>
                              
                              <li className='list-inline-item'>
                                <a className='cursor'>All</a>
                              </li>
                              <li className='list list-inline-item'>
                                <a className='cursor'>Milks & Diaries</a>
                              </li>
                              <li className='list list-inline-item'>
                                <a className='cursor'>Cofees & Teas</a>
                              </li>
                              <li className='list list-inline-item'>
                                <a className='cursor'>Pet Foods</a>
                              </li>
                              <li className='list list-inline-item'>
                                <a className='cursor'>Meats</a>
                              </li>
                              <li className='list list-inline-item'>
                                <a className='cursor'>Vegetables</a>
                              </li>
                            </ul>
                      </div>

                        <div className='row productRow'>

                          <div className='item'>
                            <Product tag="sale"/>
                          </div>
                          <div className='item'>
                            <Product tag="hot" />
                          </div>
                          <div className='item'>
                            <Product tag="new" />
                          </div>
                          <div className='item'>
                            <Product tag="best" />
                          </div>
                          <div className='item'>
                            <Product tag="new" />
                          </div>
                          <div className='item'>
                            <Product tag="best" />
                          </div>
                          <div className='item'>
                            <Product tag="new" />
                          </div>
                          <div className='item'>
                            <Product tag="best" />
                          </div>
                          <div className='item'>
                            <Product tag="new" />
                          </div>
                          <div className='item'>
                            <Product tag="best" />
                          </div>
                          <div className='item'>
                            <Product tag="Sale" />
                          </div>
                          <div className='item'>
                            <Product />
                          </div>
                       </div>
                </div>

      </section>


      <section className='homeProducts homeProductsRow2 mt-0'>

                <div className='container-fluid'>
                    <div className='d-flex align-items-center justify-content-between '>
                        <h2 className='hd mb-0 mt-0 res-full'>Daily best Sells</h2>
                            <ul className='list list-inline ml-auto filterTab mb-0 res-full'>
                              
                              <li className='list-inline-item'>
                                <a className='cursor'>Featured</a>
                              </li>
                              <li className='list list-inline-item'>
                                <a className='cursor'>Popular</a>
                              </li>
                              <li className='list list-inline-item'>
                                <a className='cursor'>New Added</a>
                              </li>
                            </ul>
                      </div>
                      <br/>

                      <div className='row'>
                            <div className='col-md-3 pr-3 res-hide'>
                                <img src={Banner4} className='w-100' />
                            </div>

                            <div className='col-md-9 homeSlider'>
                            <Slider {...settings} className='prodSlider'>   
                                                    
                            <div className='item'>
                             <Product tag="sale"/>
                            </div>
                            <div className='item'>
                             <Product tag="hot"/>
                            </div>
                            <div className='item'>
                             <Product tag="new"/>
                            </div>
                            <div className='item'>
                             <Product tag="hot"/>
                            </div>
                            <div className='item'>
                             <Product tag="sale"/>
                            </div>
                            <div className='item'>
                             <Product tag="best"/>
                            </div>
                            <div className='item'>
                             <Product tag="new"/>
                            </div>
                            <div className='item'>
                             <Product tag="sale"/>
                            </div>
                
                          </Slider>

                            </div>
                        </div>
                       
                </div>

      </section>

      <section className='topProductsSection'>
        <div className='container-fluid'>
          <div className='row'>
          <div className='col'>
               <TopProducts title="Top Selling" />
          </div>

            <div className='col'>
                <TopProducts title="Trending Products" />
            </div>

            <div className='col'>
                <TopProducts title="Recently added" />
            </div>

            <div className='col'>
                <TopProducts title="Top Rated" />
            </div>

          </div>
        </div>
      </section>

     



    </>
  )
}

export default Home;
