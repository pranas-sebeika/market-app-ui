import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik"
import * as Yup from "yup";
import {addCoin} from "../../api/coinApi";
import {useHistory} from "react-router-dom";
import {useTranslation} from 'react-i18next';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {Button} from "react-bootstrap";

const CoinForm = () => {
    const [obverse, setObverse] = useState(null)
    const [reverse, setReverse] = useState(null)
    const currentYear = new Date().getFullYear().toString();
    const {t} = useTranslation();

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

    const handleObverseUpload = (event) => {
        setObverse(event.target.files[0])
    }
    const handleReverseUpload = (event) => {
        setReverse(event.target.files[0])
    }

    const history = useHistory();

    const handleOnSubmit = (formValues, {setSubmitting}) => {
        setSubmitting(true);

        const data = new FormData()
        data.append('obverse', obverse)
        data.append('reverse', reverse)
        for (const field in formValues) {
            data.append(field, formValues[field])
        }

        addCoin(data)
            .then(({data}) => {
                history.push(`/coins/${data}`);
            })
            .finally(() => {
                setSubmitting(false);
            })
    }

    return (
        <div className="form-container">
            <div>
                <Button onClick={history.goBack}>
                    <ArrowBackIosIcon/>
                </Button>
                <Formik
                    initialValues={{
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
                                    <label htmlFor="obverse">{t("coin.obverse")}:</label>
                                    <Field name="obverse"
                                           id="obverse"
                                           className="form-control"
                                           placeholder={t("formPlaceholder.obverse")}
                                           type="file"
                                           accept="image/*"
                                           component="input"
                                           onChange={(e) => handleObverseUpload(e)}
                                    />
                                    <ErrorMessage name="obverse" component="small" className="form-text text-danger"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="reverse">{t("coin.reverse")}:</label>
                                    <Field name="reverse"
                                           id="reverse"
                                           className="form-control"
                                           placeholder={t("formPlaceholder.reverse")}
                                           type="file"
                                           accept="image/*"
                                           onChange={(e) => handleReverseUpload(e)}
                                    />
                                    <ErrorMessage name="reverse" component="small" className="form-text text-danger"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="title">{t("coin.title")}:</label>
                                    <Field name="title" id="title" className="form-control"
                                           placeholder={t("formPlaceholder.title")}/>
                                    <ErrorMessage name="title" component="small" className="form-text text-danger"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="condition">{t("coin.condition")}:</label>
                                    <Field name="condition" id="condition" className="form-control"
                                           placeholder={t("formPlaceholder.condition")}/>
                                    <ErrorMessage name="condition" component="small" className="form-text text-danger"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="mintage">{t("coin.mintage")}:</label>
                                    <Field name="mintage" id="mintage" className="form-control"
                                           placeholder={t("formPlaceholder.mintage")}/>
                                    <ErrorMessage name="mintage" component="small" className="form-text text-danger"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="metal">{t("coin.metal")}:</label>
                                    <Field name="metal" id="metal" className="form-control"
                                           placeholder={t("formPlaceholder.metal")}/>
                                    <ErrorMessage name="metal" component="small" className="form-text text-danger"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="hallmark">{t("coin.hallmark")}:</label>
                                    <Field name="hallmark" id="hallmark" className="form-control"
                                           placeholder={t("formPlaceholder.hallmark")}/>
                                    <ErrorMessage name="hallmark" component="small" className="form-text text-danger"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="weight">{t("coin.weight")}:</label>
                                    <Field name="weight" id="weight" className="form-control"
                                           placeholder={t("formPlaceholder.weight")}/>
                                    <ErrorMessage name="weight" component="small" className="form-text text-danger"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="diameter">{t("coin.diameter")}:</label>
                                    <Field name="diameter" id="diameter" className="form-control"
                                           placeholder={t("formPlaceholder.diameter")}/>
                                    <ErrorMessage name="diameter" component="small" className="form-text text-danger"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="year">{t("coin.year")}:</label>
                                    <Field name="year" id="year" className="form-control"
                                           placeholder={t("formPlaceholder.year")}/>
                                    <ErrorMessage name="year" component="small" className="form-text text-danger"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">{t("coin.description")}:</label>
                                    <Field name="description" id="description" className="form-control"
                                           placeholder={t("formPlaceholder.description")} component="textarea"
                                           rows="10"/>
                                    <ErrorMessage name="description" component="small"
                                                  className="form-text text-danger"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="price">{t("coin.price")}:</label>
                                    <Field name="price" id="price" className="form-control"
                                           placeholder={t("formPlaceholder.price")}/>
                                    <ErrorMessage name="price" component="small" className="form-text text-danger"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="telephone">{t("coin.telephone")}:</label>
                                    <Field name="telephone" id="telephone" className="form-control"
                                           placeholder={t("formPlaceholder.telephone")}/>
                                    <ErrorMessage name="telephone" component="small" className="form-text text-danger"/>
                                </div>

                                <button type="submit" className="btn btn-primary mt-2"
                                        disabled={props.isSubmitting}>{t("button.addCoin")}</button>
                            </Form>
                        </>
                    )}
                </Formik>
            </div>
        </div>

    )
}

export default CoinForm;
