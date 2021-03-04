import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns'; 
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';


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



export default function ConsignmentForm() {
  const classes = useStyles();
  const [lineState, setLineState] = useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setLineState({
      ...lineState,
      [name]: event.target.value,
    });
  };
  const [deptDate, handleDeptDateChange] = useState(new Date());
  const [arrDate, handleArrDateChange] = useState(new Date());

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
              <TextField
                variant="outlined"
                required
                fullWidth
                name="containerNumber"
                label="Container Number"
                id="containerNumber"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Shipper First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Shipper Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="age-native-helper">LINE</InputLabel>
                    <NativeSelect
                    value={lineState.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-helper',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={10}>HAPAG</option>
                    <option value={20}>MAERSK</option>
                    <option value={30}>MSC</option>
                    </NativeSelect>
                    <FormHelperText>If line option is not in list, create one first</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="age-native-helper">VESSEL</InputLabel>
                    <NativeSelect
                    value={lineState.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-helper',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={10}>HAPAG</option>
                    <option value={20}>MAERSK</option>
                    <option value={30}>MSC</option>
                    </NativeSelect>
                    <FormHelperText>If vessel option is not in list, create one first</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <DatePicker value={deptDate} 
                    className={classes.formControl}
                    onChange={handleDeptDateChange} 
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
                        onChange={handleArrDateChange} 
                        label="ARRIVAL"
                        minDate={deptDate}
                        minDateMessage="Date should not be earlier than departure date"
                        format="dd/MM/yyyy"/>
                </MuiPickersUtilsProvider>
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
            <Button
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