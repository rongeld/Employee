import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { removeEmployee } from '../actions/employees'
import firebase from 'firebase';
import ImageUploader from 'react-firebase-image-uploader';
import Time from 'react-time';
import DeleteModal from './DeleteModal';


class EmployeeListItem extends React.Component {
      constructor(props) {
         super(props)

         this.state = {
            isOpenEditBTN: false,
            isOpenModal: !!!this.props.name,
            name: this.props.name
         }
      }
      addNumber = () => {
            const trigger = !this.state.isOpenEditBTN ? true : false;
            this.setState({ isOpenEditBTN: trigger}, () => {
                  console.log(this.state.isOpenEditBTN);
            })
      }
      openModal = () => {
            const trigger = !this.state.isOpenModal ? true : false;
            this.setState({ isOpenModal: trigger}, () => {
                  console.log(this.state.isOpenModal);
            })
      }
      deleteItemSubmit = () => {
            this.props.dispatch(removeEmployee(this.props.id));
      }
      closeModal = () => {
         this.setState({ isOpenModal: false}, () => {
            console.log(this.state.isOpenModal);
      })
      }
      
    render() {
         let now = new Date(),
         currentTime,
         timeZone,
         tooltiptext,
         tooltiptextCountry;

      if (this.props.city === 'San Francisco') {
         currentTime = (960 + now.getTimezoneOffset())*60*1000;
         timeZone = new Date(now.getTime()+currentTime);
         tooltiptext = 'Main streen st, 34 San Francisco, 08565';
         tooltiptextCountry = 'USA';
      } else if (this.props.city === 'Lviv') {
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
      <DeleteModal
         isOpen={this.state.isOpenModal}
         deleteItemSubmit={this.deleteItemSubmit}
         name={this.state.name}
         closeModal={this.closeModal}
         />
         
         <div className="employee-block">
            <div className="person">
               <div className="img-wrap">
                     <img src={this.props.avatarURL} alt="" />
                  </div>
                  <div className="person-info">
                     <h3>{this.props.name}</h3>
                     <h5>{this.props.specialization}</h5>
                     <div className="person-place">
                           <span className="person-place-city">
                              {this.props.city}
                              <span className="tooltiptext">
                              {tooltiptext} <br />{tooltiptextCountry}
                              </span> 
                           </span>
                           
                           <span className="floor">{this.props.floor} floor</span>
                     </div>
                  </div>    
            </div>
            <div className="time">
                  <h6>local time</h6>
                  <p><Time value={timeZone} format="HH:mm" /></p>
            </div>
            <div className="info">
                  <div className="info-text"><p>{this.props.telephone}</p>
                     <a href="mailto:{email}">{this.props.email}</a>
                  </div>
                  <div className="btn-edit">
                     <i className="fa fa-ellipsis-v" onClick={this.addNumber} id="btn-show-edit-block">   </i>
                           <div className={this.state.isOpenEditBTN ? 'edit-block btn-edit-vis' : 'edit-block'} id="edit-block">
                           <Link to={`/edit/${this.props.id}`}><button>Edit</button></Link>
                           <button className="delete" onClick={this.openModal}>Remove</button>
                        </div>
                  
                  </div>
            </div>
         </div>
      </div>
   )
}
}
 

export default connect()(EmployeeListItem);


// () => {
//       this.props.dispatch(removeEmployee(this.props.id));
//     }