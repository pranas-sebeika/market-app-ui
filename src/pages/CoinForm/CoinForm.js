import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup";
import { addCoin } from "../../api/coinApi";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const CoinForm = () => {
    const currentYear = new Date().getFullYear().toString();
    const { t } = useTranslation();

    const validationSchema = Yup.object().shape({

        title: Yup.string()
            .max(50, `${t("formError.maxLength")} 50`)
            .required(`${t("formError.required")}`),
        condition: Yup.string()
            .max(10, `${t("formError.maxLength")} 10`),
        mintage: Yup.number()
            .typeError(`${t("formError.NaN")}`)
            .positive(`${t("formError.positiveNumber")}`)
            .integer(`${t("formError.integer")}`),
        metal: Yup.string()
            .max(10, `${t("formError.maxLength")} 10`),
        hallmark: Yup.number()
            .typeError(`${t("formError.NaN")}`)
            .positive(`${t("formError.positiveNumber")}`)
            .max(1, `${t("formError.maxNumber")} 1`),
        weight: Yup.number()
            .typeError(`${t("formError.NaN")}`)
            .positive(`${t("formError.positiveNumber")}`)
            .required(`${t("formError.required")}`),
        diameter: Yup.number()
            .typeError(`${t("formError.NaN")}`)
            .positive(`${t("formError.positiveNumber")}`)
            .required(`${t("formError.required")}`),
        year: Yup.number()
            .typeError(`${t("formError.NaN")}`)
            .max(currentYear, `${t("formError.futureDate")}`),
        description: Yup.string()
            .max(160, `${t("formError.maxLength")} 160`)
            .required(`${t("formError.required")}`),
        price: Yup.number()
            .typeError(`${t("formError.NaN")}`)
            .positive(`${t("formError.positiveNumber")}`)
            .required(`${t("formError.required")}`),
        telephone: Yup.string()
            .matches(/^(((\+370)|8)([0-9]{8}))$/, `${t("formError.phoneNumber")}`)
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
                            <label htmlFor="img_obverse">{t("coin.obverse")}:</label>
                            <Field name="img_obverse" id="img_obverse" className="form-control"
                                   placeholder="Please upload coin obverse image" type="file" accept="image/*"/>
                            <ErrorMessage name="img_obverse" component="small" className="form-text text-danger" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="img_reverse">{t("coin.reverse")}:</label>
                            <Field name="img_reverse" id="img_reverse" className="form-control"
                                   placeholder="Please upload coin reverse image" type="file" accept="image/*"/>
                            <ErrorMessage name="img_reverse" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">{t("coin.title")}:</label>
                            <Field name="title" id="title" className="form-control"
                                   placeholder="Please enter title"/>
                            <ErrorMessage name="title" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="condition">{t("coin.condition")}:</label>
                            <Field name="condition" id="condition" className="form-control"
                                   placeholder="Please enter coin condition"/>
                            <ErrorMessage name="condition" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="mintage">{t("coin.mintage")}:</label>
                            <Field name="mintage" id="mintage" className="form-control"
                                   placeholder="Please enter coin mintage"/>
                            <ErrorMessage name="mintage" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="metal">{t("coin.metal")}:</label>
                            <Field name="metal" id="metal" className="form-control"
                                   placeholder="Please enter coin metal"/>
                            <ErrorMessage name="metal" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="hallmark">{t("coin.hallmark")}:</label>
                            <Field name="hallmark" id="hallmark" className="form-control"
                                   placeholder="Please enter coin hallmark"/>
                            <ErrorMessage name="hallmark" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="weight">{t("coin.weight")}:</label>
                            <Field name="weight" id="weight" className="form-control"
                                   placeholder="Please enter coin weight"/>
                            <ErrorMessage name="weight" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="diameter">{t("coin.diameter")}:</label>
                            <Field name="diameter" id="diameter" className="form-control"
                                   placeholder="Please enter coin diameter"/>
                            <ErrorMessage name="diameter" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="year">{t("coin.year")}:</label>
                            <Field name="year" id="year" className="form-control"
                                   placeholder="Please enter coin year"/>
                            <ErrorMessage name="year" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">{t("coin.description")}:</label>
                            <Field name="description" id="description" className="form-control"
                                   placeholder="Please enter coin description" component="textarea"
                                   rows="10"/>
                            <ErrorMessage name="description" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">{t("coin.price")}:</label>
                            <Field name="price" id="price" className="form-control"
                                   placeholder="Please enter coin Price"/>
                            <ErrorMessage name="price" component="small" className="form-text text-danger"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="telephone">{t("coin.telephone")}:</label>
                            <Field name="telephone" id="telephone" className="form-control"
                                   placeholder="Please enter your telephone"/>
                            <ErrorMessage name="telephone" component="small" className="form-text text-danger"/>
                        </div>

                        <button type="submit" className="btn btn-primary mt-2" disabled={ props.isSubmitting }>{t("button.addCoin")}</button>
                    </Form>
                </>
            )}
        </Formik>
    )
}

export default CoinForm;
