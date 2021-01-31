import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup";
import { addCoin } from "../../api/coinApi";
import { useHistory } from "react-router-dom";

const CoinForm = () => {
    const currentYear = new Date().getFullYear().toString();

    const validationSchema = Yup.object().shape({

        title: Yup.string()
            .max(50, "Max length 50")
            .required(),
        condition: Yup.string()
            .max(10, "Max length 50"),
        mintage: Yup.number()
            .positive("Only positive numbers")
            .integer("Only integers"),
        metal: Yup.string()
            .max(10, "Max length 50"),
        hallmark: Yup.number()
            .positive("Only positive numbers")
            .max(1),
        weight: Yup.number()
            .positive("Only positive numbers")
            .required(),
        diameter: Yup.number()
            .positive("Only positive numbers")
            .required(),
        year: Yup.number()
            .max(currentYear, "Future date is not valid"),
        description: Yup.string()
            .max(160, "Max length 160")
            .required(),
        price: Yup.number()
            .positive()
            .required(),
        telephone: Yup.string()
            .matches(/^(((\+370)|8)([0-9]{8}))$/, 'Phone number is invalid')
    })


    const history = useHistory();

    const handleOnSubmit = (formValues, formikHelpers) => {
        formikHelpers.setSubmitting(true);
        addCoin(formValues)
            .then(() => {
                history.push("/coins");
            })
            .finally(() => {
                formikHelpers.setSubmitting(false);
            })
    }

    return (
        <Formik
            initialValues={{
                img_reverse: '',
                img_obverse: '',
                title: '',
                condition: '',
                mintage: '',
                metal: '',
                hallmark: '',
                weight: '',
                diameter: '',
                year: '',
                description: '',
                price: '',
                telephone: ''
            }}
            validationSchema={validationSchema}
            onSubmit={handleOnSubmit}
            >

            {(props) => (
                <>

                    <Form className="mx-4">

                        <div className="form-group">
                            <label htmlFor="img_reverse">Title:</label>
                            <Field name="img_reverse" id="img_reverse" className="form-control"
                                   placeholder="Please upload coin reverse image" type="file" accept="image/*"/>
                            <ErrorMessage name="img_reverse" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="img_obverse">Title:</label>
                            <Field name="img_obverse" id="img_obverse" className="form-control"
                                   placeholder="Please upload coin obverse image" type="file" accept="image/*"/>
                            <ErrorMessage name="img_obverse" component="small" className="form-text text-danger" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <Field name="title" id="title" className="form-control"
                                   placeholder="Please enter title"/>
                            <ErrorMessage name="title" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="condition">Condition:</label>
                            <Field name="condition" id="condition" className="form-control"
                                   placeholder="Please enter coin condition"/>
                            <ErrorMessage name="condition" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="mintage">Mintage:</label>
                            <Field name="mintage" id="mintage" className="form-control"
                                   placeholder="Please enter coin mintage"/>
                            <ErrorMessage name="mintage" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="metal">Metal:</label>
                            <Field name="metal" id="metal" className="form-control"
                                   placeholder="Please enter coin metal"/>
                            <ErrorMessage name="metal" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="hallmark">Hallmark:</label>
                            <Field name="hallmark" id="hallmark" className="form-control"
                                   placeholder="Please enter coin hallmark"/>
                            <ErrorMessage name="hallmark" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="weight">Weight:</label>
                            <Field name="weight" id="weight" className="form-control"
                                   placeholder="Please enter coin weight"/>
                            <ErrorMessage name="weight" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="diameter">Diameter:</label>
                            <Field name="diameter" id="diameter" className="form-control"
                                   placeholder="Please enter coin diameter"/>
                            <ErrorMessage name="diameter" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="year">Year:</label>
                            <Field name="year" id="year" className="form-control"
                                   placeholder="Please enter coin year"/>
                            <ErrorMessage name="year" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <Field name="description" id="description" className="form-control"
                                   placeholder="Please enter coin description" component="textarea"
                                   rows="10"/>
                            <ErrorMessage name="description" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Price:</label>
                            <Field name="price" id="price" className="form-control"
                                   placeholder="Please enter coin Price"/>
                            <ErrorMessage name="price" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="telephone">Phone number:</label>
                            <Field name="telephone" id="telephone" className="form-control"
                                   placeholder="Please enter your telephone"/>
                            <ErrorMessage name="telephone" component="small" className="form-text text-danger"/>
                        </div>

                        <button type="submit" className="btn btn-primary mt-2" disabled={ props.isSubmitting }>Add Coin</button>
                    </Form>
                </>
            )}
        </Formik>
    )
}

export default CoinForm;
