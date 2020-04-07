import React, { useState } from 'react';
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
import AddJob from './components/AddJob'
import AddSource from "./components/AddSource";
import DialogContent from '@material-ui/core/DialogContent';
import PopoverOnHover from './components/PopoverOnHover'
import SourceForm from './components/SourceForms'
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
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
  dialogTitle: {
    display: 'flex',
    justifyContent: "flex-end",
    // alignItems: "end"
  }
});


export default function MaterialTableDemo() {
  const classes = useStyles();
  const [state, setState] = useState({
    columns: [
      { title: 'Id', field: 'id' },
      { title: 'Name', field: 'name', render: rowData => <PopoverOnHover data={rowData} /> },
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


  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sourceOpen, setSourceOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const [tableData, setTableData] = useState([]);
  const [sourceFormsOpen, setSourceFormsOpen] = useState(false);
  const [sourcesSelected, setSourceSelected] = useState([]);



  const addData = (newData) => {
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


  const updateSources = (sourceList) => {
    setSourceSelected(sourceList);
    setSourceOpen(false);
    setSourceFormsOpen(true);

  }

  return (
    <>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth>
        <DialogTitle className={classes.dialogTitle}>
          <IconButton onClick={() => setDialogOpen(false)} >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <AddJob addData={addData} />
        </DialogContent>
      </Dialog>

      <Dialog open={sourceOpen} onClose={() => setSourceOpen(false)} fullWidth>
        <DialogTitle className={classes.dialogTitle}>
          <IconButton onClick={() => setSourceOpen(false)} >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <AddSource updateSources={updateSources} />
        </DialogContent>
      </Dialog>

      <Dialog open={sourceFormsOpen} onClose={() => setSourceFormsOpen(false)} fullWidth>
        <DialogTitle className={classes.dialogTitl}>
          <IconButton onClick={() => setSourceFormsOpen(false)} >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <SourceForm sourcesSelected={sourcesSelected} tableData={tableData} />
        </DialogContent>
      </Dialog>

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

      <Button onClick={handleClick('top')}>Validate</Button>
      <Button onClick={() => setDialogOpen(true)}>Add New</Button>
      <Button disabled={tableData.length === 1 ? false : 'disabled'} onClick={() => setSourceOpen(true)}>Add Source</Button>

      {/* popper */}
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
    </>
  );
}
