import React from 'react'
import './print.css'
const Print = () => {
    // const current = new Date();
    // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}/${current.getTime()}`;
    // const currentDateTime=Date().toLocaleString()
    var today = new Date(),
    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
    sysdate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  
   const  printReceipt=()=> {
        window.print();
      }
  return (
    <div className='main-print'>
      <div className='print-recipt'>
        <form action="">
            <div className="strename"><span>{"BFL STORE"}</span></div>
            <div className='hr'></div>
            <div className="store-name"><h5 style={{marginLeft:"-25px"}}>Subodh Kumar singh</h5>
                <span>{"ATS TOWER 5 B-804"}</span></div>
            <div className='hr'></div>
            <div className="item-list-p">
                <div className="item-number-p"> <span>{"Item Number"}</span> </div>
                <div className="item-number-p"> <span>{"ITEM"}</span> </div>
                <div className="item-number-p"> <span>{"QTY"}</span> </div>
                <div className="item-number-p"> <span>{"RATE/UN"}</span> </div>
                <div className="item-number-p"> <span>{"DISC/UN"}</span> </div>
                <div className="item-number-p"> <span>{"AMOUNT"}</span> </div>
                <div className="item-number-p"> <span>{"TC"}</span> </div>
            </div>
            <div className='hr'></div>
            <div className="item-list-p">
                <div className="item-Data-p"> <span>{"08011210"}</span> </div>
                <div className="item-list-data-p"> <span>{"COCONUT"}</span> </div>
                <div className="item-qty-p"> <span>{"1"}</span> </div>
                <div className="item-rate-p"> <span>{"28.00"}</span> </div>
                <div className="item-disc-p"> <span>{"0.00"}</span> </div>
                <div className="item-amount-p"> <span>{"28.00"}</span> </div>
                <div className="item-tc-p"> <span>{"AB"}</span> </div>
                
            </div>
            <div className="item-list-p">
                <div className="item-Data-p"> <span>{"08011210"}</span> </div>
                <div className="item-list-data-p"> <span>{"COCONUT"}</span> </div>
                <div className="item-qty-p"> <span>{"1"}</span> </div>
                <div className="item-rate-p"> <span>{"28.00"}</span> </div>
                <div className="item-disc-p"> <span>{"0.00"}</span> </div>
                <div className="item-amount-p"> <span>{"28.00"}</span> </div>
                <div className="item-tc-p"> <span>{"AB"}</span> </div>
                
            </div>
            <div className="item-list-p">
                <div className="item-Data-p"> <span>{"08011210"}</span> </div>
                <div className="item-list-data-p"> <span>{"COCONUT"}</span> </div>
                <div className="item-qty-p"> <span>{"1"}</span> </div>
                <div className="item-rate-p"> <span>{"28.00"}</span> </div>
                <div className="item-disc-p"> <span>{"0.00"}</span> </div>
                <div className="item-amount-p"> <span>{"28.00"}</span> </div>
                <div className="item-tc-p"> <span>{"AB"}</span> </div>
                
            </div>
            <div className="item-list-p">
                <div className="item-Data-p"> <span>{"08011210"}</span> </div>
                <div className="item-list-data-p"> <span>{"COCONUT"}</span> </div>
                <div className="item-qty-p"> <span>{"1"}</span> </div>
                <div className="item-rate-p"> <span>{"28.00"}</span> </div>
                <div className="item-disc-p"> <span>{"0.00"}</span> </div>
                <div className="item-amount-p"> <span>{"28.00"}</span> </div>
                <div className="item-tc-p"> <span>{"AB"}</span> </div>
                
            </div>
            <div className="item-list-p">
                <div className="item-Data-p"> <span>{"08011210"}</span> </div>
                <div className="item-list-data-p"> <span>{"COCONUT"}</span> </div>
                <div className="item-qty-p"> <span>{"1"}</span> </div>
                <div className="item-rate-p"> <span>{"28.00"}</span> </div>
                <div className="item-disc-p"> <span>{"0.00"}</span> </div>
                <div className="item-amount-p"> <span>{"28.00"}</span> </div>
                <div className="item-tc-p"> <span>{"AB"}</span> </div>
                
            </div>
            <div className='hr'></div>
            <div className="amount-detail-p">
                <div className="amount-data-p"> <span>{"Total Amount"}</span> </div>
                <div className="amount-data-p"> <span>{"Total Rounded"}</span> </div>
                <div className="amount-data-p"> <span>{"Rounded Off Amt"}</span> </div>
                <div className="amount-data-p"> <span>{"Card"}  </span> </div>
                <h6 style={{position:"absolute",marginTop:"165px",marginLeft:"55px"}}>25**-****-****-2560</h6>
                <div className="amount-data-p"> <span>{"Total Tender"}</span> </div>
                <div className="amount-data-p"> <span>{"Date and Time"}</span> </div>
                <div className="amount-data-p"> <span>{"Change Due"}</span> </div>
                <div className="amount-data-p"> <span>{"Total Number of Item/Qty"}</span> </div>
                {/* <div className="amount-data"> <span>{"Card Number"}</span> </div> */}
                <div className="amount-data-p"> <span>{"Loyalty Points"}</span> </div>
                
          
            </div>
            <div className="amount-final-p">
                <div className="amount-final-data-p"> <span>{"28.00"}</span> </div>
                <div className="amount-final-data-p"> <span>{"28.00"}</span> </div>
                <div className="amount-final-data-p"> <span>{"0.00"}</span> </div>
                <div className="amount-final-data-p"> <span>{"28.00"}  {"AED"}</span> </div>
                <div className="amount-final-data-p"> <span style={{fontWeight:"bold"}}>{sysdate}    {time}</span> </div>
                <div className="amount-final-data-p"> <span>{"28.00"}</span> </div>
                <div className="amount-final-data-p"> <span>{"0.00"}</span> </div>
                <div className="amount-final-data-p"> <span>{"1/1"}</span> </div>
                {/* <div className="amount-final-data"> <span>{"****-****-****-2560"}</span> </div> */}
                <div className="amount-final-data-p"> <span>{"10"}   {"AED"}</span> </div>
            </div>
            <div className='hr'></div>
            <h3>Tax Details</h3>
            <div className='hr'></div>
            <div className="tax-data-p">
                <div className="tax-list-p"> <span>{"Tax Desc"}</span> </div>
                <div className="tax-list-p"> <span>{"Taxable"}</span> </div>
                <div className="tax-list-p"> <span>{"Tax"}</span> </div>
            </div>
            <div className='hr'></div>
            <br /><br />
            <div className='hr'></div>
            <div className="tax-total-value-p">
                <span>Total Tax Value</span>
            </div>
            <div className="tax-total-value-data-p">
                <span>{"0.00"}</span>
            </div>
            <div className='hr'></div>
            <br /><br />
            <div className='hr'></div>
            <div className='tax-invoice-p'>
                <span>Tax Incoice/Bill of Supply - SALE</span>
            </div>
        <button class="hide-on-print btn btn-primary btn-lg "style={{marginLeft:"400px",marginTop:"20px"}}  onClick={printReceipt}>Print</button>
        </form>
      </div>
    </div>
  )
}

export default Print
