import React from 'react';

const ContactForm=()=>{
    return(
        <form className="form-horizontal row">
          <div className="form-group">
            <label htmlFor="inputPassword" className="col-sm-2 control-label">Topic</label>
            <div className="col-sm-10">
              <input type="text" className="form-control"  placeholder="Topic"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input type="password" className="form-control"  placeholder="@email"/>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="inputPassword" className="col-sm-2 control-label">Message</label>
            <div className="col-sm-10">
              <textarea className="form-control" rows="3" placeholder='Type here!'></textarea>
            </div>
          </div>
            
        </form>
    );
}

export default ContactForm;