import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns'; 
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

// Services imports
import {addConsignment} from '../../services/ConsignmentService'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  submitBtn:{
      backgroundColor:'#00A300'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 360,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



export default function ConsignmentForm({shippers, lines, vessels, api_url}) {
  const classes = useStyles();

  //State variables
  const [shipperState, setShipperState] = useState({ shipper: '', id: '', });
  const [lineState, setLineState] = useState({ line: '', id: '', });
  const [vesselState, setVesselState] = useState({ vessel: '', id: '', });
  const [statusState, setStatusState] = useState({status:''});
  const [formData, updateFormData] = useState();

  // end of state variables


  const handleShipperChange = (event) => {
    const name = event.target.name;
    setShipperState({
      ...shipperState,
      [name]: event.target.value,
    });
    handleFormChange(event)
  };

  const handleLineChange = (event) => {
    const name = event.target.name;
    setLineState({
      ...lineState,
      [name]: event.target.value,
    });
    handleFormChange(event)
  };

  const handleVesselChange = (event) => {
    const name = event.target.name;
    setVesselState({
      ...vesselState,
      [name]: event.target.value,
    });
    handleFormChange(event)
  };

  const handleStatusChange = (event) => {
    const name = event.target.name;
    setStatusState({
      ...statusState,
      [name]: event.target.value,
    });
    
    handleFormChange(event)
  };

  // Handles arrival and departure dates for consignments
  const [deptDate, setDeptDate] = useState(new Date());
  const [arrDate, setArrDate] = useState(new Date());

  const handleDeptDateChange = (x,event) => {
    const current_datetime = new Date(x)
    const formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" +current_datetime.getDate() ;
    setDeptDate(formatted_date);
    updateFormData({
      ...formData,
      'departure': formatted_date.toString()
    });
  };
  const handleArrDateChange = (x, event) => {
    const current_datetime = new Date(x)
    const formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" +current_datetime.getDate() ;
    setArrDate(formatted_date);
    updateFormData({
      ...formData,
      'arrival': formatted_date.toString()
    });
  };

  
  // Grabs the values from the form
  const handleFormChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };
  //Handles the submission of form values
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    
    //add consignment to database
    (async () => {
      const res = await addConsignment(api_url,formData)
      const data = await res.json()
      console.log(data)
    })();

  };
  return (
    
      
      <div className={classes.paper}>
        <Avatar className={classes.avatar} variant="rounded">
            <AssignmentIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add new consignment
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField onChange={handleFormChange}
                variant="outlined"
                required
                fullWidth
                name="container"
                label="Container Number"
                id="container"
              />
            </Grid>
            <Grid item xs={12} >
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="line"><strong>SELECT SHIPPER</strong></InputLabel>
                    <NativeSelect
                    value={shipperState.shipper}
                    fullWidth
                    onChange= {handleShipperChange}
                    inputProps={{
                        name: 'shipper',
                        id: 'shipper',
                    }}
                    >
                    <option aria-label="None" value="" />
                    {shippers.map((shipper) => (
                      <option value={shipper.url} key={shipper.url}>{shipper.first_name} {shipper.last_name}</option>
                    ))}
                    </NativeSelect>
                    <FormHelperText>If shipper option is not in list, create one first</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="line"><strong>SELECT LINE</strong></InputLabel>
                    <NativeSelect
                    value={lineState.line}
                    onChange={handleLineChange}
                    inputProps={{
                        name: 'line',
                        id: 'line',
                    }}
                    >
                    <option aria-label="None" value="" />
                    {lines.map((line) => (
                    <option value={line.url} key={line.url}>{line.name}</option>
                    ))}
                    </NativeSelect>
                    <FormHelperText>If line option is not in list, create one first</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="vessel"><strong>SELECT VESSEL</strong></InputLabel>
                    <NativeSelect
                    value={vesselState.vessel}
                    onChange={handleVesselChange}
                    inputProps={{
                        name: 'vessel',
                        id: 'vessel',
                    }}
                    >
                    <option aria-label="None" value="" />
                    {vessels.map((vessel) => (
                    <option value={vessel.url} key={vessel.url}>{vessel.name}</option>
                    ))}
                    </NativeSelect>
                    <FormHelperText>If vessel option is not in list, create one first</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <DatePicker value={deptDate} 
                    className={classes.formControl}
                    onChange={(x,e)=>{handleDeptDateChange(x,e)} }
                    name="departure"
                    id = "departure"
                    label="DEPARTURE"
                    format="dd/MM/yyyy"/>
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <DatePicker value={arrDate} 
                        className={classes.formControl}
                        name="arrival"
                        id = "arrival"
                        onChange={(x,e)=>{handleArrDateChange(x,e)} }
                        label="ARRIVAL"
                        minDate={deptDate}
                        minDateMessage="Date should not be earlier than departure date"
                        format="dd/MM/yyyy"/>
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="receipt_number"
                label="Receipt Number"
                name="receipt_number"
                onChange = {handleFormChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="status"><strong>COMPLETED?</strong></InputLabel>
                    <NativeSelect
                    value={statusState.status}
                    onChange={handleStatusChange}
                    inputProps={{
                        name: 'status',
                        id: 'status',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={'NO'} key={'NO'}>NO</option>
                    <option value={'YES'} key={'YES'}>YES</option>
                    </NativeSelect>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="default"
                className={classes.submit}
            >
                Clear
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button onClick={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                className={`${classes.submit} ${classes.submitBtn}`}
            >
                Add
            </Button>
          </Grid>
          </Grid>
          
        </form>
      </div>

  );
}