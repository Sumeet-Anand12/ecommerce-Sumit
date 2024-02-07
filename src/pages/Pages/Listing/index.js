import React, { useState} from 'react';
import { Link, useParams } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar'
import Product from '../../../components/product'
// import { Button } from 'bootstrap'
import { Button } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';


const Listing = () => {
    // const { id } = useParams();

    const [isOpenDropDown, setisOpenDropDown] = useState(false);
    const [isOpenDropDown2, setisOpenDropDown2] = useState(false);
     const [showPerPage, setHhowPerPage] = useState(3);
  return (
<section className='listingPage'>

<   div className='container-fluid'>
            <div className='breadcrumb flex-column'>
                <h1>Snack</h1>

                <ul className='list list-inline mb-0'>
                                <li className='list-inline-item'>
                                    <Link to={''}>Home </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to={''} className='text-capitalize'>Shop </Link>
                                </li>
                                {
                                   
                                    <li className='list-inline-item'>
                                        <Link to={''} class="text-capitalize"> Snack</Link>
                                    </li>
                                }
                            </ul>

            </div>

            <div className='listingData'>
                <div className='row'>
                    <div className='col-md-3 sidebarWrapper'>

                 <Sidebar/>

                    </div>

                    <div className='col-md-9 rightContent homeProducts pt-0'>
                    <div className='topStrip d-flex align-items-center justify-content-between'>
                                    <p className='mb-0'>We found <span className='text-success'>29</span> items for you!</p>
                                    <div className='ml-auto d-flex align-items-center'>
                                        <div className='tab_ position-relative space'>
                                            <Button className='btn_ ' onClick={() => setisOpenDropDown(!isOpenDropDown)}><GridViewOutlinedIcon /> Show: {showPerPage * 5}</Button>
                                            {
                                                isOpenDropDown !== false &&
                                                <ul className='dropdownMenu'>
                                                    <li>
                                                        <Button className='align-items-center'
                                                            onClick={() => {
                                                                setisOpenDropDown(false)
                                                                setHhowPerPage(1);
                                                            }}
                                                        >
                                                            5
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button className='align-items-center'
                                                            onClick={() => {
                                                                setisOpenDropDown(false)
                                                                setHhowPerPage(2);
                                                            }}
                                                        >
                                                            10
                                                        </Button>
                                                    </li>

                                                    <li>
                                                        <Button className='align-items-center'
                                                            onClick={() => {
                                                                setisOpenDropDown(false)
                                                                setHhowPerPage(3);
                                                            }}
                                                        >
                                                            15
                                                        </Button>
                                                    </li>

                                                    <li>
                                                        <Button className='align-items-center'
                                                            onClick={() => {
                                                                setisOpenDropDown(false)
                                                                setHhowPerPage(4);
                                                            }}
                                                        >
                                                            20
                                                        </Button>
                                                    </li>
                                                </ul>
                                            }
                                        </div>
                                        <div className='tab_ ml-3 position-relative'>
                                            <Button className='btn_' onClick={() => setisOpenDropDown2(!isOpenDropDown2)}><FilterListOutlinedIcon /> Sort by: Featured </Button>
                                            {
                                                isOpenDropDown2 !== false &&
                                                <ul className='dropdownMenu'>
                                                    <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}>Featured</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}> Price: Low to High</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}> Price: High to Low</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}> Release Date</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}> Avg. Rating</Button></li>
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                </div>

                            <div className='productRow'>
                                
                             <div className='item pt-0'>
                             <Product/>
                             </div>
                             <div className='item pt-0'>

                             <Product/>
                             </div>
                             <div className='item pt-0'>

                             <Product/>
                             </div>
                             <div className='item pt-0'>

                             <Product/>
                             </div>
                             <div className='item pt-0'>

                             <Product/>
                             </div>
                             <div className='item pt-0'>

                             <Product/>
                             </div>
                             <div className='item pt-0'>

                             <Product/>
                             </div>
                             <div className='item pt-0'>

                             <Product/>
                             </div>
                             <div className='item pt-0'>

                             <Product/>
                             </div>
                             <div className='item pt-0'>

                             <Product/>
                             </div>
                             <div className='item pt-0'>

                             <Product/>
                             </div>
                             <div className='item pt-0'>

                             <Product/>
                             </div>
                             <div className='item pt-0'>

                             <Product/>
                             </div>
                             <div className='item pt-0'>

                             <Product/>
                             </div>
                             <div className='item pt-0'>

                             <Product/>
                             </div>

                            </div>


                    </div>


                </div>


            </div>

    </div>



    </section>

  )
}

export default Listing
