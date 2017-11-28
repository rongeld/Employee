import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { removeEmployee } from '../actions/employees';
import firebase from 'firebase';


export class EditBlock extends React.Component {
   constructor(props) {
      super(props);
      this.state = { 

       }
   }
   render() { 
      return ( 
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
       )
   }
}
 
export default connect()(EditBlock);