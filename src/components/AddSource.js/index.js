/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import { CircularProgress } from "@material-ui/core";
import { NotificationManager, NotificationContainer } from "react-notifications";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";


const useStyles = makeStyles(theme => ({
    root: {
        width: 500,
        '& > * + *': {
            margin: theme.spacing(3),
        },
    },
    card: {
        maxWidth: 420,
        marginTop: 50
    },
    container: {
        display: "Flex",
        justifyContent: "center"
    },
    actions: {
        float: "right"
    }
}));

const AddSource = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Formik
                initialValues={initialValues}
                validationSchema={passwordSchema}
                onSubmit={(values) => {
                    const { dbURI, dbType, query } = values;
                    console.log(values);
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
                        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <TextField
                                select
                                className="form-textfield form-textfield-label"
                                error={errors.dbURI && touched.dbURI}
                                id="filled-multiline-static"
                                label="DB URI"
                                name='dbURI'
                                InputLabelProps={{
                                    shrink: true
                                }}
                                value={values.dbURI}
                                onChange={handleChange}
                                placeholder="*******"
                                margin="normal"
                                variant="outlined"
                                required
                                onBlur={handleBlur}
                                fullWidth
                                helperText={
                                    errors.dbURI &&
                                    touched.dbURI &&
                                    errors.dbURI
                                }
                            >
                                {dbURIdata.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <TextField
                                select
                                className="form-textfield form-textfield-label"
                                error={errors.dbType && touched.dbType}
                                id="filled-multiline-static"
                                label="DB Type"
                                name='dbType'
                                InputLabelProps={{
                                    shrink: true
                                }}
                                value={values.dbType}
                                onChange={handleChange}
                                placeholder="*******"
                                margin="normal"
                                variant="outlined"
                                required
                                onBlur={handleBlur}
                                fullWidth
                                helperText={
                                    errors.dbType &&
                                    touched.dbType &&
                                    errors.dbType
                                }
                            >
                                {dbTypeData.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>


                            <TextField
                                id="query"
                                placeholder="query SQL"
                                label="Query SQL"
                                value={values.query}
                                onChange={handleChange}
                                InputLabelProps={{
                                    shrink: true
                                }}
                                multiline
                                fullWidth
                                className="jr-wall-textarea"
                                margin="normal"
                                variant="outlined"
                                rows="8"
                                required
                                onBlur={handleBlur}
                                fullWidth
                                error={errors.query && touched.query}
                                helperText={errors.query && touched.query && errors.query}
                            />

                            <Button type="submit" variant="contained">
                                Add Source
                            </Button>
                        </form>
                    );
                }}
            </Formik>
        </div>
    );
}


const dbURIdata = [
    {
        value: "IDQUAL",
        label: "IDQUAL"
    },
    {
        value: "IDQUAL1",
        label: "IDQUAL2"
    },
    {
        value: "IDQUAL1",
        label: "IDQUAL2"
    }
];

const dbTypeData = [
    {
        value: "oracle",
        label: "ORACLE"
    },
    {
        value: "mySql",
        label: "My SQL"
    },
    {
        value: "postgres",
        label: "POSTGRES"
    }
];

const initialValues = {
    dbURI: '',
    dbType: '',
    query: '',
}
const passwordSchema = Yup.object().shape({
    dbURI: Yup.string()
        .required('Required'),
    dbType: Yup.string()
        .required('Required'),
    query: Yup.string()
        .required('Required'),
});

export default AddSource;
