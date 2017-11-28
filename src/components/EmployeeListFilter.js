import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, setCityFilter, setSpecializationFilter} from '../actions/filters';

class EmployeeListFilters extends React.Component {
   textFilter = (e) => {
      this.props.dispatch(setTextFilter(e.target.value))
   };
   backend = () => {
      this.props.dispatch(setSpecializationFilter('Backend'));
      this.props.filters.setSpecializationFilter != '' && this.props.dispatch(setSpecializationFilter(''));
   }
   lviv = () => {
      this.props.dispatch(setCityFilter('Lviv'));
   }
   kyiv = () => {
      this.props.dispatch(setCityFilter('Kyiv'));
   }
   sanFrancisco = () => {
      this.props.dispatch(setCityFilter('San Francisco'));
   }
   
   render() {
      return (
      <div>
         <input 
            type="text" 
            value={this.props.filters.text} 
            onChange={this.textFilter}
            placeholder="search"
         />
         <button onClick={this.backend}>Backend</button>
         <button onClick={this.frontend}>Frontend</button>
         <button onClick={this.devops}>Devops</button>
         <button onClick={this.operations}>Operations</button>
         <button onClick={this.lviv}>Lviv</button>
         <button onClick={this.kyiv}>Kyiv</button>
         <button onClick={this.sanFrancisco}>San Francisco</button>
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