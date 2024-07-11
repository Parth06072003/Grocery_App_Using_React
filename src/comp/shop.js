import React, { useState } from 'react'
import { AiFillHeart, AiFillEye, AiOutlineClose} from 'react-icons/ai';
import './shop.css'
const Shop = ({shop, Filter, allcatefilter, addtocart})=> {
  
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
      <div className="shop">
        <h2>Shop</h2>
        <p>Home . Shop</p>
        <div className="container">
          <div className="left_box">
            <div className="category">
              <div className="header">
                <h3>all categories</h3>
              </div>
              <div className="box">
                <ul>
                  <li onClick={() => allcatefilter()}>All</li>
                  <li onClick={() => Filter("fruit")}>Fruits</li>
                  <li onClick={() => Filter("Vegetables")}>Vegetables</li>
                  <li onClick={() => Filter("bread")}>bread</li>
                  <li onClick={() => Filter("Coldrinks")}>Coldrinks</li>
                  <li onClick={() => Filter("chocolates")}>Chocolates</li>
                </ul>
              </div>
            </div>
            <div className='banner'>
                    <div className='img_box'>
                        <img src='image/shop_left.jpg' alt=''></img>
                    </div>
            </div>
          </div>
          <div className='right_box'>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='image/shop_top.webp' alt=''></img>
                    </div>
                </div>
                <div className='product_box'>
                    <h2>Shop Product</h2>
                    <div className='product_container'>
                        {
                            shop.map((curElm) => 
                            {
                                return(
                                    <>
                                    <div className='box'>
                                        <div className='img_box'>
                                            <img src={curElm.image} alt=''></img>
                                            <div className='icon'>
                                               <li><AiFillHeart /></li> 
                                               <li onClick={() => detailpage (curElm)}><AiFillEye /></li> 
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <p>RS:{curElm.price}</p>
                                            <button onClick={() => addtocart (curElm)}>Add To Cart</button>
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
        </div>      
    </>
  );
};

export default Shop;
