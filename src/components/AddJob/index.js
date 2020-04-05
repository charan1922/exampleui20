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

const AddNewJob = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Formik
                initialValues={initialValues}
                validationSchema={passwordSchema}
                onSubmit={(values) => {
                    const { jobList, scenarioName, desc, recipentEmail, symphonybookURL, globalNetSubject } = values;
                    let data = { id: '5cd9307025f4f0572995990f', name: scenarioName, version: 1.0, validate: true, lastModifiedDate: '2017-06-02T11:22', jobs: 'AnovaGPAR', desc: desc };
                    props.addData(data);
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
                        handleSubmit,
                        setFieldValue
                    } = props;

                    return (
                        <form onSubmit={handleSubmit}>
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                name='jobList'
                                label="JobList"
                                options={jobList}
                                style={{ margin: 8 }}
                                onChange={(value) => setFieldValue('jobList', value)}
                                getOptionLabel={option => option.jobName}
                                defaultValue={[jobList[5]]}
                                filterSelectedOptions
                                renderInput={params => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        label="Job List"
                                        name='jobList'
                                        placeholder="Job(s)"
                                        // required
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        error={errors.jobList && touched.jobList}
                                        helperText={
                                            errors.jobList &&
                                            touched.jobList &&
                                            errors.jobList
                                        }
                                    />
                                )}
                            />

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



                            <TextField
                                className="form-textfield form-textfield-label"
                                error={errors.recipentEmail && touched.recipentEmail}
                                label="Recipent Email"
                                id="filled-margin-dense1"
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



                            <TextField
                                id="filled-margin-normal12"
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


                            <TextField
                                id="filled-margin-normal123"
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

                            <Button type="submit" variant="contained">
                                Add JOb
                           </Button>
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
