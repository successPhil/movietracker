import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function Contact() {
    return (
        <div className="route-text">
      <h1>Contact Us</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            required
            id="first-name"
            label="First Name"
            fullWidth
            color="secondary"
            InputLabelProps={{
              style: { color: '#ffc107'},
              shrink: true, 
            }}
            InputProps={{
              style: { color: '#ffc107', backgroundColor: '#0e3fa9' }}}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="last-name"
            label="Last Name"
            fullWidth
            color="secondary"
            InputLabelProps={{
              style: { color: '#ffc107'},
              shrink: true, 
            }}
            InputProps={{
              style: { color: '#ffc107', backgroundColor: '#0e3fa9' }}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            label="Email Address"
            fullWidth
            color="secondary"
            InputLabelProps={{
              style: { color: '#ffc107'},
              shrink: true, 
            }}
            InputProps={{
              style: { color: '#ffc107', backgroundColor: '#0e3fa9' }}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="message"
            label="Message"
            multiline
            rows={4} // Adjust the number of rows as needed
            fullWidth
            color="secondary"
            InputLabelProps={{
              style: { color: '#ffc107'},
              shrink: true, 
            }}
            InputProps={{
              style: { color: '#ffc107', backgroundColor: '#0e3fa9' }}}
          />
        </Grid>
      </Grid>
    </div>
  );
}