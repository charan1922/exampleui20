import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";

const DB = ({ values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    sourceDetails }) => {
    const { id, label, name, sourceType } = sourceDetails;
    return (
        <>
            <label>{label}</label>
            <TextField
                select
                className="form-textfield form-textfield-label"
                name={`dbURI${id}`}
                error={errors[`dbURI${id}`] && touched[`dbURI${id}`]}
                label="DB URI"
                InputLabelProps={{
                    shrink: true
                }}
                value={values[`dbURI${id}`]}
                onChange={handleChange}
                placeholder="*******"
                margin="normal"
                variant="outlined"
                required
                onBlur={handleBlur}
                fullWidth
                helperText={
                    errors[`dbURI${id}`] &&
                    touched[`dbURI${id}`] &&
                    errors[`dbURI${id}`]
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
                name={`dbType${id}`}
                error={errors[`dbType${id}`] && touched[`dbType${id}`]}
                label="DB Type"
                InputLabelProps={{
                    shrink: true
                }}
                value={values[`dbType${id}`]}
                onChange={handleChange}
                placeholder="*******"
                margin="normal"
                variant="outlined"
                required
                onBlur={handleBlur}
                fullWidth
                helperText={
                    errors[`dbType${id}`] &&
                    touched[`dbType${id}`] &&
                    errors[`dbType${id}`]
                }
            >
                {dbTypeData.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>


            <TextField
                name={`querySql${id}`}
                placeholder="query SQL"
                label="Query SQL"
                value={values[`querySql${id}`]}
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
                error={errors[`querySql${id}`] && touched[`querySql${id}`]}
                helperText={errors[`querySql${id}`] && touched[`querySql${id}`] && errors[`querySql${id}`]}
            />
        </>
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



export default DB;