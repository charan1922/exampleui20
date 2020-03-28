/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Tags() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <center></center>
      {/* <Autocomplete
        multiple
        id="tags-standard"
        options={top100Films}
        getOptionLabel={option => option.title}
        defaultValue={[top100Films[13]]}
        renderInput={params => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      /> */}
      <div>

      </div>
      <div>

      </div>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={jobList}
        style={{ margin: 8 }}
        getOptionLabel={option => option.jobName}
        defaultValue={[jobList[5]]}
        filterSelectedOptions
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="filterSelectedOptions"
            placeholder="Job(s)"
          />
        )}
      />
      {/* <Autocomplete
        multiple
        id="tags-outlined"
        options={top100Films.map(option => option.title)}
        defaultValue={[top100Films[13].title]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={params => (
          <TextField {...params} variant="filled" label="freeSolo" placeholder="Favorites" />
        )}
      /> */}
      <div>
          <div>
        <TextField
          id="filled-full-width"
          label="Scenario Name"
          style={{ margin: 8 }}
          //placeholder="Scenario Name"
          //helperText="Full width!"
          //fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        </div>
        <div>
        <TextField
          id="filled-multiline-static"
          label="Description"
          style={{ margin: 8 }}
          multiline
          fullWidth
          rows="4"
          helperText="250 words"
          //defaultValue="Default Value"
          variant="filled"
        />
        </div>
        <TextField
          label="Recipent Email"
          id="filled-margin-dense"
          style={{ margin: 8 }}
          defaultValue=""
          className={classes.textField}
          helperText="Use';' to seperate email"
          margin="normal"
          variant="filled"
        />
        <div>
        <TextField
          label="GlobalNet Subject"
          id="filled-margin-normal"
          style={{ margin: 8 }}
          defaultValue=""
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="filled"
        />
        </div>
        <TextField
          label="SymphonyBook URL"
          id="filled-margin-normal"
          style={{ margin: 8 }}
          defaultValue=""
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="filled"
        />
        <div>
        {/* <TextField
          label="Normal"
          id="filled-margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="filled"
        /> */}
        </div>
      </div>
    </div>
  );
}

//List of jobs for teh selected scenario.
const jobList = [
  { jobName: 'The Shawshank Redemption' },
  { jobName: 'The Godfather' },
  { jobName: 'The Godfather: Part II'},
  { jobName: 'The Dark Knight' },
  { jobName: '12 Angry Men' },
  { jobName: "Schindler's List"},
  { jobName: 'Pulp Fiction'},
  { jobName: 'The Lord of the Rings: The Return of the King'}, 
];
