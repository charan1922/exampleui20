import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";

const DB = ({ values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue }) => {
    return (
        <>
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
                error={errors.query && touched.query}
                helperText={errors.query && touched.query && errors.query}
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