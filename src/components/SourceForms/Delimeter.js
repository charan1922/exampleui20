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
                label="Type of delimeter"
                name={`delimeterType${id}`}
                placeholder="/t"
                value={values[`delimeterType${id}`]}
                onChange={handleChange}
                InputLabelProps={{
                    shrink: true
                }}
                fullWidth
                className="jr-wall-textarea"
                margin="normal"
                variant="outlined"
                required
                onBlur={handleBlur}
                error={errors[`delimeterType${id}`] && touched[`delimeterType${id}`]}
                helperText={errors[`delimeterType${id}`] && touched[`delimeterType${id}`] && errors[`delimeterType${id}`]}
            />

            <TextField
                label="S3 key"
                name={`s3Key${id}`}
                placeholder=""
                value={values[`s3Key${id}`]}
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
                error={errors[`s3Key${id}`] && touched[`s3Key${id}`]}
                helperText={errors[`s3Key${id}`] && touched[`s3Key${id}`] && errors[`s3Key${id}`]}
            />

            <TextField
                select
                className="form-textfield form-textfield-label"
                error={errors.dbURI && touched.dbURI}
                label="Primary Key"
                name={`primaryKey${id}`}
                required
                InputLabelProps={{
                    shrink: true
                }}
                value={values[`primaryKey${id}`]}
                onChange={handleChange}
                placeholder="*******"
                margin="normal"
                variant="outlined"
                onBlur={handleBlur}
                fullWidth
                helperText={
                    errors[`primaryKey${id}`] &&
                    touched[`primaryKey${id}`] && errors[`primaryKey${id}`]
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
                name={`fieldsToCompare${id}`}
                error={errors[`fieldsToCompare${id}`] && touched[`fieldsToCompare${id}`]}
                label="Fields to Compare"
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