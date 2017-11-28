import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { removeEmployee } from '../actions/employees'
import firebase from 'firebase';
import ImageUploader from 'react-firebase-image-uploader';

const EmployeeListItem = ({dispatch, id, name, city, email, telephone, specialization,localTime,floor, avatarURL}) => {
   console.log(id);
   return (
      <div>
         <p>{name}</p>
         <p>{city}</p>
         <p>{email}</p>
         <p>{telephone} - {specialization} - {localTime} - {floor}</p>
         <img src={avatarURL} className="img-width" alt="" />
         <button onClick={() => {
            dispatch(removeEmployee({id}));
         }}>Remove</button>
         <Link to={`/edit/${id}`}><button>Edit</button></Link>
      </div>
   )
}
 
export default connect()(EmployeeListItem);