import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Deposits from './Deposits';
import ConsignTable from './ConsignTable';
import ConsignmentForm from '../pages/Consignment/ConsignmentForm';
import Loader from './Loader';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Vessels from '../pages/Vessels';
import Shippers from '../pages/Shippers';
import Lines from '../pages/Lines';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://logistics.borisutgroup.com/">
        Borisut Logistics
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard({consignments, shippers, lines, vessels, api_url}) {

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container} >
          <Grid container spacing={3}>

            {/* Add New Consignment Form */}
            <Grid item xs={6} md={8} lg={9}>
                <Route path='/' exact render={(props) => (
                  <Paper className={classes.paper} style={{border: "1px solid"}}>
                    <ConsignmentForm shippers={shippers} lines={lines} vessels={vessels} api_url={api_url}/>
                  </Paper>
                )} />
                <Route path='/vessels' render={(props) => (
                  <Paper className={classes.paper} style={{border: "1px solid", backgroundColor:"#e8f4f8"}}>
                    <Vessels/>
                    <ConsignmentForm shippers={shippers} lines={lines} vessels={vessels} api_url={api_url}/>
                  </Paper>
                  )} />
                <Route path='/shippers' render={(props) => (
                    <Paper className={classes.paper} style={{border: "1px solid", backgroundColor:"#d2f8d2"}}>
                      <Shippers/>
                    </Paper>
                  )} />
                <Route path='/lines' render={(props) => (
                    <Paper className={classes.paper} style={{border: "1px solid", backgroundColor:"#d3e996"}}>
                      <Lines/>
                    </Paper>
                  )} />
              
              
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Paper className={fixedHeightPaper}>
                    <Deposits />
                  </Paper>
                </Grid>
                <Grid item xs>
                  <Paper className={fixedHeightPaper}>
                    <Deposits />
                  </Paper>
                </Grid>
              
            </Grid>
            </Grid>
            
            {/* View All Consignments */}
            <Grid item xs={12}>
            {typeof consignments === "undefined" || consignments.length ===0 ? 
                  (<Paper className={classes.paper}>
                      <Loader />
                    </Paper>
                    ): 
              (<Paper className={classes.paper}>
                <ConsignTable consignments={consignments}/>
              </Paper>)}
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
    </Router>
  );
}
