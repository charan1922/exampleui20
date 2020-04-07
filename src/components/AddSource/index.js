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

    const [sId, setId] = useState(1);
    const [sourceList, setSource] = useState([{
        id: sId,
        label: "Source" + ' ' + sId,
        name: "source" + sId,
    }]);

    const addSource = () => {
        const souceData = {
            id: sId + 1,
            label: "Source" + ' ' + (sId + 1),
            name: "source" + (sId + 1)
            // date: new Date().toString(),
        };

        setId(sId + 1)
        setSource([...sourceList, souceData]);
        // setSource(prevState => {
        //     const data = [...prevState.sourceList];
        //     data.push(souceData);
        //     return { ...prevState, data };
        //   });
    };


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Formik
                initialValues={initialValues}
                validationSchema={passwordSchema}
                onSubmit={(values) => {
                    let data = [];
                    sourceList.map(item => {
                        data.push({ ...item, 'sourceType': values[item.name] });
                    })

                    props.updateSources(data);
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
                            {sourceList.map(sData => {
                                const { id, label, name } = sData;
                                return (
                                    < TextField
                                        select
                                        className="form-textfield form-textfield-label"
                                        error={errors[name] && touched[name]}
                                        id={id}
                                        label={label}
                                        name={name}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        value={values[name]}
                                        onChange={handleChange}
                                        placeholder="*******"
                                        margin="normal"
                                        variant="outlined"
                                        required
                                        onBlur={handleBlur}
                                        fullWidth
                                        helperText={
                                            errors[name] &&
                                            touched[name] &&
                                            errors[name]
                                        }
                                    >
                                        {sourcedata.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                );
                            })}

                            <div className={classes.container}>
                                <Button onClick={handleReset} variant="contained">
                                    Reset
                               </Button>

                                <Button onClick={addSource} variant="contained">
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
        </div >
    );
}


const sourcedata = [
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
    // source2: '',
}
const passwordSchema = Yup.object().shape({
    source1: Yup.string()
        .required('Required'),
    // source2: Yup.string()
    //     .required('Required'),
});

export default AddSource;
