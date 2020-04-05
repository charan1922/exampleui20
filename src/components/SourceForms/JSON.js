import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";

const XML = ({ values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    sourceDetails
}) => {
    const { id, label, name, sourceType } = sourceDetails;
    return (
        <>
            <label>{label}</label>
            <TextField
                label="JSON URI"
                name='jsonURI'
                placeholder="https://"
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
                error={errors.jsonPrimaryKey && touched.jsonPrimaryKey}
                id="filled-multiline-static"
                label="Primary Key"
                name='primryKey'
                required
                InputLabelProps={{
                    shrink: true
                }}
                value={values.jsonPrimaryKey}
                onChange={handleChange}
                placeholder="*******"
                margin="normal"
                variant="outlined"

                onBlur={handleBlur}
                fullWidth
                helperText={
                    errors.jsonPrimaryKey &&
                    touched.jsonPrimaryKey && errors.dbURI
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
                name='replaceToken'
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
                error={errors.jsonType && touched.jsonType}
                id="filled-multiline-static"
                label="Fields to Compare"
                name='fieldsToCompare'
                InputLabelProps={{
                    shrink: true
                }}
                value={values.jsonType}
                onChange={handleChange}
                placeholder="*******"
                margin="normal"
                variant="outlined"
                required
                onBlur={handleBlur}
                fullWidth
                helperText={
                    errors.jsonType &&
                    touched.jsonType &&
                    errors.jsonType
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