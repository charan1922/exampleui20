import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import App4 from './App4'
import AddSource from "./components/AddSource.js";
import DialogContent from '@material-ui/core/DialogContent';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});






export default function MaterialTableDemo() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: 'Id', field: 'id' },
      { title: 'Name', field: 'name' },
      { title: 'Version', field: 'version', type: 'numeric' },
      { title: 'Validate', field: 'validate', render: icon => icon.validate ? <i className="material-icons">arrow_upward</i> : <i className="material-icons">arrow_downward</i> },
      { title: 'Last modified date', field: 'lastModifiedDate', type: 'datetime' },
      { title: 'Jobs', field: 'jobs' },
      { title: 'Description', field: 'desc' },
    ],
    data: [
      { id: '5cd9307025f4f0572995990f', name: 'Hunt Valdez', version: 1.2, validate: true, lastModifiedDate: '2017-06-02T11:22', jobs: 'AnovaGPAR', desc: 'lorem ipsum covid-19' },
      { id: '5cd9307025f4f0572995990k', name: 'Jack Valdez', version: 1.0, validate: false, lastModifiedDate: '2018-04-02T11:22', jobs: 'VIBGYOR', desc: 'ipsum covid-19' },

    ],
  });


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [sourceOpen, setSourceOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const [tableData, setTableData] = React.useState([]);

  const addData = (newData) => {
    console.log(newData)
    setTimeout(() => {
      setState(prevState => {
        const data = [...prevState.data];
        data.push(newData);
        return { ...prevState, data };
      });
      setDialogOpen(false)
    }, 600);
  }

  const handleClick = newPlacement => event => {
    setAnchorEl(event.currentTarget);
    setOpen(prev => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth>
        <DialogContent>
          <App4 addData={addData} />
        </DialogContent>
      </Dialog>

      <Dialog open={sourceOpen} onClose={() => setSourceOpen(false)} fullWidth>
        <DialogContent>
          <AddSource />
        </DialogContent>
      </Dialog>

      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Card className={classes.root}>
                {tableData.map(item => {
                  const { id, name, version, validate, lastModifiedDate, jobs, desc } = item;
                  return (
                    <CardContent key={id}>
                      <Typography variant="h5" component="h2">{id}</Typography>
                      <Typography variant="body2" component="p"> Job name : {name}</Typography>
                      <Typography variant="body2" component="p"> Scenario name : {name}</Typography>
                      <Typography variant="body2" component="p"> Scenario desc : {desc}</Typography>
                      <Typography variant="body2" component="p"> Recipient email : {version}</Typography>
                      <Typography variant="body2" component="p"> Global Net : {jobs}</Typography>
                    </CardContent>
                  );
                })}
              </Card>
            </Paper>
          </Fade>
        )}
      </Popper>
      <MaterialTable
        title="Scenario Details"
        columns={state.columns}
        data={state.data}
        options={{
          selection: true
        }} 
        onSelectionChange={(rows) => setTableData(rows)}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />

      <Button onClick={() => handleClick('top')}>Validate</Button>
      <Button onClick={() => setDialogOpen(true)}>Add New</Button>
      <Button onClick={() => setSourceOpen(true)}>Add Source</Button>

    </>
  );
}
