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
import API from './API';
import DB from './DB';
import JSON from './JSON';
import XML from './XML'
import Delimeter from './Delimeter';

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



                            {"api"}
                            <API {...props} />
                            {'db'}
                            <DB {...props} />
                            {"json"}
                            <JSON {...props} />
                            {'delimeter'}
                            <Delimeter {...props} />
                            {"xml"}
                            <XML {...props} />

                            <div className={classes.container}>
                                <Button type="submit" variant="contained">
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
