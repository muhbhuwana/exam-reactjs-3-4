import React, { useState } from 'react';
// import { useCounter } from './hooks';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style.css";
// import Dashboard from "./Dashboard";

function EditPassword() {
    const [email, setEmail] = useState('');
    const [oldpassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [errorOldPassword, setErrorOldPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorCPassword, setErrorCPassword] = useState('');
    const [infoCPassword, setInfoCPassword] = useState('');


    // const [captchaValue, setCaptchaValue] = useState('');
    // const [timeLeft, startTimer] = useCounter(30);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();


    };

    function onChangePassword(value) {
        setPassword(value);
        if ((value.match(/^(?=.*[-+_!@#$%^&*., ?])(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9-+_!@#$%^&*., ?]+)$/)) && value.length >= 8) {
            setErrorPassword('');
        }
        else {
            setErrorPassword('Password must contain at least 8 characters, including upper/lowercase, symbol and numbers.');
        }
    }


    function onChangeCPassword(value) {
        setCPassword(value);

        if ((value != ''))
        {
            if ((value == password)) {
                setInfoCPassword('Password OK')
                setErrorCPassword('');
    
                if ((value.match(/^(?=.*[-+_!@#$%^&*., ?])(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9-+_!@#$%^&*., ?]+)$/)) && value.length >= 8) {
                    setErrorCPassword('');
                }
                else {
                    setErrorCPassword('Password must contain at least 8 characters, including upper/lowercase, symbol and numbers.');
                }
            } else {
                setErrorCPassword('Password must be same');
            }
        } else
        {
            setErrorCPassword('');
        }
        
    }

    return (
        <div class="container">
            <div class="row">
                <div class="d-flex justify-content-center  align-items-center">
                    <div class="col-5">
                        <div class="card border-0 mt-auto">
                            <h4 class="text-center fw-light mt-5"><a>Edit Password</a></h4>
                            <div class="card-body p-4 p-sm-5">
                                <form onSubmit={handleSubmit}>
                                    <div class="mb-4">
                                        <label for="inpPassword" class="form-label fw-light" >Old Password</label>
                                        <input type="text" class="form-control" id="inpPassword" value={oldpassword} onChange={(e) => setOldPassword(e.target.value)} />
                                        <div class="d-grid">
                                            {errorOldPassword && <div className="alert alert-danger p-1" role="alert">{errorOldPassword} </div>}
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <label for="inpPassword" class="form-label fw-light" >New Password</label>
                                        <input type="text" class="form-control" id="inpPassword" value={password} onChange={(e) => onChangePassword(e.target.value)} />
                                        <div class="d-grid">
                                            {errorPassword && <div className="alert alert-danger p-1" role="alert">{errorPassword} </div>}
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <label for="inpCPassword" class="form-label fw-light">Confirm New Password</label>
                                        <input type="text" class="form-control" id="inpCPassword" value={cpassword} onChange={(e) => onChangeCPassword(e.target.value)} />
                                        {errorCPassword && <div className="alert alert-danger p-1" role="alert">{errorCPassword} </div>}
                                    </div>
                                    <div class="d-grid">
                                        <button class="btn btn-primary btn-login btn-submit" type="submit">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default EditPassword;
