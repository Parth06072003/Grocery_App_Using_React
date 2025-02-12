import React,{ useEffect, useState } from "react";
import "./home.css";
import {Link} from 'react-router-dom';
import Homeproduct from './home_product'
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart,AiOutlineClose} from "react-icons/ai";
import {BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube} from "react-icons/bi";

const Home = ({addtocart})=> {

    const [newProduct, setNewProduct] =  useState([])
    const [featuredProduct, setFeaturdProduct] =  useState([])
    const [topProduct, setTopProduct] =  useState([])

    const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
    const [showDetail, setShowDetail] = useState(false)
    // Detail Page Data
    const [detail, setDetail] = useState([])
    //Showing Detail Box
    const detailpage = (product) => 
    {
        const detaildata = ([{product}])
        const productdetail = detaildata[0]['product']
        // console.log(productdetail)
        setDetail(productdetail)
        setShowDetail(true)
    }
    const closedetail = () => 
    {
        setShowDetail(false)
    }

    const filtercate = (x) => 
    {
      const filterproduct = Homeproduct.filter((curElm) => 
      {
        return curElm.type === x
      })
      setTrendingProduct(filterproduct)
    }
    //All Trending Product
    const allTrendingProduct = () =>
    {
      setTrendingProduct(Homeproduct)
    }
  
    //Product Type
    useEffect(() => 
    {
      productcategory()
    })
    const productcategory = () => 
    {
      // New Product
      const newcategory = Homeproduct.filter((x) => 
      {
        return x.type === 'new'
      })
      setNewProduct(newcategory)
  
      // Featured Product
      const featuredcategory = Homeproduct.filter((x) => 
      {
        return x.type === 'featured'
      })
      setFeaturdProduct(featuredcategory)
  
      // Top Product
      const topcategory = Homeproduct.filter((x) => 
      {
        return x.type === 'top'
      })
      setTopProduct(topcategory)
    }
  return (
    <>
         {
        showDetail ? 
        <>
        <div className='product_detail'>
            <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
            <div className='container'>
                <div className='img_box'>
                    <img src={detail.image} alt=''></img>
                </div>
                <div className='info'>
                    <h4># {detail.cat}</h4>
                    <h2>{detail.Name}</h2>
                    <p>{detail.info}</p>
                    <h3>RS:{detail.price}</h3>
                    <button onClick={() => addtocart (detail)}>Add To Cart</button>
                </div>
            </div>
        </div>
        </>
        : null
    }
      <div className="home">
        <div className="top_banner">
          <div className="contant">
            <h2>100% Natural</h2>
            <h3>30% off at your first odder</h3>
            <Link to="/shop" className="link">
              Shop Now
            </Link>
          </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <h2 onClick={() => allTrendingProduct ()}>trending product</h2>
                </div>
                <div className='cate'>
                  <h3 onClick={() => filtercate ('new')}>New</h3>
                  <h3 onClick={() => filtercate ('featured')}>Featured</h3>
                  <h3 onClick={() => filtercate ('top')}>top selling</h3>
                </div>
              </div>
              <div className='products'>
                <div className='container'>
                  {
                    trendingProduct.map((curElm) => 
                    {
                      return(
                        <>
                        <div className='box'>
                          <div className='img_box'>
                            <img src={curElm.image} alt=''></img>
                            <div className='icon'>
                              <div  className='icon_box'>
                                <li onClick={() => detailpage (curElm)}><AiFillEye /></li> 
                              </div>    
                              <div className='icon_box'>
                                <AiFillHeart />
                              </div>                        
                            </div>
                          </div>
                          <div className='info'>
                            <h3>{curElm.Name}</h3>
                            <p>RS:{curElm.price}</p>
                            <button className='btn' onClick={() => addtocart (curElm)}>Add to cart</button>
                          </div>
                        </div>
                        </>
                      )
                    })
                  }
                </div>
                <button>Show More</button>
              </div>
            </div>
            <div className='right_box'>
              <div className='right_container'>
                <div className='testimonial'>
                  <div className='head'>
                    <h3>our testmonial</h3>
                  </div>
                  <div className='detail'>
                    <div className='img_box'>
                      <img src='image/T1.avif' alt='testmonial'></img>
                    </div>
                    <div className='info'>
                      <h3>stephan robot</h3>
                      <h4>web designer</h4>
                      <p>Duis faucibus enim vitae nunc molestie, nec facilisis arcu pulvinar nullam mattisr nullam mattis.</p>
                    </div>
                  </div>
                </div>
                <div className='newsletter'>
                  <div className='head'>
                    <h3>newsletter</h3>
                  </div>
                  <div className='form'>
                    <p>join our malling list</p>
                    <input type='email' placeholder='E-mail' autoComplete='off'></input>
                    <button>subscribe</button>
                    <div className='icon_box'>
                      <div className='icon'>
                        <BiLogoFacebook />
                      </div>
                      <div className='icon'>
                        <BiLogoTwitter />
                      </div>
                      <div className='icon'>
                        <BiLogoInstagram />
                      </div>
                      <div className='icon'>
                        <BiLogoYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='banners'>
          <div className='container'>
            <div className='left_box'>
              <div className='box'>
                <img src='image/Multi-banner-1.jpg' alt='banner'></img>
              </div>
              <div className='box'>
                <img src='image/Multi-banner-2.jpg' alt='banner'></img>
              </div>
            </div>
            <div className='right_box'>
              <div className='top'>
                <img src='image/Multi-banner-3.jpg' alt=''></img>
                <img src='image/Multi-banner-4.jpg' alt=''></img>
              </div>
              <div className='bottom'>
                <img src='image/Multi-banner-5.jpeg' alt=''></img>
              </div>
            </div>
          </div>
        </div>
        <div className='product_type'>
          <div className='container'>
            <div className='box'>
              <div className='header'>
                <h2>New Product</h2>
              </div>
              {
                newProduct.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>RS: {curElm.price}</p>
                        <div className='icon'>
                          <button onClick={() => detailpage (curElm)}><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Featured Product</h2>
              </div>
              {
                featuredProduct.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>RS: {curElm.price}</p>
                        <div className='icon'>
                          <button onClick={() => detailpage (curElm)}><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Top Product</h2>
              </div>
              {
                topProduct.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>RS: {curElm.price}</p>
                        <div className='icon'>
                        <button onClick={() => detailpage (curElm)}><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
