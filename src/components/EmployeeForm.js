import React from 'react';
import firebase from 'firebase';
import ImageUploader from 'react-firebase-image-uploader';
import FileUploader from 'react-firebase-file-uploader';

export default class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.employee ? props.employee.name : '',
            specialization: props.employee ? props.employee.specialization : 'Frontend',
            city: props.employee ? props.employee.city : 'Kyiv',
            floor: props.employee ? props.employee.floor : 'Ground',
            email: props.employee ? props.employee.email : '',
            telephone: props.employee ? props.employee.telephone :'',
            nameError: '',
            emailError: '',
            telephoneError: '',
            isUploading: false,
            progress: 0,
            avatarURL: props.employee ? props.employee.avatarURL :"https://firebasestorage.googleapis.com/v0/b/employee-vgs-app.appspot.com/o/images%2F6a17d43b-5f17-47cf-881b-60d1ec26c902.jpg?alt=media&token=647779a3-eb64-460d-bf08-42b61f941e12"
        }
    }

   onNameChange = (e) => {
      const name = e.target.value;
      this.setState(() => ({name}));
   }
   onSpecizalizationChange = (e) => {
      const specialization = e.target.value;
      this.setState(() => ({specialization}));
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

       const phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;  

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
       } else if (!this.state.telephone.match(phoneno) && this.state.telephone) {
        this.setState(() => ({telephoneError: 'Please, provide a valid telephone'}))
       } else {
        this.setState(() => ({telephoneError: ''}))
       }

    if(this.state.name && this.state.email && this.state.telephone.match(phoneno)){
        console.log('submitted');
        this.props.onSubmit({
            name: this.state.name,
            specialization: this.state.specialization,
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
         <div className="add-employee">
            <form onSubmit={this.onSubmit}>
                <div className="employee-photo">
                {
                    this.state.isUploading && <p>Progress: {this.state.progress}</p>
                }
                {this.state.avatarURL &&
                    <img className="img-width" src={this.state.avatarURL} />
                  }
                  <div className="imb-btn">
                  <label style={{backgroundColor: 'steelblue', color: 'white', marginTop: 10, padding: 10, borderRadius: 4, pointer: 'cursor'}}>
                  Select employee`s photo
                  <FileUploader
                  accept="image/*"
                  name="avatar"
                  hidden
                  randomizeFilename
                  storageRef={firebase.storage().ref('images')}
                  onUploadStart={this.handleUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                  onProgress={this.handleProgress}
                />
                </label>
                </div>
                </div>
                
                <div className="form-inputs">
                    {this.state.nameError && <label htmlFor="name">{<span className="error-text">{this.state.nameError}</span>}</label>}
                <input 
                    type="text" 
                    className={this.state.nameError && 'red-border'}
                    placeholder="Name"
                    autoFocus
                    value={this.state.name || ''}
                    onChange={this.onNameChange}
                />
                <select 
                    value={this.state.specialization}
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
                <div className="half-width">
                  <div className="half-width-item">
                  {this.state.emailError && <label htmlFor="email">{<span className="error-text">{this.state.emailError}</span>}</label>}
                  <input 
                      type="email" 
                      className={this.state.emailError && 'red-border'}
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.onEmailChange}
                  />
                  </div>
                  <div className="half-width-item">
                   
                    {this.state.telephoneError && <label htmlFor="telephone">{<span className="error-text">{this.state.telephoneError}</span>}</label>}
                    <input 
                        className={this.state.telephoneError && 'red-border'}
                        type="text" 
                        placeholder="Telephone"
                        name="telephone"
                        value={this.state.telephone}
                        onChange={this.onTelephoneChange}
                    />
                    </div>
                </div>
                
                <button>Set Employee</button>
               </div>
            </form>
         </div>
       )
   }
}
 

