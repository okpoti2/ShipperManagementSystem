import { TextField } from '@material-ui/core';
import React,{useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import { useForm, Form } from '../../components/useForm';
import Controls from '../../components/controls/Controls'

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    id:0,
    container:'',
    line:'',
    shipper:'',
    departure:new Date(),
    arrival: new Date()+1,
    status: true,

}
export default function ConsignmentForm() {

    const [values, setValues] = useState(initialFValues);

    return (
        <Form >
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                    />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                    />

                </Grid>
                <Grid item xs={6}>
                    <Controls.Select
                        name="departmentId"
                        label="Department"
                    />
                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                    />
                    <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                    />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default" />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
