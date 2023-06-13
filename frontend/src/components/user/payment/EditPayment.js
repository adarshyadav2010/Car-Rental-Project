import React, { useContext } from "react";
import UserNav from "../../navbar/UserNav";
import { StateContextsData } from "../../context/StateContext";
import { useNavigate } from "react-router-dom";

export default function EditPayment(){
    const navigate = useNavigate();
    const {EditPaymentDetails,headerData, setEditPaymentDetails} = useContext(StateContextsData);
    console.log(EditPaymentDetails)
    const {BookingId,date,time,image,name,Details,carDetails,type ,pricing,pricekm,total,Tax,perKm,origin,destination}= EditPaymentDetails
    EditPaymentDetails.MapImg=headerData.MapImg
    function editformsubmitFunc(e){
        e.preventDefault();

        fetch(`https://car-rental-app-server.onrender.com/orders/${EditPaymentDetails._id}` , {

          method:"PATCH",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(EditPaymentDetails),
        }).then(res=>res.json())
        .then(data=>console.log(data))

    navigate("/my-bookings")

    }
    return(
        <div className='payment-container'>
            <UserNav/>
            
        </div>
    )
}