import React from 'react'
import { useState,useEffect } from 'react'
import { shirt } from '../../assets/images'
import './addtocart.css'
import Navlayout from './Navforcart'
const Addtocart = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('data.json').then((result)=>{
      result.json().then((resp)=>{
        setData(resp)
      })
    })
  },[])
  return (
    <>
    <Navlayout></Navlayout>
    <div className='container'>
        <div className="atoptext">Shopping Cart</div>
       <div className="table-responsive addtocartmaintable addtocartmaintable_m addtocartmaintable_s">

        <table class="table addtocarttable">
          <thead class="thead-dark thead-fix">
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Discount</th>
              <th scope="col">Total</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
  <tbody>
   { data.map((item , index)=>
    <tr>
      <td>
        <div className='product_img'>

        <img src={shirt}  alt="" srcset="" />
        <div className="div2">

        <p className='product_img_1'>{item.name}</p>
        <p className='product_img_2'>{item.brand}</p>
        <p className='product_img_desc'>{item.quality}</p>
        </div>
        </div>
        </td>
        

      <td className='tdcontentatc'>{item.price}</td>
      <td className='tdcontentatc'>{item.discount}</td>
      <td className='tdcontentatc'>{item.total}</td>
      <td className='tdcontentatc' key={item}><a className='btn btn-danger'>Remove</a></td>
    </tr>)}
    <tr>
      <td>
        <div className='product_img'>

        <img src={shirt}  alt="" srcset="" />
        <div className="div2">

        <p className='product_img_1'>T-shirt</p>
        <p className='product_img_2'>Roadstar</p>
        <p className='product_img_desc'>100% pure cotton</p>
        </div>
        </div>
        </td>
        

      <td className='tdcontentatc'>$100</td>
      <td className='tdcontentatc'>20%</td>
      <td className='tdcontentatc'>$80</td>
      <td className='tdcontentatc'><a className='btn btn-danger'>Remove</a></td>
    </tr>
    <tr>
      <td>
        <div className='product_img'>

        <img src={shirt}  alt="" srcset="" />
        <div className="div2">

        <p className='product_img_1'>T-shirt</p>
        <p className='product_img_2'>Roadstar</p>
        <p className='product_img_desc'>100% pure cotton</p>
        </div>
        </div>
        </td>
        

      <td className='tdcontentatc'>$100</td>
      <td className='tdcontentatc'>20%</td>
      <td className='tdcontentatc'>$80</td>
      <td className='tdcontentatc'><a className='btn btn-danger'>Remove</a></td>
    </tr>
    <tr>
      <td>
        <div className='product_img'>

        <img src={shirt}  alt="" srcset="" />
        <div className="div2">

        <p className='product_img_1'>T-shirt</p>
        <p className='product_img_2'>Roadstar</p>
        <p className='product_img_desc'>100% pure cotton</p>
        </div>
        </div>
        </td>
        

      <td className='tdcontentatc'>$100</td>
      <td className='tdcontentatc'>20%</td>
      <td className='tdcontentatc'>$80</td>
      <td className='tdcontentatc'><a className='btn btn-danger'>Remove</a></td>
    </tr>
    <tr>
      <td>
        <div className='product_img'>

        <img src={shirt}  alt="" srcset="" />
        <div className="div2">

        <p className='product_img_1'>T-shirt</p>
        <p className='product_img_2'>Roadstar</p>
        <p className='product_img_desc'>100% pure cotton</p>
        </div>
        </div>
        </td>
        

      <td className='tdcontentatc'>$100</td>
      <td className='tdcontentatc'>20%</td>
      <td className='tdcontentatc'>$80</td>
      <td className='tdcontentatc'><a className='btn btn-danger'>Remove</a></td>
    </tr>
    <tr>
      <td>
        <div className='product_img'>

        <img src={shirt}  alt="" srcset="" />
        <div className="div2">

        <p className='product_img_1'>T-shirt</p>
        <p className='product_img_2'>Roadstar</p>
        <p className='product_img_desc'>100% pure cotton</p>
        </div>
        </div>
        </td>
        

      <td className='tdcontentatc'>$100</td>
      <td className='tdcontentatc'>20%</td>
      <td className='tdcontentatc'>$80</td>
      <td className='tdcontentatc'><a className='btn btn-danger'>Remove</a></td>
    </tr>
    <tr>
      <td>
        <div className='product_img'>

        <img src={shirt}  alt="" srcset="" />
        <div className="div2">

        <p className='product_img_1'>T-shirt</p>
        <p className='product_img_2'>Roadstar</p>
        <p className='product_img_desc'>100% pure cotton</p>
        </div>
        </div>
        </td>
        

      <td className='tdcontentatc'>$100</td>
      <td className='tdcontentatc'>20%</td>
      <td className='tdcontentatc'>$80</td>
      <td className='tdcontentatc'><a className='btn btn-danger'>Remove</a></td>
    </tr>
    <tr>
      <td>
        <div className='product_img'>

        <img src={shirt}  alt="" srcset="" />
        <div className="div2">

        <p className='product_img_1'>T-shirt</p>
        <p className='product_img_2'>Roadstar</p>
        <p className='product_img_desc'>100% pure cotton</p>
        </div>
        </div>
        </td>
        

      <td className='tdcontentatc'>$100</td>
      <td className='tdcontentatc'>20%</td>
      <td className='tdcontentatc'>$80</td>
      <td className='tdcontentatc'><a className='btn btn-danger'>Remove</a></td>
    </tr>
    <tr>
      <td>
        <div className='product_img'>

        <img src={shirt}  alt="" srcset="" />
        <div className="div2">

        <p className='product_img_1'>T-shirt</p>
        <p className='product_img_2'>Roadstar</p>
        <p className='product_img_desc'>100% pure cotton</p>
        </div>
        </div>
        </td>
        

      <td className='tdcontentatc'>$100</td>
      <td className='tdcontentatc'>20%</td>
      <td className='tdcontentatc'>$80</td>
      <td className='tdcontentatc'><a className='btn btn-danger'>Remove</a></td>
    </tr>
    <tr>
      <td>
        <div className='product_img'>

        <img src={shirt}  alt="" srcset="" />
        <div className="div2">

        <p className='product_img_1'>T-shirt</p>
        <p className='product_img_2'>Roadstar</p>
        <p className='product_img_desc'>100% pure cotton</p>
        </div>
        </div>
        </td>
        

      <td className='tdcontentatc'>$100</td>
      <td className='tdcontentatc'>20%</td>
      <td className='tdcontentatc'>$80</td>
      <td className='tdcontentatc'><a className='btn btn-danger'>Remove</a></td>
    </tr>
    <tr>
      <td>
        <div className='product_img'>

        <img src={shirt}  alt="" srcset="" />
        <div className="div2">

        <p className='product_img_1'>T-shirt</p>
        <p className='product_img_2'>Roadstar</p>
        <p className='product_img_desc'>100% pure cotton</p>
        </div>
        </div>
        </td>
        

      <td className='tdcontentatc'>$100</td>
      <td className='tdcontentatc'>20%</td>
      <td className='tdcontentatc'>$80</td>
      <td className='tdcontentatc'><a className='btn btn-danger'>Remove</a></td>
    </tr>
    <tr>
      <td>
        <div className='product_img'>

        <img src={shirt}  alt="" srcset="" />
        <div className="div2">

        <p className='product_img_1'>T-shirt</p>
        <p className='product_img_2'>Roadstar</p>
        <p className='product_img_desc'>100% pure cotton</p>
        </div>
        </div>
        </td>
        

      <td className='tdcontentatc'>$100</td>
      <td className='tdcontentatc'>20%</td>
      <td className='tdcontentatc'>$80</td>
      <td className='tdcontentatc'><a className='btn btn-danger'>Remove</a></td>
    </tr>
    <tr>
      <td>
        <div className='product_img'>

        <img src={shirt}  alt="" srcset="" />
        <div className="div2">

        <p className='product_img_1'>T-shirt</p>
        <p className='product_img_2'>Roadstar</p>
        <p className='product_img_desc'>100% pure cotton</p>
        </div>
        </div>
        </td>
        

      <td className='tdcontentatc'>$100</td>
      <td className='tdcontentatc'>20%</td>
      <td className='tdcontentatc'>$80</td>
      <td className='tdcontentatc'><a className='btn btn-danger'>Remove</a></td>
    </tr>
    
   
    
  </tbody>
</table>
</div>
<div className='atcfooter'>
  <img src="" alt="" srcset="" />
<span>Total AED: 150.8</span>
<button className='btn btn-outline-secondary'>Cancel</button>
<button className='btn btn-outline-secondary'>Pay</button>
</div>
</div>

    </>
  )
}

export default Addtocart