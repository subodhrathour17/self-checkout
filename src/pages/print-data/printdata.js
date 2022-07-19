import React from 'react'
import "./printdata.css"

const PrintData = () => {
    var today = new Date(),
    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
    sysdate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  return (
    <div id="invoice-POS">
    
    <center id="top">
      <div className="logo"></div>
      <div className="info"> 
        <h2>BFL STORE</h2>
      </div>
      <div className='hr-dot'></div>
    </center>
    
    <div id="mid">
      <div classNameName="info">
       
        <p> 
            Address :Suntech Global <br />
            Subodh Kumar Singh <br />
            {/* Phone   : 87******04 */}
        </p>
      </div>
      <div className='hr-dot'></div>
     </div>
     <table>

     
     <div className="item-list">
                <div className="item-number"> <span >{"Item No"}</span> </div>
                <div className="item-number"> <span>{"ITEM"}</span> </div>
                <div className="item-number"> <span>{"QTY"}</span> </div>
                <div className="item-number"> <span>{"RATE/UN"}</span> </div>
                <div className="item-number"> <span>{"DISC/UN"}</span> </div>
                <div className="item-number"> <span>{"AMOUNT"}</span> </div>
                
            </div>
            <div className="item-list">
                <div className="item-Data"> <span>{"08011210"}</span> </div>
                <div className="item-list-data"> <span>{"COCONUT"}</span> </div>
                <div className="item-qty"> <span>{"1"}</span> </div>
                <div className="item-rate"> <span>{"28.00"}</span> </div>
                <div className="item-disc"> <span>{"0.00"}</span> </div>
                <div className="item-amount"> <span>{"28.00"}</span> </div>
               
                
            </div>
            <div className="item-list">
                <div className="item-Data"> <span>{"08011210"}</span> </div>
                <div className="item-list-data"> <span>{"COCONUT"}</span> </div>
                <div className="item-qty"> <span>{"1"}</span> </div>
                <div className="item-rate"> <span>{"28.00"}</span> </div>
                <div className="item-disc"> <span>{"0.00"}</span> </div>
                <div className="item-amount"> <span>{"28.00"}</span> </div>
               
                
            </div>
            <div className="item-list">
                <div className="item-Data"> <span>{"08011210"}</span> </div>
                <div className="item-list-data"> <span>{"COCONUT"}</span> </div>
                <div className="item-qty"> <span>{"1"}</span> </div>
                <div className="item-rate"> <span>{"28.00"}</span> </div>
                <div className="item-disc"> <span>{"0.00"}</span> </div>
                <div className="item-amount"> <span>{"28.00"}</span> </div>
                
                
            </div>
        </table>
        <div className='hr-dot'></div> 
        <div className="amount-detail">
                <div className="amount-data"> <span>{"Total Amount"}</span> </div>
                <div className="amount-data"> <span>{"Total Rounded"}</span> </div>
                <div className="amount-data"> <span>{"Rounded Off Amt"}</span> </div>
                <div className="amount-data"> <span>{"Card"}  </span> </div>
                <h6 style={{position:"absolute",marginTop:"-1px",marginLeft:"0px",fontSize:"6px"}}>25**-****-****-2560</h6>
                <h5 style={{position:"absolute",marginTop:"-1px",marginLeft:"112px",fontSize:"6px"}}>{"Aut Code:"}  {"0000"}</h5>
                <div className="amount-data"> <span>{"Total Tender"}</span> </div>
                <div className="amount-data"> <span>{"Date and Time"}</span> </div>
                <div className="amount-data"> <span>{"Change Due"}</span> </div>
                <div className="amount-data"> <span>{"Total Number of Item/Qty"}</span> </div>
            
                <div className="amount-data"> <span>{"Loyalty Points"}</span> </div>
                
          
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
        <span style={{marginLeft:"38px"}}>Tax Details</span>
        {/* <div className='hr-dot'></div>  */}
        <div className="tax-data">
                <div className="tax-list"> <span>{"Tax Desc"}</span> </div>
                <div className="tax-list"> <span>{"Taxable"}</span> </div>
                <div className="tax-list"> <span>{"Tax"}</span> </div>
            </div>
            <div className='hr-dot'></div>
            <br /><br />
            <div className='hr-dot'></div>
            <div className="tax-total-value"style={{fontSize:"12px"}}>
                <span>Total Tax Value</span>
            </div>
            <div className="tax-total-value-data">
                <span>{"0.00"}</span>
            </div>
            <div className='hr-dot'></div>
            <br /><br />
            <div className='hr-dot'></div>
            <div className='tax-invoice'style={{fontSize:"10px",textAlign:"center"}}>
                <span>Tax Incoice/Bill of Supply - SALE</span>
            </div>
            <div className='hr-dot' ></div>
            <div className="till-details" style={{fontSize:"10px",textAlign:"center"}}>
                <div className="till-re">
                    <span>{"Till:"} {119}</span>
                </div>
                <div className="bill-re">
                    <span>{"Bill No:"} {1983}</span>
                </div>
                <div className="store-re">
                    <span>{"StoreID:"} {20001}</span>
                </div>
                <div className="-re">
                    <span>{"Cashier:"} {20001}</span>
                </div>
            </div>
            <div className='hr-dot'></div>
     <div id="legalcopy">
						<p className="legal">It's a Computer Generated Invoice Original / Customer Copy Unless otherwise stated,tax is not payable under reverse charge. 
						</p>
					</div>
  </div>

  )
}

export default PrintData