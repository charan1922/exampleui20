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


const getSourceForm = (sourceDetails, props) => {
    const { id, label, name, sourceType } = sourceDetails;
    switch (sourceType) {
        case 'api':
            return <API sourceDetails={sourceDetails} {...props} />;
        case 'xml':
            return <XML sourceDetails={sourceDetails} {...props} />;
        case 'json':
            return <JSON sourceDetails={sourceDetails} {...props} />;
        case 'db':
            return <DB sourceDetails={sourceDetails} {...props} />;
        case 'delimeter':
            return <Delimeter sourceDetails={sourceDetails} {...props} />;
        default:
            return null;
    }
}

const AddSource = (props) => {
    const classes = useStyles();
    const { sourcesSelected, tableData } = props;
    return (
        <div className={classes.root}>
            <Formik
                initialValues={initialValues}
                validationSchema={passwordSchema}
                onSubmit={(values) => {
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
                        setFieldValue,
                        handleReset
                    } = props;

                    return (
                        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                            {tableData && tableData.map(item => {
                                const { id, name, version, validate, lastModifiedDate, jobs, desc } = item;
                                return (
                                    <>
                                        <ul style={{ listStyle: 'none' }}>
                                            <li><b>Job Name</b> : {jobs}</li>
                                            <li><b>Scenario Name</b> : {name}</li>
                                            <li><b>Scenario Description</b> : {desc}</li>
                                        </ul>
                                    </>);

                            })}

                            {sourcesSelected && sourcesSelected.map(src => {
                                return getSourceForm(src, props);
                            })}

                            <div className={classes.container}>
                                <Button onClick={handleReset} variant="contained">
                                    Reset
                            </Button>
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
