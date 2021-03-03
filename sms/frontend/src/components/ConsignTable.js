import React from 'react'
//import Loader from './Loader'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      textTransform:theme.typography.fontWeightBold,
    },
    body: {
      fontSize: 14,
    }
  }))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 600,
    },
  });


const ConsignTable = ({consignments}) => {
    const classes = useStyles();
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Search the table" variant="outlined" style={{'width':'100%'}}/>
            </form>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>CONTAINER</StyledTableCell>
                    <StyledTableCell align="right">SHIPPER</StyledTableCell>
                    <StyledTableCell align="right">LINE</StyledTableCell>
                    <StyledTableCell align="right">DEPARTURE</StyledTableCell>
                    <StyledTableCell align="right">ARRIVAL</StyledTableCell>
                    <StyledTableCell align="right">VESSEL</StyledTableCell>
                    <StyledTableCell align="right">COMPLETED?</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {consignments.map((consign, index) => (
                    <StyledTableRow key={consign.container}>
                    <TableCell component="th" scope="row">
                    {consign.container}
                    </TableCell>
                    <StyledTableCell align="right">{consign.shipper.first_name}</StyledTableCell>
                    <StyledTableCell align="right">{consign.line.name}</StyledTableCell>
                    <StyledTableCell align="right">{consign.departure}</StyledTableCell>
                    <StyledTableCell align="right">{consign.arrival}</StyledTableCell>
                    <StyledTableCell align="right">{consign.vessel.name}</StyledTableCell>
                    <StyledTableCell align="right">{consign.status}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default ConsignTable
