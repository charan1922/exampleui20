import React, { useCallback, useState } from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PopoverOnHover from '../PopoverOnHover'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
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
            { title: 'JobId', field: 'jobId' },
            { title: 'JobName', field: 'jobName', render: rowData => <PopoverOnHover data={rowData} /> },
            { title: 'JobDescription', field: 'jobDesc' },
            // { title: 'Version', field: 'version', type: 'numeric' },
            // { title: 'Validate', field: 'jobValidate', render: icon => icon.jobValidate ?<span style={{color:"green"}}> <i className="material-icons">arrow_upward</i></span> : icon.jobValidate === false ? <span style={{color:"red"}}> <i className="material-icons">arrow_downward</i> </span> : ''},
            { title: 'Last modified date', field: 'lastModifiedDate', type: 'datetime' },
            {
                //title: 'Jobs', field: 'jobs', render: ({ jobs }) => <span>{jobs.reduce((ac, cv) => `${ac},${cv}`)}</span>
                title: '# Scenarios', field: 'scenarios', render: ({ scenarios }) => <span>{scenarios.length}</span>
            },
            // { title: 'JobDescription', field: 'jobDesc' },
            { title: 'Validate', field: 'jobValidate', render: icon => icon.jobValidate ? <span style={{ color: "green" }}> <i className="material-icons">arrow_upward</i></span> : icon.jobValidate === false ? <span style={{ color: "red" }}> <i className="material-icons">arrow_downward</i> </span> : '' },
        ],
        data: [
            { jobId: 'JOB_ID_01', jobName: 'db2_job_shashi', jobValidate: true, lastModifiedDate: '2020-04-02T09:30', scenarios: ['AnovaGPAR', 'GPAR', 'abcde', 'scenario20'], jobDesc: 'lorem ipsum covid-19' },
            { jobId: 'JOB_ID_02', jobName: 'multi_date_job_test', jobValidate: true, lastModifiedDate: '2017-06-02T11:22', scenarios: ['AnovaGPAR', 'GPAR', 'abcde'], jobDesc: 'multi_date_job_test' },
            { jobId: 'JOB_ID_03', jobName: 'two_scenarios_job', jobValidate: true, lastModifiedDate: '2019-10-16T15:15', scenarios: ['AnovaGPAR', 'abcde'], jobDesc: 'two-scenario_job' },
            { jobId: 'JOB_ID_05', jobName: 'three_scenarios_job', jobValidate: true, lastModifiedDate: '2019-10-16T15:15', scenarios: ['AnovaGPAR', 'abcde', 'fasytfduy', 'jhsgaudg'], jobDesc: 'two-scenario_job' },

        ],
    });


    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    // const [sourceOpen, setSourceOpen] = useState(false);
    const [placement, setPlacement] = useState();
    const [tableData, setTableData] = useState([]);
    //const [sourceFormsOpen, setSourceFormsOpen] = useState(false);
    // const [sourcesSelected, setSourceSelected] = useState([]);
    // const [ compareFieldsOpen, setCompareFieldsOpen] = useState(false);
    // const [ isTranslateOpen, setTranslate] = useState(false);
    const [executeJob, setExecuteJob] = useState(false);



    // const addData = (newData) => {
    //     setTimeout(() => {
    //         setState(prevState => {
    //             const data = [...prevState.data];
    //             data.push(newData);
    //             return { ...prevState, data };
    //         });
    //         setDialogOpen(false)
    //     }, 600);
    // }

    const handleClick = newPlacement => event => {
        setAnchorEl(event.currentTarget);
        setOpen(prev => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    // const updateSources = (sourceList) => {
    //     setSourceSelected(sourceList);
    //     setSourceOpen(false);
    //     setSourceFormsOpen(true);

    // }
    
    let invalidJobsData = tableData.length ? tableData.filter(item => !item.jobValidate || item.jobValidate === null) : [];
    let invalidJobs = invalidJobsData.length ? invalidJobsData.reduce((ac, cv) => `${ac.jobName}, ${cv.jobName}`) : null;
    
    let validJobsData = tableData.length ? tableData.filter(item => item.jobValidate) : []
    console.log(validJobsData, "l");
    let validJobs = validJobsData.length ? validJobsData.reduce((ac, cv) => {


        console.log(ac, "ac" , cv , "cv")
        return `${ac.jobName}, ${cv.jobName}`
    }
    
    
    ) : null;
    return (
        <>

            <Dialog open={executeJob} onClose={() => setExecuteJob(false)} fullWidth>
                <DialogTitle className={classes.dialogTitl}>
                    <IconButton onClick={() => setExecuteJob(false)} >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContentText id="alert-dialog-slide-description">
                    {invalidJobs ? invalidJobs + " validation and exicution will be failed" : null}<break />
                    {validJobs}{" "} is/are successful validation <break />
                </DialogContentText>
                <DialogActions>
                    <Button onClick={() => setExecuteJob(false)} color="primary">
                        terminate
          </Button>
                    <Button onClick={() => setExecuteJob(false)} color="primary">
                        confirm execute
          </Button>
                </DialogActions>
            </Dialog>

            {/*<Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth>*/}
            {/*    <DialogTitle className={classes.dialogTitle}>*/}
            {/*        <IconButton onClick={() => setDialogOpen(false)} >*/}
            {/*            <CloseIcon />*/}
            {/*        </IconButton>*/}
            {/*    </DialogTitle>*/}
            {/*    <DialogContent>*/}
            {/*        <AddJob addData={addData} />*/}
            {/*    </DialogContent>*/}
            {/*</Dialog>*/}

            {/*<Dialog open={sourceOpen} onClose={() => setSourceOpen(false)} fullWidth>*/}
            {/*    <DialogTitle className={classes.dialogTitle}>*/}
            {/*        <IconButton onClick={() => setSourceOpen(false)} >*/}
            {/*            <CloseIcon />*/}
            {/*        </IconButton>*/}
            {/*    </DialogTitle>*/}
            {/*    <DialogContent>*/}
            {/*        <AddSource updateSources={updateSources} />*/}
            {/*    </DialogContent>*/}
            {/*</Dialog>*/}

            {/*<Dialog open={sourceFormsOpen} onClose={() => setSourceFormsOpen(false)} fullWidth>*/}
            {/*    <DialogTitle className={classes.dialogTitl}>*/}
            {/*        <IconButton onClick={() => setSourceFormsOpen(false)} >*/}
            {/*            <CloseIcon />*/}
            {/*        </IconButton>*/}
            {/*    </DialogTitle>*/}

            {/*    <DialogContent>*/}
            {/*        <SourceForm sourcesSelected={sourcesSelected} tableData={tableData} showCompareFields={() => setCompareFieldsOpen(true)}/>*/}
            {/*    </DialogContent>*/}
            {/*</Dialog>*/}

            {/*<Dialog open={compareFieldsOpen} onClose={() => setCompareFieldsOpen(false)} fullScreen>*/}
            {/*    <DialogTitle className={classes.dialogTitl}>*/}
            {/*        <IconButton onClick={() => setCompareFieldsOpen(false)} >*/}
            {/*            <CloseIcon />*/}
            {/*        </IconButton>*/}
            {/*    </DialogTitle>*/}

            {/*    <DialogContent>*/}
            {/*        <CompareFields/>*/}
            {/*    </DialogContent>*/}
            {/*</Dialog>*/}

            {/*<Dialog open={isTranslateOpen} onClose={() => setTranslate(false)} fullScreen>*/}
            {/*    <DialogTitle className={classes.dialogTitl}>*/}
            {/*        <IconButton onClick={() => setTranslate(false)} >*/}
            {/*            <CloseIcon />*/}
            {/*        </IconButton>*/}
            {/*    </DialogTitle>*/}

            {/*    <DialogContent>*/}
            {/*        <CompreTolerance  setTranslate={ () => setTranslate(false)}/>*/}
            {/*    </DialogContent>*/}
            {/*</Dialog>*/}

            {/* <Button onClick={handleClick('top')}>Validate</Button> */}
            {/*<Button onClick={() => setDialogOpen(true)}>Add Scenario</Button>*/}
            {/*<Button onClick={() => setTranslate(true)}>Translation</Button>*/}
            {/*<Button disabled={tableData.length === 1 ? false : 'disabled'} onClick={() => setSourceOpen(true)}>Add Source</Button>*/}

            <MaterialTable
                title="Jobs List"
                columns={state.columns}
                data={state.data}
                options={{
                    selection: true
                }}
                onSelectionChange={(rows) => setTableData(rows)}
                editable={{
                    // onRowAdd: newData =>
                    //     new Promise(resolve => {
                    //         setTimeout(() => {
                    //             resolve();
                    //             setState(prevState => {
                    //                 const data = [...prevState.data];
                    //                 data.push(newData);
                    //                 return { ...prevState, data };
                    //             });
                    //         }, 600);
                    //     }),
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

            {/* <Button onClick={handleClick} secondary>Validate</Button> */}
            <Button onClick={handleClick('top')}>Validate</Button>
            {/* <Button onClick={() => setDialogOpen(true)}>Add Scenario</Button> */}
            <Button disabled={tableData.length ? false : 'disabled'} onClick={() => setExecuteJob(true)}>Execute JOB</Button>
            {/* <Button>Execute job</Button> */}

            {/* popper */}
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {/* <Popover open={open} anchorEl={anchorEl} placement={placement} transition> */}
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <Card className={classes.root}>
                                {tableData.map(item => {
                                    const { jobId, jobName, jobValidate, jobDesc } = item; // lastModifiedDate, scenarios,
                                    return (
                                        <CardContent key={jobId}>
                                            <Typography variant="h5" component="h2">{jobId}</Typography>
                                            <Typography variant="body2" component="p"> Job name : {jobName}</Typography>
                                            <Typography variant="body2" component="p"> Job Description : {jobDesc}</Typography>
                                            <Typography variant="body2" component="p"> Job Validate : {jobValidate ? "True" : "FALSE"} </Typography>
                                            {/*<Typography variant="body2" component="p"> Recipient email : {version}</Typography>*/}
                                            {/*<Typography variant="body2" component="p"> Global Net : {jobs}</Typography>*/}
                                        </CardContent>
                                    );
                                })}
                            </Card>
                        </Paper>
                    </Fade>
                )}
            </Popper>
            {/* </Popover> */}
        </>
    );
}
