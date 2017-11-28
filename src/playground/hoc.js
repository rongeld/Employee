import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
   return (
      <div>
         <h1>Info</h1>
         <p>{props.info}</p>
      </div>
   )
};

const withAdminWarning = (WrappedComponent) => {
   return (props) => (
      <div>
         <p>Admin content</p>
         <WrappedComponent {...props} />
      </div>
   );
};

const AdminInfo = withAdminWarning(Info);
 

ReactDOM.render(<AdminInfo info='This is some dummy text'/>, document.getElementById('app'));
 
