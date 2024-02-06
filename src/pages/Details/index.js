import React, { useRef, useState } from 'react'
import './style.css';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from "react-slick";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Sidebar from '../../components/Sidebar/index';


const DetailsPage = () => {

    const [zoomInage, setZoomImage] = useState('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg');

    const [bigImageSize, setBigImageSize] = useState([1500, 1500]);
    const [smlImageSize, setSmlImageSize] = useState([150, 150]);
    const [activeSize, setActiveSize] = useState(0);
    const [inputValue, setinputValue] = useState(1);


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows:true,
        // autoplay:true
    };
   const zoomSlider = useRef();

    const goto = (url) => {

        setZoomImage(url);
        // zoomSliderBig.current.slickGoTo(index);
    }

    const isActive = (index) => {
        setActiveSize(index);
    }

    const plus = () => {
        setinputValue(inputValue + 1)
    }

    const minus = () => {
        if (inputValue !== 1) {
            setinputValue(inputValue - 1)
        }
    }


  return (
    <section className="detailsPage mb-5">
               
                    
            <div className='breadcrumbWrapper mb-4'>
                <div className='container-fluid detailsContainer'>
                    <ul className="breadcrumb breadcrumb2 mb-0">
                        <li><Link>Home</Link>  </li>
                        <li><Link className='text-capitalize'>Vegetables </Link> </li>

                        <li><Link className='text-capitalize'>Seeds of Change Organic </Link> </li>
                        <li></li>
                    </ul>
                </div>

            </div>

                <div className='container-fluid'>
                   <div className='row pt-3 pb-3'>
                        <div className='col-md-9 leftPart'>
                            <div className='row'>
                                {/* Product Zoom code Start here */}

                                <div className='col-md-5 '>
                                    <div className='productZoom'>
                                    <InnerImageZoom zoomType="hover" zoomScale={1}	src={`${zoomInage}?im=Resize=(${bigImageSize[0]},${bigImageSize[0]})`}  />
                                    </div>
                                   
                                    <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                                    <div className='item w-100'>
                                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} className='w-100' onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg')}/>
                                  </div>
                                    <div className='item'>
                                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}className='w-100' onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg')} />
                                  </div>
                                    <div className='item'>
                                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} className='w-100' onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg')}/>
                                  </div>
                                    <div className='item'>
                                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} className='w-100' onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg')} />
                                  </div>
                                    <div className='item'>
                                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} className='w-100' onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg')} />
                                  </div>

                                    </Slider>



                                </div>

                                {/* Product Zoom code Start here */}


                {/* ProductInfo code Start here */}

                    <div className='col-md-7 productInfo'>

                        <h1>Seeds of Change Organic Quinoa, Brown</h1>
                        <div className='d-flex align-items-center'>
                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readonly/>
                         <span className='text-dark'>(32 reviews)</span>

                        </div>
                        <div className='priceSec d-flex align-items-center'>
                            <span className='text-g priceLarge'> $38</span>
                            <div className='Margin d-flex flex-column'>
                            <span className='text-org'>26%</span>
                            <span className='text-light oldPrice'>$52</span>

                            </div>

                        </div>
                         <p> 
                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.
                           </p>
                           <div className='productSize d-flex align-items-center'>
                            <span>Size/Weight:</span>
                            <ul className='list list-inline mb-0 Margin'>  
                             <li className='list list-inline-item'><a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={()=>isActive(0)}> 50 g </a> </li>
                             <li className='list list-inline-item'><a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={ ()=>isActive(1)}> 80 g </a> </li>
                             <li className='list list-inline-item'><a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={()=> isActive(2)}> 100 g </a> </li>
                             <li className='list list-inline-item'><a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={()=> isActive(3)}> 150 g </a> </li>
                        </ul>
                           </div>

                           <div className='addCartSection pt-4 pb-4 d-flex align-items-center'>

                            <div className='counterSec Margin'>
                                <input type='number' value={inputValue}></input>
                                <span className='arrow plus' onClick={plus}><KeyboardArrowUpIcon /></span>
                                <span className='arrow minus' onClick={minus}><KeyboardArrowDownIcon /></span>
                                
                            </div>
                            <div className='d-flex align-items-center'>

                            <Button className='btn-g btn-lg Margin addtocartbtn'><ShoppingCartOutlinedIcon /> Add to Cart</Button>

                            <Button className=' btn-lg addtocartbtn  Margin  wishlist btn-border'><FavoriteBorderOutlinedIcon /> </Button>
                                    <Button className=' btn-lg addtocartbtn Margin btn-border'><CompareArrowsIcon /></Button>
                         </div>
                     </div>

                    </div>
                    
                {/* ProductInfo code end here */}

                            </div>
                        </div>


                    <div className='col-md-3 rightPart sidebarWrapper'>

                      <Sidebar/>

                    </div>



                   </div>
                    
                </div>

               
                </section>
  )
}

export default DetailsPage;
