
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import React from 'react';


const FormMain = () => {
  return (
    <div>
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField label="Nome do paciente" variant="outlined"/>
                </Grid>
                <Grid item xs={6} >
                    <TextField label="E-mail" variant="outlined"/>
                </Grid>
                <Grid item xs={6} >
                    <TextField label="Data de nascimento" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Endereço" variant="outlined"/>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default FormMain