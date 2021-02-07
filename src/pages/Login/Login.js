import React, {useContext, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Field, Form, Formik} from "formik";
import {createUser, login} from "../../api/userApi";
import {useLocation, useHistory} from "react-router-dom";
import {Button} from "react-bootstrap";
import {UserContext} from "../../App";


//TODO MAKE STYLE
const useStyles = makeStyles((theme) => ({}));

export default (props) => {
    const [isLogin, setIsLogin] = useState(true)
    const { addUser } = useContext(UserContext)
    const location = useLocation()
    const history = useHistory()



    const toggle = () => {
        if (isLogin) {
            setIsLogin(false)
        } else {
            setIsLogin(true)
        }
    }

    const handleLogin = (userCredentials, { setSubmitting }) => {
        setSubmitting(true)

        login(userCredentials)
            .then(({data, headers: { authorization }, status}) => {
                if (status === 200) {
                    addUser(data)
                    localStorage.setItem('token', authorization)
                    const { from } = location.state || {
                        from: {
                            pathname: '/'
                        }
                    }
                    history.push(from)
                }

            })
            .finally(setSubmitting(false))
    }

    const handleCreateUser = (newUser, { setSubmitting }) => {
        setSubmitting(true)

        createUser(newUser)
            .then(({data}) => {
                console.log(data);
            })
            .finally(setSubmitting(false))
    };


    return (
        <>

            {
                isLogin ? (

                        <Formik
                            initialValues={{
                                username: '',
                                password: ''
                            }}
                            onSubmit={handleLogin}
                        >
                            {(props) => (
                                <Form>
                                    <h3>Log in</h3>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <Field id="username" name="username" type="username" className="form-control"
                                               placeholder="Enter username"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Field id="password" name="password" type="password" className="form-control"
                                               placeholder="Enter password"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <span style={{cursor: 'pointer'}} onClick={
                                                toggle
                                            }>Don't have account? Create one</span>
                                        </div>
                                    </div>
                                    <Button type="submit" className="btn btn-dark btn-lg btn-block"
                                            disabled={props.isSubmitting}>Login
                                    </Button>
                                </Form>
                            )}
                        </Formik>

                    ) :
                    (
                        <Formik
                            initialValues={{
                                username: '',
                                email: '',
                                password: '',
                                confirm: ''

                            }}
                            onSubmit={handleCreateUser}
                        >
                            {(props) => (

                                <Form>

                                    <h3>Sign Up</h3>

                                    <div className="form-group">
                                        <label>Username</label>
                                        <Field id="username" name="username" type="username" className="form-control" placeholder="Enter username"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <Field id="email" name="email" type="email" className="form-control" placeholder="Enter email"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <Field id="password" name="password" type="password" className="form-control" placeholder="Enter password"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <Field id="confirm" name="confirm" type="password" className="form-control" placeholder="Confirm password"/>
                                    </div>

                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <span style={{cursor: 'pointer'}}
                                                  onClick={toggle}>Have account? Login</span>
                                        </div>
                                    </div>

                                    <Button type="submit" className="btn btn-dark btn-lg btn-block">Create</Button>

                                </Form>
                            )}
                        </Formik>
                    )
            }

        </>
    )
}

