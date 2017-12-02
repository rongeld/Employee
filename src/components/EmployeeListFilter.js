import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, setCityFilter, setSpecializationFilter, removeCity, removeSpecialization} from '../actions/filters';

class EmployeeListFilters extends React.Component {
   state = {
      activeSF: true,
      activeK: true,
      activeL: false,
      activeB: true,
      activeF: true,
      activeD: false,
      activeO: false,
  };
   toggleActiveClassSF = () => {
      const currentState = this.state.activeSF;
      this.setState({ activeSF: !currentState });  
   }
   toggleActiveClassK = () => {
      const currentState = this.state.activeK;
      this.setState({ activeK: !currentState });  
   }
   toggleActiveClassL = () => {
      const currentState = this.state.activeL;
      this.setState({ activeL: !currentState });  
   }
   toggleActiveClassB = () => {
      const currentState = this.state.activeB;
      this.setState({ activeB: !currentState });  
   }
   toggleActiveClassF = () => {
      const currentState = this.state.activeF;
      this.setState({ activeF: !currentState });  
   }
   toggleActiveClassD = () => {
      const currentState = this.state.activeD;
      this.setState({ activeD: !currentState });  
   }
   toggleActiveClassO = () => {
      const currentState = this.state.activeO;
      this.setState({ activeO: !currentState });  
   }
   textFilter = (e) => {
      this.props.dispatch(setTextFilter(e.target.value))
   };
   frontend = () => {
    if (this.props.filters.setSpecializationFilter.includes('Frontend')) {
        this.props.dispatch(removeSpecialization('Frontend'));
    } else {
     this.props.dispatch(setSpecializationFilter('Frontend'));
    }
      this.toggleActiveClassF();
   }
   operations = () => {
    if (this.props.filters.setSpecializationFilter.includes('Operations')) {
        this.props.dispatch(removeSpecialization('Operations'));
    } else {
     this.props.dispatch(setSpecializationFilter('Operations'));
    }
      this.toggleActiveClassO();
   }
   devops = () => {
    if (this.props.filters.setSpecializationFilter.includes('Devops')) {
        this.props.dispatch(removeSpecialization('Devops'));
    } else {
     this.props.dispatch(setSpecializationFilter('Devops'));
    }
      this.toggleActiveClassD();
   }
   backend = () => {
    if (this.props.filters.setSpecializationFilter.includes('Backend')) {
        this.props.dispatch(removeSpecialization('Backend'));
    } else {
     this.props.dispatch(setSpecializationFilter('Backend'));
    }
      this.toggleActiveClassB();
   }
   lviv = () => {
   if (this.props.filters.setCityFilter.includes('Lviv')) {
       this.props.dispatch(removeCity('Lviv'));
   } else {
    this.props.dispatch(setCityFilter('Lviv'));
   }
      this.toggleActiveClassL();
   }
   kyiv = () => {
       if (this.props.filters.setCityFilter.includes('Kyiv')) {
        this.props.dispatch(removeCity('Kyiv'));
       } else {
        this.props.dispatch(setCityFilter('Kyiv'));
       }
      this.toggleActiveClassK();
   }
   sanFrancisco = () => {
   if (this.props.filters.setCityFilter.includes('San Francisco')) {
    this.props.dispatch(removeCity('San Francisco'));
   } else {
    this.props.dispatch(setCityFilter('San Francisco'));
   }
      this.toggleActiveClassSF();
   }
   
   render() {
      return (
      <div className="employee-list-filter">
         <div className="container-wrapper">
            <input 
               className="employee-list-filter__input"
               type="text" 
               value={this.props.filters.text} 
               onChange={this.textFilter}
               name="search"
               placeholder="Name or email, e.g. Theresa..."
            />
            <div className="employee-list-filter__buttons" id="buttons">
               <div className="employee-list-filter__position">
                  <button onClick={this.backend} className={this.state.activeB ? 'active-btn': null}>Backend</button>
                  <button onClick={this.frontend} className={this.state.activeF ? 'active-btn': null}>Frontend</button>
                  <button onClick={this.devops} className={this.state.activeD ? 'active-btn': null}>Devops</button>
                  <button onClick={this.operations} className={this.state.activeO ? 'active-btn': null}>Operations</button>
               </div>   
               <div className="employee-list-filter__place">
                  <button onClick={this.lviv} className={this.state.activeL ? 'active-btn': null}>Lviv</button>
                  <button onClick={this.kyiv} className={this.state.activeK ? 'active-btn': null} >Kyiv</button>
                  <button 
                     onClick={this.sanFrancisco}
                     className={this.state.activeSF ? 'active-btn': null} 
                  >San Francisco</button>
               </div>
            </div>
         </div>
      </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      filters: state.filter
   }
}

export default connect(mapStateToProps)(EmployeeListFilters)





// frontend = () => {
//    this.props.dispatch(setSpecializationFilter('Frontend'));
//    this.props.filters.setSpecializationFilter != '' && this.props.dispatch(setSpecializationFilter(''));
// }
// devops = () => {
//    this.props.dispatch(setSpecializationFilter('Devops'));
//    this.props.filters.setSpecializationFilter != '' && this.props.dispatch(setSpecializationFilter(''));
// }
// operations = () => {
//    this.props.dispatch(setSpecializationFilter('Operations'));
//    this.props.filters.setSpecializationFilter != '' && this.props.dispatch(setSpecializationFilter(''));
// }
// lviv = () => {
//    this.props.dispatch(setCityFilter('Lviv'));
//    this.props.filters.setCityFilter != '' && this.props.dispatch(setCityFilter(''));
// }
// kyiv = () => {
//    this.props.dispatch(setCityFilter('Kyiv'));
//    this.props.filters.setCityFilter != '' && this.props.dispatch(setCityFilter(''));
// }
// sanFrancisco = () => {
//    this.props.dispatch(setCityFilter('San Francisco'));
//    this.props.filters.setCityFilter != '' && this.props.dispatch(setCityFilter(''));
// }