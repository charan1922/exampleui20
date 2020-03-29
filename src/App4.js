/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import { CircularProgress } from "@material-ui/core";
import { NotificationManager, NotificationContainer } from "react-notifications";
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        width: 500,
        '& > * + *': {
            margin: theme.spacing(3),
        },
    },
}));

const AddNewJob = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Formik
                initialValues={initialValues}
                validationSchema={passwordSchema}
                onSubmit={(values) => {
                    const { jobList, scenarioName, desc, recipentEmail, symphonybookURL, globalNetSubject } = values;


                }
                }
            >


                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    } = props;

                    return (
                        <form autoComplete="on" noValidate onSubmit={handleSubmit}>
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                name='jobList'
                                options={jobList}
                                style={{ margin: 8 }}
                                getOptionLabel={option => option.jobName}
                                defaultValue={[jobList[5]]}
                                filterSelectedOptions
                                renderInput={params => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        label="filterSelectedOptions"
                                        placeholder="Job(s)"
                                    />
                                )}
                            />

                            <div>
                                <TextField
                                    className="form-textfield form-textfield-label"
                                    error={errors.scenarioName && touched.scenarioName}
                                    id="filled-full-width"
                                    name='scenarioName'
                                    label="Scenario Name"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    value={values.scenarioName}
                                    onChange={handleChange}
                                    placeholder="*******"
                                    margin="normal"
                                    required
                                    onBlur={handleBlur}
                                    fullWidth
                                    helperText={
                                        errors.scenarioName &&
                                        touched.scenarioName &&
                                        errors.scenarioName
                                    }
                                />
                            </div>
                            <div>
                                <TextField
                                    className="form-textfield form-textfield-label"
                                    error={errors.desc && touched.desc}
                                    id="filled-multiline-static"
                                    label="Description"
                                    name='desc'
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    value={values.desc}
                                    onChange={handleChange}
                                    placeholder="*******"
                                    margin="normal"
                                    required
                                    onBlur={handleBlur}
                                    fullWidth
                                    helperText={
                                        errors.desc &&
                                        touched.desc &&
                                        errors.desc
                                    }
                                />


                            </div>

                            <TextField
                                className="form-textfield form-textfield-label"
                                error={errors.recipentEmail && touched.recipentEmail}
                                label="Recipent Email"
                                id="filled-margin-dense"
                                name='recipentEmail'
                                InputLabelProps={{
                                    shrink: true
                                }}
                                value={values.recipentEmail}
                                onChange={handleChange}
                                placeholder="*******"
                                margin="normal"
                                required
                                onBlur={handleBlur}
                                fullWidth
                                helperText={
                                    errors.recipentEmail &&
                                    touched.recipentEmail &&
                                    errors.recipentEmail
                                }
                            />


                            <div>

                                <TextField
                                    id="filled-margin-normal"
                                    className="form-textfield form-textfield-label"
                                    error={errors.globalNetSubject && touched.globalNetSubject}
                                    label="GlobalNet Subject"
                                    name="globalNetSubject"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    value={values.globalNetSubject}
                                    onChange={handleChange}
                                    placeholder="*******"
                                    margin="normal"
                                    required
                                    onBlur={handleBlur}
                                    fullWidth
                                    helperText={
                                        errors.globalNetSubject &&
                                        touched.globalNetSubject &&
                                        errors.globalNetSubject
                                    }
                                />


                            </div>
                            <TextField
                                id="filled-margin-normal"
                                className="form-textfield form-textfield-label"
                                error={errors.symphonybookURL && touched.symphonybookURL}
                                label="SymphonyBook URL"
                                name="symphonybookURL"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                value={values.symphonybookURL}
                                onChange={handleChange}
                                placeholder="*******"
                                margin="normal"
                                required
                                onBlur={handleBlur}
                                fullWidth
                                helperText={
                                    errors.symphonybookURL &&
                                    touched.symphonybookURL &&
                                    errors.symphonybookURL
                                }
                            />

                            <div className="mt-3 mb-2 d-flex justify-content-center align-items-center">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Add JOb
                        </Button>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </div>
    );
}

const jobList = [
    { jobName: 'The Shawshank Redemption' },
    { jobName: 'The Godfather' },
    { jobName: 'The Godfather: Part II' },
    { jobName: 'The Dark Knight' },
    { jobName: '12 Angry Men' },
    { jobName: "Schindler's List" },
    { jobName: 'Pulp Fiction' },
    { jobName: 'The Lord of the Rings: The Return of the King' },
];


const initialValues = {
    jobList: '',
    scenarioName: '',
    desc: '',
    recipentEmail: '',
    symphonybookURL: '',
    globalNetSubject: '',
}
const passwordSchema = Yup.object().shape({
    jobList: Yup.string()
        .required('Required'),
    scenarioName: Yup.string()
        .required('Required'),
    desc: Yup.string()
        .required('Required'),
    recipentEmail: Yup.string()
        .required('Required'),
    symphonybookURL: Yup.string()
        .required('Required'),
    globalNetSubject: Yup.string()
        .required('Required'),
});

export default AddNewJob;
