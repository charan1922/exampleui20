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
                name={`jsonURI${id}`}
                placeholder="https://"
                value={values[`jsonURI${id}`]}
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
                error={errors[`jsonURI${id}`] && touched[`jsonURI${id}`]}
                helperText={errors[`jsonURI${id}`] && touched[`jsonURI${id}`] && errors[`jsonURI${id}`]}
            />

            <TextField
                select
                className="form-textfield form-textfield-label"
                error={errors[`primryKey${id}`] && touched[`primryKey${id}`]}
                id="filled-multiline-static"
                label="Primary Key"
                name={`primryKey${id}`}
                required
                InputLabelProps={{
                    shrink: true
                }}
                value={values[`primryKey${id}`]}
                onChange={handleChange}
                placeholder="*******"
                margin="normal"
                variant="outlined"

                onBlur={handleBlur}
                fullWidth
                helperText={
                    errors[`primryKey${id}`] &&
                    touched[`primryKey${id}`] && errors[`primryKey${id}`]
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
                name={`queryToken${id}`}
                placeholder=""
                value={values[`queryToken${id}`]}
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
                error={errors[`queryToken${id}`] && touched[`queryToken${id}`]}
                helperText={errors[`queryToken${id}`] && touched[`queryToken${id}`] && errors[`queryToken${id}`]}
            />


            <TextField
                label="Replace Token"
                name={`replaceToken${id}`}
                placeholder=""
                value={values[`replaceToken${id}`]}
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
                error={errors[`replaceToken${id}`] && touched[`replaceToken${id}`]}
                helperText={errors[`replaceToken${id}`] && touched[`replaceToken${id}`] && errors[`replaceToken${id}`]}
            />


            <TextField
                select
                className="form-textfield form-textfield-label"
                error={errors[`fieldsToCompare${id}`] && touched[`fieldsToCompare${id}`]}
                label="Fields to Compare"
                name={`fieldsToCompare${id}`}
                InputLabelProps={{
                    shrink: true
                }}
                value={values[`fieldsToCompare${id}`]}
                onChange={handleChange}
                placeholder="*******"
                margin="normal"
                variant="outlined"
                required
                onBlur={handleBlur}
                fullWidth
                helperText={
                    errors[`fieldsToCompare${id}`] &&
                    touched[`fieldsToCompare${id}`] &&
                    errors[`fieldsToCompare${id}`]
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