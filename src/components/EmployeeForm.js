import React from 'react';
import firebase from 'firebase';
import ImageUploader from 'react-firebase-image-uploader';

export default class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.employee ? props.employee.name : '',
            specizalization: props.employee ? props.employee.specizalization : 'Frontend',
            city: props.employee ? props.employee.city : 'Kyiv',
            floor: props.employee ? props.employee.floor : 'Ground',
            email: props.employee ? props.employee.email : '',
            telephone: props.employee ? props.employee.telephone :'',
            nameError: '',
            emailError: '',
            telephoneError: '',
            isUploading: false,
            progress: 0,
            avatarURL: props.employee ? props.employee.avatarURL :''
        }
    }

   onNameChange = (e) => {
      const name = e.target.value;
      this.setState(() => ({name}));
   }
   onSpecizalizationChange = (e) => {
      const specizalization = e.target.value;
      this.setState(() => ({specizalization}));
   }
   onCityChange = (e) => {
      const city = e.target.value;
      this.setState(() => ({city}));
   }
   onFlorrChange = (e) => {
      const floor = e.target.value;
      this.setState(() => ({floor}));
   }
   onEmailChange = (e) => {
      const email = e.target.value;
      this.setState(() => ({email}));
   }
   onTelephoneChange = (e) => {
      const telephone = e.target.value;
      this.setState(() => ({telephone}));
   }
   handleUploadStart = () => this.setState({isUploading: true, progress: 0})
   handleProgress = (progress) => this.setState({progress});
   handleUploadError = (error) => {
       this.setState({isUploading: false});
       console.error(error);
   }
   handleUploadSuccess = (filename) => {
       this.setState({avatar: filename, progress: 100, isUploading: false});
       firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
   };
   onSubmit = (e) => {
       e.preventDefault();

       if (!this.state.name) {
        this.setState(() => ({nameError: 'Please, provide a name'}))
       } else {
        this.setState(() => ({nameError: ''}))
       }
       if (!this.state.email) {
        this.setState(() => ({emailError: 'Please, provide an Email'}))
       } else {
        this.setState(() => ({emailError: ''}))
       }
       if (!this.state.telephone) {
        this.setState(() => ({telephoneError: 'Please, provide a telephone'}))
       } else {
        this.setState(() => ({telephoneError: ''}))
       }

    if(this.state.name && this.state.email && this.state.telephone ){
        console.log('submitted');
        this.props.onSubmit({
            name: this.state.name,
            specizalization: this.state.specizalization,
            city: this.state.city,
            floor: this.state.floor,
            email: this.state.email,
            telephone: this.state.telephone,
            avatarURL: this.state.avatarURL
        })
    }

   }
   render() { 
      return ( 
         <div>
         
            <form onSubmit={this.onSubmit}>
                {this.state.nameError && <label htmlFor="name">{this.state.nameError}</label>}
                <label>Avatar:</label>
                {
                    this.state.isUploading && <p>Progress: {this.state.progress}</p>
                }
                {this.state.avatarURL &&
                    <img className="img-width" src={this.state.avatarURL} />
                  }
               
                <ImageUploader
                    name="avatar"
                    storageRef={firebase.storage().ref('images')}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                />
               <input 
                  type="text" 
                  placeholder="Name"
                  autoFocus
                  value={this.state.name}
                  onChange={this.onNameChange}
               />
               <select 
                  value={this.state.specizalization}
                  onChange={this.onSpecizalizationChange}
               >
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Devops">Devops</option>
                  <option value="Operations">Operations</option>
               </select>
               <select 
                  value={this.state.city}
                  onChange={this.onCityChange}
               >
                  <option value="Kyiv">Kyiv</option>
                  <option value="Lviv">Lviv</option>
                  <option value="San Francisco">San Francisco</option>
               </select>
               <select 
                  value={this.state.floor}
                  onChange={this.onFlorrChange}
               >
                  <option value="Ground">Ground</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
               </select>
               {this.state.emailError && <label htmlFor="email">{this.state.emailError}</label>}
               <input 
                  type="email" 
                  
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.onEmailChange}
               />
               {this.state.telephoneError && <label htmlFor="telephone">{this.state.telephoneError}</label>}
               <input 
                  type="text" 
                  placeholder="telephone"
                  name="telephone"
                  value={this.state.telephone}
                  onChange={this.onTelephoneChange}
               />
               <button>Set Employee</button>
            </form>
         </div>
       )
   }
}
 

