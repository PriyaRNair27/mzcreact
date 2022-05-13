import logo from './logo.svg';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <div className="container">
        <div className="row ">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 <div className="row g-3">
                     <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label className="form-label">name</label>
                         <input  placeholder="enter name" type="text" className="form-control"/>
                     </div>
                     <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">rollnum</label>
                        <input  placeholder="enter roll num" type="text" className="form-control"/>
                    </div>
                    <div className="col col-12  col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">admission num</label>
                        <input placeholder="enter admission num" type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">ph num</label>
                        <input  placeholder="enter phne num"type="text" className="form-control"/>
                    </div>
                    <div className="col col-12  col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label className="form-label">college</label>
                        <input  placeholder="enter college"type="text" className="form-control"/>
                    </div>
                    <div className="col col-12  col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">username</label>
                        <input  placeholder="username"type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">password</label>
                        <input placeholder="enter password" type="password" name="" id="" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-danger">register</button>
                    </div>
                



                 </div>


            </div>
        </div>
    </div>



  );
}

export default App;
