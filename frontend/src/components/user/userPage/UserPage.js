import React, { useContext } from "react";
import UserNav from "../../navbar/UserNav";
import { useNavigate } from 'react-router-dom';
import { StateContextsData } from "../../context/StateContext";

export default function UserPage() {
    const navigate = useNavigate();
    const {travelData,setTravelData}=useContext(StateContextsData);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTravelData({ ...travelData, [name]: value })
    }
    const save = (e) => {
        e.preventDefault();
        const {origin,destination,startDate,endDate}=travelData;
        const data = new FormData();
        data.append("origin",origin);
        data.append("destination",destination)
        data.append("startDate",startDate)
        data.append("endDate",endDate)
        navigate('/orderpage')
    }
    
    return (
        <div className='home-container'>
            <UserNav />
            <div className="page-design">
                <div className="user-card-div">
                    <div>
                        <h3 className="quote-style">
                            Cart A Car for rent here! <br />
                            Bag the trip of Moments && Memories Yaayy (^ _ *)
                        </h3>
                        <form id="forms" onSubmit={save}>
                            <input type="text" className="input-field" placeholder="Origin Name" required name="origin" onChange={handleInput} />

                            <input type="text" className="input-field" placeholder="Destination Name" required name="destination" onCanPlay={handleInput} />

                            <label for="start-date">Start Date:</label>

                            <input id="start-date" type="date" className="input-field1" placeholder='Starting Date' required name="startDate" onChange={handleInput} />

                            <label for="return-date">Return Date:</label>

                            <input id='return-date' type="date" className="input-field1" placeholder="Return Date" required name="endDate" onChange={handleInput} />
                            <div className="check-pos">
                                <button className="save-details check-btn">Check</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

