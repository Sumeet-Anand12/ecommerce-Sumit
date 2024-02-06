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
// import Sidebar from '../../components/Sidebar/index';
import Product from '../../components/product';


const DetailsPage = () => {

    const [zoomInage, setZoomImage] = useState('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg');

    const [bigImageSize, setBigImageSize] = useState([1500, 1500]);
    const [smlImageSize, setSmlImageSize] = useState([150, 150]);
    const [activeSize, setActiveSize] = useState(0);
    const [inputValue, setinputValue] = useState(1);
    const [activeTabs, setActiveTabs] = useState(2);


    var settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        // autoplay:true
    };




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


    var related = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    };

   const zoomSlider = useRef();
   const zoomSliderBig = useRef();

    const goto = (url,index) => {

        setTimeout(()=>{
            setZoomImage(url);
        },200);
        
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
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
                   <div className='row'>
                                {/* Product Zoom code Start here */}

                                <div className='col-md-5 '>
                                    <div className='productZoom'>
                                    <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>

                               <div className='item'>
                                    <InnerImageZoom zoomType="hover" zoomScale={1}	src={`${zoomInage}?im=Resize=(${bigImageSize[0]},${bigImageSize[0]})`} />
                               </div>
                               <div className='item'>
                                    <InnerImageZoom zoomType="hover" zoomScale={1}	src={`${zoomInage}?im=Resize=(${bigImageSize[0]},${bigImageSize[0]})`} />
                               </div>
                               <div className='item'>
                                    <InnerImageZoom zoomType="hover" zoomScale={1}	src={`${zoomInage}?im=Resize=(${bigImageSize[0]},${bigImageSize[0]})`} />
                               </div>
                               <div className='item'>
                                    <InnerImageZoom zoomType="hover" zoomScale={1}	src={`${zoomInage}?im=Resize=(${bigImageSize[0]},${bigImageSize[0]})`} />
                               </div>
                                    
                                  </Slider>
                                    </div>

                                    <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                                    <div className='item w-100'>
                                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} className='w-100' onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg',0)}/>
                                  </div>
                                    <div className='item'>
                                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}className='w-100' onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg',1)} />
                                  </div>
                                    <div className='item'>
                                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} className='w-100' onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg',2)}/>
                                  </div>
                                    <div className='item'>
                                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} className='w-100' onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg',3)} />
                                  </div>
                                    <div className='item'>
                                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} className='w-100' onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg',4)} />
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
                         <p> 
                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.
                           </p>
                         <p> 
                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.
                           </p>
                         <p> 
                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.
                           </p>
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

                   <div className='card mt-5 p-5 detailsPageTabs'>
                        <div className='customTabs'>

                            <ul className='list list-inline'>
                                 <li className='list list-inline-item'>
                                    
                                        <Button className={`${activeTabs ===0 && 'active'}`} onClick={()=>setActiveTabs(0)}>
                                            Description
                                        </Button>
                                   </li>
                                    <li className='list list-inline-item'>
                                        <Button className={`${activeTabs ===1 && 'active'}`} onClick={()=>setActiveTabs(1)}>
                                        Additional info
                                        </Button>
                                    </li>
                                    <li className='list list-inline-item'>
                                        <Button className={`${activeTabs ===2 && 'active'}`} onClick={()=>setActiveTabs(2)}>
                                        Reviews (3)
                                        </Button>
                                    </li>                            

                            </ul>
                            <br/>

                            {
                                activeTabs === 0 &&
                                <div className='tabContent'>

                                <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p>
                                <p>
                                Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                                </p>
                                <ul>
                                    <li className='d-flex align-items-center ml-auto'>
                                      Type Of Packing
                                      <span className='marginRight'>Bottle</span>
                                    </li>
                                    <li className='d-flex align-items-center ml-auto'>
                                      Type Of Packing
                                      <span className='marginRight'>Bottle</span>
                                    </li>
                                    <li className='d-flex align-items-center ml-auto'>
                                      Type Of Packing
                                      <span className='marginRight'>Bottle</span>
                                    </li>
                                    <li className='d-flex align-items-center ml-auto'>
                                      Type Of Packing
                                      <span className='marginRight'>Bottle</span>
                                    </li>
                                    
                                </ul>

                                <br/>

                                <h2>Packaging & Delivery</h2>
                                <hr className=''/>
                                <p>
                                Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.
                                </p>
                                <p>
                                Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.
                                </p>


                                <br/>

                                <h2>Suggested Use</h2>
                                <hr className=''/>
                                <p>
                                Refrigeration not necessary.
                                </p>
                                <p>
                                   Stir before serving                                
                                </p>




                            </div>
                               

                            }


                        {
                             activeTabs === 1 &&
                             <div className='tabContent'>
                                <div className='table-responsive'>
                                    <table className='table table-bordered'>
                                    <tbody>
                                                        <tr class="stand-up">
                                                            <th>Stand Up</th>
                                                            <td>
                                                                <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="folded-wo-wheels">
                                                            <th>Folded (w/o wheels)</th>
                                                            <td>
                                                                <p>32.5″L x 18.5″W x 16.5″H</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="folded-w-wheels">
                                                            <th>Folded (w/ wheels)</th>
                                                            <td>
                                                                <p>32.5″L x 24″W x 18.5″H</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="door-pass-through">
                                                            <th>Door Pass Through</th>
                                                            <td>
                                                                <p>24</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="frame">
                                                            <th>Frame</th>
                                                            <td>
                                                                <p>Aluminum</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="weight-wo-wheels">
                                                            <th>Weight (w/o wheels)</th>
                                                            <td>
                                                                <p>20 LBS</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="weight-capacity">
                                                            <th>Weight Capacity</th>
                                                            <td>
                                                                <p>60 LBS</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="width">
                                                            <th>Width</th>
                                                            <td>
                                                                <p>24″</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="handle-height-ground-to-handle">
                                                            <th>Handle height (ground to handle)</th>
                                                            <td>
                                                                <p>37-45″</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="wheels">
                                                            <th>Wheels</th>
                                                            <td>
                                                                <p>12″ air / wide track slick tread</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="seat-back-height">
                                                            <th>Seat back height</th>
                                                            <td>
                                                                <p>21.5″</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="head-room-inside-canopy">
                                                            <th>Head room (inside canopy)</th>
                                                            <td>
                                                                <p>25″</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="pa_color">
                                                            <th>Color</th>
                                                            <td>
                                                                <p>Black, Blue, Red, White</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="pa_size">
                                                            <th>Size</th>
                                                            <td>
                                                                <p>M, S</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                        
                                    </table>

                                </div>

                            </div>
                           

                        }

                       {
                        activeTabs === 2 &&
                     <div className='tabContent'>                       
                        <div className='row'>
                            <div className='col-md-8'>
                                <h3>Customer questions & answers</h3>
                                <br/>

                                <div className='card p-3 flex-row mb-5'> 

                                <div className='image'>
                                        <div className='rounded-circle reviewCard'>
                                            <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png' />

                                        </div>

                                        <span className='text-g d-block text-center'>Sienna </span>

                                </div>

                                <div className='info pl-5 marginLeft'>
                                    <h5 className='text-light d-flex align-items-center justify-content-between'>
                                        December 4, 2022 at 3:12 pm 
                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readonly/>
                                    </h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?
                                    </p>


                                </div>
                                
                                
                                </div>
                                <div className='card p-3 flex-row mt-5'> 

                                <div className='image'>
                                        <div className='rounded-circle reviewCard'>
                                            <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png' />

                                        </div>

                                        <span className='text-g d-block text-center'>Sienna </span>

                                </div>

                                <div className='info pl-5 marginLeft'>
                                    <h5 className='text-light d-flex align-items-center justify-content-between'>
                                        December 4, 2022 at 3:12 pm 
                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readonly/>
                                    </h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?
                                    </p>


                                </div>
                                
                                
                                </div>
                                <div className='card p-3 flex-row mt-5'> 

                                <div className='image'>
                                        <div className='rounded-circle reviewCard'>
                                            <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png' />

                                        </div>

                                        <span className='text-g d-block text-center'>Sienna </span>

                                </div>

                                <div className='info pl-5 marginLeft'>
                                    <h5 className='text-light d-flex align-items-center justify-content-between'>
                                        December 4, 2022 at 3:12 pm 
                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readonly/>
                                    </h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?
                                    </p>


                                </div>
                                
                                
                                </div>
                                <div className='card p-3 flex-row mt-5'> 

                                <div className='image'>
                                        <div className='rounded-circle reviewCard'>
                                            <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png' />

                                        </div>

                                        <span className='text-g d-block text-center'>Sienna </span>

                                </div>

                                <div className='info pl-5 marginLeft'>
                                    <h5 className='text-light d-flex align-items-center justify-content-between'>
                                        December 4, 2022 at 3:12 pm 
                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readonly/>
                                    </h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?
                                    </p>


                                </div>
                                
                                
                                </div>
                                <br/>
                                <br/>

                                <form className='reviewForm'>
                                    <h4>Add a review</h4>
                                    <div className='form-group'>
                                        <textarea className='form-control' placeholder='Write Comment'>

                                        </textarea>

                                    </div>

                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <input type='text' className='form-control' placeholder='Name'/>

                                            </div>

                                        </div>

                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <input type='text' className='form-control'placeholder='Email' />

                                            </div>

                                        </div>

                                        <div className='form-group'>
                                                <input type='text' className='form-control' placeholder='Website' />

                                            </div>
                                        <div className='form-group'>
                                                <Button className='btn-g btn-lg'>Submit Review</Button>

                                            </div>

                                    </div>
                                </form>





                            </div>
                           
                            <div className='col-md-3 marginLeft'>

                                <h4>Customer reviews</h4>
                                <div className='d-flex align-items-center mt-3'>

                                <Rating name="half-rating-read" defaultValue={4.8} precision={0.5} readonly/>
                                    <strong className='marginLeft'>4.8 out of 5</strong>

                                </div>

                                <div className='progressBarBox d-flex align-items-center'>
                                    <span style={{marginRight:'20px'}}>5 Star</span>
                                    <div className='progress' style={{width:'80%',height:'25px'}}>
                                        <div className='progress-bar bg-success' style={{width:'70%',height:'25px'}}>70%

                                        </div>

                                    </div>

                                </div>
                                <div className='progressBarBox d-flex align-items-center'>
                                    <span style={{marginRight:'20px'}}>4 Star</span>
                                    <div className='progress' style={{width:'80%',height:'25px'}}>
                                        <div className='progress-bar bg-success' style={{width:'25%',height:'25px'}}>25%

                                        </div>

                                    </div>

                                </div>
                                <div className='progressBarBox d-flex align-items-center'>
                                    <span style={{marginRight:'20px'}}>3 Star</span>
                                    <div className='progress' style={{width:'80%',height:'25px'}}>
                                        <div className='progress-bar bg-success' style={{width:'45%',height:'25px'}}>45%

                                        </div>

                                    </div>

                                </div>
                                <div className='progressBarBox d-flex align-items-center'>
                                    <span style={{marginRight:'20px'}}>2 Star</span>
                                    <div className='progress' style={{width:'80%',height:'25px'}}>
                                        <div className='progress-bar bg-success' style={{width:'65%',height:'25px'}}>65%

                                        </div>

                                    </div>

                                </div>
                                <div className='progressBarBox d-flex align-items-center'>
                                    <span style={{marginRight:'20px'}}>1 Star</span>
                                    <div className='progress' style={{width:'80%',height:'25px'}}>
                                        <div className='progress-bar bg-success' style={{width:'85%',height:'25px'}}>85%

                                        </div>

                                    </div>

                                </div>

                               

                            </div>


                        </div>

                     </div>

                       }
                        
                        </div>
                  </div>

                  <div className='relatedProducts pt-5 pb-4'>
                  <h2 className='hd mb-0 mt-0 res-full'>Related Product</h2>
                  <br/>

                 
                            <Slider {...related} className='prodSlider'>   
                                                    
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

               
                </section>
  )
}

export default DetailsPage;
