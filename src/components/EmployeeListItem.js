import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { removeEmployee } from '../actions/employees'
import firebase from 'firebase';
import ImageUploader from 'react-firebase-image-uploader';
import Time from 'react-time'

const EmployeeListItem = ({dispatch, id, name, city, email, telephone, specialization,localTime,floor, avatarURL}) => {
      let now = new Date(),
         currentTime,
         timeZone,
         tooltiptext,
         tooltiptextCountry;

      if (city === 'San Francisco') {
         currentTime = (960 + now.getTimezoneOffset())*60*1000;
         timeZone = new Date(now.getTime()+currentTime);
         tooltiptext = 'Main streen st, 34 San Francisco, 08565';
         tooltiptextCountry = 'USA';
      } else if (city === 'Lviv') {
         currentTime = (120 + now.getTimezoneOffset())*60*1000;
         timeZone = new Date(now.getTime()+currentTime)
         tooltiptext = 'Brativ Rohatyntsiv st, 21 Lviv, 79000';
         tooltiptextCountry = 'Ukraine';
      } else {
         currentTime = (120 + now.getTimezoneOffset())*60*1000;
         timeZone = new Date(now.getTime()+currentTime)
         tooltiptext = 'Chornobrivci street, 56/3 Kyiv, 040056';
         tooltiptextCountry = 'Ukraine';
      }
     
   return (
      <div className="container-wrapper">
         <div className="employee-block">
            <div className="person">
               <div className="img-wrap">
                     <img src={avatarURL} alt="" />
                  </div>
                  <div className="person-info">
                     <h3>{name}</h3>
                     <h5>{specialization}</h5>
                     <div className="person-place">
                           <span className="person-place-city">
                              {city}
                              <span className="tooltiptext">
                              {tooltiptext} <br />{tooltiptextCountry}
                              </span> 
                           </span>
                           
                           <span className="floor">{floor} floor</span>
                     </div>
                  </div>    
            </div>
            <div className="time">
                  <h6>local time</h6>
                  <p><Time value={timeZone} format="HH:mm" /></p>
            </div>
            <div className="info">
                  <div className="info-text"><p>{telephone}</p>
                     <a href="mailto:{email}">{email}</a>
                  </div>
                  <div className="btn-edit">
                     <i className="fa fa-ellipsis-v" id="btn-show-edit-block">
                           <div className="edit-block" id="edit-block">
                           <Link to={`/edit/${id}`}><button>Edit</button></Link>
                           <button className="delete" onClick={() => {
                              dispatch(removeEmployee({id}));
                           }}>Remove</button>
                        </div>
                     </i>
                  </div>
            </div>
         </div>
      </div>
   )
}
 
export default connect()(EmployeeListItem);