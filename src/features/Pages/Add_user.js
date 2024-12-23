import React,{ useState } from 'react'
import axios from 'axios'
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Add_user() {

    const dispatch=useDispatch();
    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
        img: "",
    });

    const changeHandle = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const vadidation = () => {
        var result = true;
        if (formvalue.name == "") {
            toast.error('Name Field is required !')
            result = false;
            return false;
        }
        if (formvalue.email == "") {
            toast.error('Email Field is required !')
            result = false;
            return false;
        }

        if (formvalue.password == "") {
            toast.error('Password Field is required !')
            result = false;
            return false;
        }
        if (formvalue.mobile == "") {
            toast.error('Mobile Field is required !')
            result = false;
            return false;
        }
        if (formvalue.img == "") {
            toast.error('Image Field is required !')
            result = false;
            return false;
        }
        return result;
    }

    const submitHandle = async (e) => {
        e.preventDefault();
        if (vadidation()) {
          
        }
    }
    return (
        <>
            <Header />
            <div class="container mt-5">
                <div class="row">
                    <div class="col-sm-12">
                        <h2>Add User</h2>
                        <Link to="/" className='btn btn-primary float-end mb-5'>Back</Link>
                        <form action="" method='post' onSubmit={submitHandle} >
                            <div className="mb-3 mt-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input type="text" value={formvalue.name} onChange={changeHandle} className="form-control" placeholder="Enter email" name="name" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" value={formvalue.email} onChange={changeHandle} className="form-control" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input type="password" value={formvalue.password} onChange={changeHandle} className="form-control" placeholder="Enter Password" name="password" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="mobile" className="form-label">Mobile:</label>
                                <input type="number" value={formvalue.mobile} onChange={changeHandle} className="form-control" placeholder="Enter Mobile" name="mobile" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="url" className="form-label">Upload Image:</label>
                                <input type="url" value={formvalue.img} onChange={changeHandle} className="form-control" name="img" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Add_user
