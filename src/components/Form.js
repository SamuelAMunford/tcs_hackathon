import React, {useState,useRef} from 'react'
import {Box, TextField, Button, Grid, Typography} from '@mui/material';
import '../App.css'
import * as api from '../api';


const Form = () => {
    //employee id, first name, last name, reason for visit ,checkin time(automated fill)
  const [emp,setEmpID] = useState({empID: "", firstName: "", lastName: "", reasonVisit: "", check_in:""})
    //{empID: "", firstName: "", lastName: "", reasonVisit: "", check_in:"" }

    const getDate = () => {
        return new Date()
    }

  const handleSubmit = (e) => {
    // useeffect, everytime emp state changes -> call endpt to backend 
    e.preventDefault()
    //console.log(emp)
    //setEmpID({...emp, check_in: x})
    api.visitorSignIn(emp)
    clear();
  }

  

  const clear = () => {
    setEmpID({empID: "", firstName: "", lastName: "", reasonVisit: "", check_in:"" })
  }

  return (
    <Grid container justifyContent="center" alignItems="center">
        <form onSubmit={handleSubmit}>
            <Grid item sx={{padding:'8px'}}>
                <TextField  
                    autoFocus
                    value={emp.empID}
                    label="Employee ID"
                    variant="outlined"
                    onChange={(e) => setEmpID({...emp, empID: e.target.value})}
                />
            </Grid>
            <Grid item sx={{padding:'8px'}}>
                <TextField 
                    value={emp.firstName}
                    label="First Name"
                    variant="outlined"
                    onChange={(e) => setEmpID({...emp, firstName: e.target.value})}
                />
            </Grid>
            <Grid item sx={{padding:'8px'}}>
            <TextField 
                value={emp.lastName}
                label="Last Name"
                variant="outlined"
                onChange={(e) => setEmpID({...emp, lastName: e.target.value})}
            />
            </Grid>
            <Grid item sx={{padding:'10px'}}>
                <TextField 
                    value={emp.reasonVisit}
                    label="Reason for visit"
                    variant="outlined"
                    multiline
                    maxRows={4}
                    onChange={(e) => setEmpID({...emp, reasonVisit: e.target.value})}
                />
            </Grid>
            <Grid item >
                <Button fullWidth variant="contained" type="submit"onClick={(e) => setEmpID({...emp, check_in: getDate()}) }>Submit</Button>
            </Grid>
        </form>
    </Grid>
  )
}

export default Form