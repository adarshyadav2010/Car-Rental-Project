import React from "react";
import UserNav from "../../navbar/UserNav";
import { useNavigate } from 'react-router-dom';

export default function UserPage(){
    const navigate = useNavigate();
    
      const handleInput = ( e ) => {
        const name = e.target.name;
        const value = e.target.value;
      }
      const save = (e)=>{
        e.preventDefault();
        
      }
    return(
        <div className='home-container'>
            <UserNav/>
            <div className="page-design">
                <div className="user-card-div">
                    <div>
                        <h3 className="quote-style">
                            Cart A Car for rent here! <br/>
                            Bag the trip of Moments && Memories Yaayy (^ _ *)
                        </h3>
                        <form id="forms" onSubmit={save}>
                            <label for="start-date">Start Date:</label>
                            
                            <input id="start-date" type="date" className="input-field1" placeholder='Starting Date' required name="startDate" onChange={handleInput}/>
                            
                            <label for="return-date">Return Date:</label>

                            <input id='return-date' type="date" className="input-field1" placeholder="Return Date" required name="endDate" onChange={handleInput}/>
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

