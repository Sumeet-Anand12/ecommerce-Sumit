import React from 'react';
import './nav.css';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import { Link } from 'react-router-dom';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';




const Nav = () => {
  return (
    <div className='nav'>

      <div className='container-fluid'>

        <div className='row position-relative'>

          <div className='col-sm-2 part1'>
          <Button className='bg-g text-white catTab res-hide mt-3'> <GridViewIcon/> &nbsp;Brouse All Categories <KeyboardArrowDownIcon className='arrow' /> </Button>

           </div>

           <div className='col-sm-8 part2 position-static'>
                <nav>
                  <ul className='list list-inline mb-0'>
                  <li className='list-inline-item'>
                    <Button><Link to='/'>Home</Link></Button>
                  </li>
                  <li className='list-inline-item'>
                    <Button><Link to='/about'>About</Link></Button>
                  </li>
                  <li className='list-inline-item'>
                    <Button><Link to='/shop' > Shop</Link></Button>
                  </li>
                  <li className='list-inline-item'>
                    <Button><Link to='/vendor'>Vendor</Link></Button>
                  </li>
                  <li className='list-inline-item position-static'>
                    <Button><Link to='/megaMenu'>Mega Menu <KeyboardArrowDownIcon className='arrow' /></Link></Button>
                   <div className='dropdown_menu megaMenu w-100'>

                   <div className='row'>
                      <div className='col'>
                        <h4 className='text-g'> Fruit & vegitable</h4>
                        <ul>
                          <li>
                            <Link to=""> Meat & Poultry</Link>
                          </li>
                          <li><Link to=""> Fresh Vegitables</Link>
                          </li>
                          <li><Link to=""> Herbs & seasioning</Link></li>
                          <li><Link to=""> Cuts & Sprouts</Link></li>
                          <li><Link to=""> Exotic Fruits & veggies</Link></li>
                          <li><Link to=""> Packaged product</Link></li>                     
                        </ul>

                      </div>
                      <div className='col'>
                        <h4 className='text-g'> BreakFast & Dairy</h4>
                        <ul>
                          <li>
                            <Link to=""> Meat & Poultry</Link>
                          </li>
                          <li><Link to=""> Fresh Vegitables</Link>
                          </li>
                          <li><Link to=""> Herbs & seasioning</Link></li>
                          <li><Link to=""> Cuts & Sprouts</Link></li>
                          <li><Link to=""> Exotic Fruits & veggies</Link></li>
                          <li><Link to=""> Packaged product</Link></li>                     
                        </ul>

                      </div>
                      <div className='col'>
                        <h4 className='text-g'> Meat & SeaFood</h4>
                        <ul>
                          <li>
                            <Link to=""> Meat & Poultry</Link>
                          </li>
                          <li><Link to=""> Fresh Vegitables</Link>
                          </li>
                          <li><Link to=""> Herbs & seasioning</Link></li>
                          <li><Link to=""> Cuts & Sprouts</Link></li>
                          <li><Link to=""> Exotic Fruits & veggies</Link></li>
                          <li><Link to=""> Packaged product</Link></li>                     
                        </ul>

                      </div>
                      <div className='col'>
                          <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png" className='w-100' />
                      </div>

                    </div>
                     

                   </div>

                  </li>
                  <li className='list-inline-item'>
                    <Button><Link to='/blog'>Blog</Link></Button>
                  </li>
                  <li className='list-inline-item'>
                    <Button><Link to='/pages'>Pages <KeyboardArrowDownIcon className='arrow' /></Link></Button>
                  <div className='dropdown_menu'>
                  <ul>
                      <li>
                        <Button><Link to='/about'>About Us</Link></Button>
                      </li>                    
                      <li>
                        <Button><Link to='/contact'>Contact</Link></Button>
                      </li>                    
                      <li>
                        <Button><Link to='/about'>My Account</Link></Button>
                      </li>                    
                      <li>
                        <Button><Link to='/about'>Login</Link></Button>
                      </li>                    
                      <li>
                        <Button><Link to='/about'>Register</Link></Button>
                      </li>                    
                      <li>
                        <Button><Link to='/about'>Forget Password</Link></Button>
                      </li>                    
                      <li>
                        <Button><Link to='/about'>Reset Password</Link></Button>
                      </li>                    
                      <li>
                        <Button><Link to='/about'>Purchase Guide</Link></Button>
                      </li>                    
                      <li>
                        <Button><Link to='/about'>Privcy Policy</Link></Button>
                      </li>                    
                      <li>
                        <Button><Link to='/about'>Terms Of  Service</Link></Button>
                      </li>                    
                      <li>
                        <Button><Link to='/about'>404 page</Link></Button>
                      </li> 
                  </ul>                   

                  </div>
                 
                  </li>
                  <li className='list-inline-item'>
                    <Button><Link to='/contact'>Contact  </Link></Button>
                  </li>
                  </ul>

                </nav>
            
            </div>

            <div className='col-sm-2 part3 d-flex align-items-center'>

              <div className='phNo d-flex align-items-center'>
                <span> <HeadphonesOutlinedIcon/></span>

                <div className='info ml-3'>
                 <h3 className='text-g mb-0'> 19900-8770 </h3>
                 <p className='mb-0'>24/7 Support center</p>

                </div>
              </div>
            
            </div>

        </div>

      </div>
       

      
    </div>
  )
}

export default Nav;
