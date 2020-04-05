import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";

const XML = ({ values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue }) => {
    return (
        <>

            <TextField
                label="Type of delimeter"
                name='delimeterType'
                placeholder="/t"
                value={values.delimeterType}
                onChange={handleChange}
                InputLabelProps={{
                    shrink: true
                }}
                multiline
                fullWidth
                className="jr-wall-textarea"
                margin="normal"
                variant="outlined"
                required
                onBlur={handleBlur}
                error={errors.delimeterType && touched.delimeterType}
                helperText={errors.delimeterType && touched.delimeterType && errors.delimeterType}
            />

            <TextField
                label="S3 key"
                name='xmlURI'
                placeholder=""
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
                required
                onBlur={handleBlur}
                error={errors.query && touched.query}
                helperText={errors.query && touched.query && errors.query}
            />


            <TextField
                select
                className="form-textfield form-textfield-label"
                error={errors.dbURI && touched.dbURI}
                id="filled-multiline-static"
                label="Primary Key"
                name='primaryKey'
                required
                InputLabelProps={{
                    shrink: true
                }}
                value={values.dbURI}
                onChange={handleChange}
                placeholder="*******"
                margin="normal"
                variant="outlined"

                onBlur={handleBlur}
                fullWidth
                helperText={
                    errors.dbURI &&
                    touched.dbURI && errors.dbURI
                }
            >
                {primaryKeyData.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>


            <TextField
                label="Query Token"
                name='queryToken'
                placeholder=""
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
                onBlur={handleBlur}
                error={errors.query && touched.query}
                helperText={errors.query && touched.query && errors.query}
            />




            <TextField
                label="Replace Token"
                name='xmlURI'
                placeholder=""
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

                onBlur={handleBlur}
                error={errors.query && touched.query}
                helperText={errors.query && touched.query && errors.query}
            />




            <TextField
                select
                className="form-textfield form-textfield-label"
                error={errors.dbType && touched.dbType}
                id="filled-multiline-static"
                label="Fields to Compare"
                name='fieldsToCompare'
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
                {fieldsData.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>



        </>
    );
}

const primaryKeyData = [
    {
        value: "column1",
        label: "Column 1"
    },
    {
        value: "column2",
        label: "Column 2"
    },
];

const fieldsData = [
    {
        value: "column1",
        label: "Column 1"
    },
    {
        value: "column2",
        label: "Column 2"
    },
    {
        value: "column3",
        label: "Column 3"
    },
    {
        value: "column4",
        label: "Column 4"
    },
];


export default XML;