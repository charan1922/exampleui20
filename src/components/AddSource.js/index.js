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
        justifyContent: "space-between"
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
                    const { source1, source2 } = values;
                    
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
                                error={errors.source1 && touched.source1}
                                id="filled-multiline-static"
                                label="Source 1"
                                name='source1'
                                InputLabelProps={{
                                    shrink: true
                                }}
                                value={values.source1}
                                onChange={handleChange}
                                placeholder="*******"
                                margin="normal"
                                variant="outlined"
                                required
                                onBlur={handleBlur}
                                fullWidth
                                helperText={
                                    errors.source1 &&
                                    touched.source1 &&
                                    errors.source1
                                }
                            >
                                {source1data.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                select
                                className="form-textfield form-textfield-label"
                                error={errors.source2 && touched.source2}
                                id="filled-multiline-static"
                                label="Source 2"
                                name='source2'
                                InputLabelProps={{
                                    shrink: true
                                }}
                                value={values.source2}
                                onChange={handleChange}
                                placeholder="*******"
                                margin="normal"
                                variant="outlined"
                                required
                                onBlur={handleBlur}
                                fullWidth
                                helperText={
                                    errors.source2 &&
                                    touched.source2 &&
                                    errors.source2
                                }
                            >
                                {source2data.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>



                            <div className={classes.container}>
                                <Button  variant="contained">
                                    Add Source
                               </Button>

                                <Button variant="contained" type="submit">
                                    Save
                            </Button>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </div>
    );
}


const source1data = [
    {
        value: "db",
        label: "DB"
    },
    {
        value: "delimeter",
        label: "Delimeter"
    },
    {
        value: "json",
        label: "JSON"
    },
    {
        value: "xml",
        label: "XML"
    },
    {
        value: "api",
        label: "API"
    }
];

const source2data = [
    {
        value: "db",
        label: "DB"
    },
    {
        value: "delimeter",
        label: "Delimeter"
    },
    {
        value: "json",
        label: "JSON"
    },
    {
        value: "xml",
        label: "XML"
    },
    {
        value: "api",
        label: "API"
    }
];

const initialValues = {
    source1: '',
    source2: '',
}
const passwordSchema = Yup.object().shape({
    source1: Yup.string()
        .required('Required'),
    source2: Yup.string()
        .required('Required'),
});

export default AddSource;