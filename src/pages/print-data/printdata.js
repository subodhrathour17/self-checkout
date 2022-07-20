import React, { useState } from 'react'
import { useEffect } from 'react';
import { Logo} from "../../assets/images";
import {  Image } from "react-bootstrap";
import "./printdata.css"

const PrintData = () => {
    var today = new Date(),
    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
    sysdate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    const [data1,setData1]=useState([]);
    useEffect(()=>{
        async function fetchData(){

        try{         
         let  res= await fetch("data.json",{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        res = await res.json()
         setData1(res.arabic[0])
        }catch(e){console.log(e);}
    }
    fetchData()
     })
  return (
      <div id="invoice-POS">
    <center id="top">
    
      <div className="logo"></div>
      <div className="info"> 
      <Image  style={{width:"150px"}} src={Logo} alt="suntech-logo" /> 
        <h2>BFL</h2>
      </div>
      <div className='hr-dot'></div>
    </center>
    
    <div id="mid">
      <div className="info">
        <p> 
     
        {data1.Address}/Address:Suntech Global <br />
            Subodh Kumar Singh <br />
        </p>
      </div>
      <div className='hr-dot'></div>
     </div>
        <table>

            <tr className="item-list">
                <td className="item-number"> <span>{data1.ItemNo}</span> </td>
                <td className="item-number"> <span style={{marginLeft:"-4px"}}>{data1.ITEMS}</span> </td>
                <td className="item-number"> <span>{data1.QTY}</span> </td>
                <td className="item-number"> <span>{data1.Rates}</span> </td>
                <td className="item-number"> <span style={{marginLeft:"4px"}}>{data1.Discount}</span> </td>
                <td className="item-number"> <span style={{paddingLeft:"8px"}}>{data1.AMOUNT}</span> </td>
            </tr>

            <tr className="item-list">
                <td className="item-number"> <span >{"ItemNo"}</span> </td>
                <td className="item-number"> <span>{"ITEMS"}</span> </td>
                <td className="item-number"> <span>{"QTY"}</span> </td>
                <td className="item-number"> <span>{"RATE/UN"}</span> </td>
                <td className="item-number"> <span>{"DISC/UN"}</span> </td>
                <td className="item-number"> <span>{"AMOUNT"}</span> </td>
                
            </tr>        
    
            <tr className="item-list">
                <td className="item-Data"> <span>{"08011210"}</span> </td>
                <td className="item-list-data"> <span>{"COCONUT"}</span> </td>
                <td className="item-qty"> <span>{"1"}</span> </td>
                <td className="item-rate"> <span>{"28.00"}</span> </td>
                <td className="item-disc"> <span>{"0.00"}</span> </td>
                <td className="item-amount"> <span>{"28.00"}</span> </td>
            </tr>
           
        </table>
        <div className='hr-dot'></div> 
        
        <div className="amount-detail">
                <div className="amount-data"> <span>{data1.TotalAmount} / {"Total Amount"}</span> </div>
                <div className="amount-data"> <span>{data1.TotalRounded} / {"Total Rounded"}</span> </div>
                <div className="amount-data"> <span>{data1.RoundedOffAmount} / {"Rounded Off Amt"}</span> </div>
                <div className="amount-data"> <span>{data1.Card} / {"Card"}  </span> </div>
                <h6 style={{position:"absolute",marginTop:"-1px",marginLeft:"0px",fontSize:"6px"}}>2525-****-****-2560</h6>
                <h5 style={{position:"absolute",marginTop:"-1px",marginLeft:"112px",fontSize:"6px"}}>{"Auth Code:"}  {"0000"}</h5>
                <div className="amount-data"> <span>{data1.TotalTender} / {"Total Tender"}</span> </div>
                <div className="amount-data"> <span>{"Date and Time"}</span> </div>
                <div className="amount-data"> <span>{data1.ChangeDue} / {"Change Due"}</span> </div>
                <div className="amount-data"> <span>{data1.TotalItemQty} / {"Total Number of Item/Qty"}</span> </div>
                <div className="amount-data"> <span>{data1.LoyaltyPoints} / {"Loyalty Points"}</span> </div>
            </div>
            <div className="amount-final">
                <div className="amount-final-data"> <span>{"28.00"}</span> </div>
                <div className="amount-final-data"> <span>{"28.00"}</span> </div>
                <div className="amount-final-data"> <span>{"0.00"}</span> </div>
                <div className="amount-final-data"> <span>{"28.00"}  {"AED"}</span> </div>
                <div className="amount-final-data"> <span>{"28.00"}</span> </div>
                <div className="amount-final-data"> <span style={{fontWeight:"bold",marginLeft:"-1px",fontSize:"4px"}}>{sysdate}    {time}</span> </div>
                <div className="amount-final-data"> <span>{"0.00"}</span> </div>
                <div className="amount-final-data"> <span>{"1/1"}</span> </div>
                
                <div className="amount-final-data"> <span>{"10"}   {"AED"}</span> </div>
            </div>
            <div className='hr-dot'></div>
            <div className="test-tax">
                <span >{data1.TaxDetails}</span>
                <br />
                <span style={{marginLeft:"10px"}}>Tax Details</span>
            </div>
        <div className="tax-data">
   
                <div className="tax-list">
                    <span style={{fontSize:'3px'}}>{data1.TaxDiscount}</span>
                    <br />
                     <span style={{fontSize:'5px'}}>{"Tax Desc"}</span>
                 </div>
                <div className="tax-list">
                <span style={{fontSize:'3px'}}>{data1.Taxable}</span>
                    <br />
                <span>{"Taxable"}</span> 
                </div>
                <div className="tax-list"> 
                <span style={{fontSize:'3px'}}>{data1.Tax}</span>
                    <br />
                <span>{"Tax"}</span> 
                </div>
            </div>
            <div className='hr-dot'></div>
            <br /><br />
            <div className='hr-dot'></div>
            <div className="tax-total-value"style={{fontSize:"12px"}}>
                <span style={{fontSize:'9px'}}>{data1.TotalTaxValue}</span>
                <br />
                <span> Total Tax Value</span>
            </div>
            <div className="tax-total-value-data">
                <span>{"0.00"}</span>
            </div>
            <div className='hr-dot'></div>
            <br /><br />
            <div className='hr-dot'></div>
            <div className='tax-invoice'style={{fontSize:"10px",textAlign:"center"}}>
                <span>{data1.TaxIncoiceBill} <br /> Tax Incoice/Bill of Supply - SALE</span>
            </div>
            <div className='hr-dot' ></div>
            <div className="till-details" >
                <div className="till-re">
                    <div className="till-arabic">{data1.Till}</div>
                    <span>{"Till:"} {119}</span>
                </div>
                <div className="bill-re">
                <div className="bill-arabic">{data1.BillNo}</div>
                    <span>{"Bill No:"} {1983}</span>
                </div>
                <div className="store-re">
                <div className="store-arabic">{data1.StoreID}</div>
                    <span>{"StoreID:"} {20001}</span>
                </div>
                <div className="cashiersid-re">
                <div className="cashier-arabic">{data1.Cashier}</div>
                    <span>{"Cashier:"} {20001}</span>
                </div>
            </div>
            <div className='hr-dot'></div>
     <div id="legalcopy">
						<p className="legal" style={{textAlign:"center"}}>{data1.Generat} <br/> It's a Computer Generated Invoice Original / Customer Copy Unless otherwise stated,tax is not payable under reverse charge. 
						</p>
					</div>
  </div>

  )
}

export default PrintData