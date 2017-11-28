import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { removeEmployee } from '../actions/employees'
import firebase from 'firebase';
import ImageUploader from 'react-firebase-image-uploader';

const EmployeeListItem = ({dispatch, id, name, city, email, telephone, specialization,localTime,floor, avatarURL}) => {
   console.log(id);
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
                           <span className="person-place-city">{city}<span className="tooltiptext">Brativ Rohatyntsiv st, 21 L`viv, 79000 <br />Ukraine</span> </span><span className="floor">{floor} floor</span>
                     </div>
                  </div>    
            </div>
            <div className="time">
                  <h6>local time</h6>
                  <p>3:42 PM</p>
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