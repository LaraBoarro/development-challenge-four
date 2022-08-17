
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ptLocale from 'date-fns/locale/pt';

const FormMain = () => {

    const [date, setDate] = React.useState(null);
    const [errorDate, setErrorDate] = React.useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
          name: event.target.name.value,
          email: event.target.email.value,
          date: event.target.date.value,
          address: event.target.address.value,
        }

        console.log(data)
    
        // const JSONdata = JSON.stringify(data)

      }

  return (
    <div>
        <Box>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField label="Nome do paciente" variant="outlined" name="name" required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="E-mail" variant="outlined" name="email" type="email" required/>
                    </Grid>
                    <Grid item xs={6} >
                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptLocale}>
                        <DatePicker
                            label="Data de Aniversário"
                            value={date}
                            maxDate={new Date()}
                            minDate={new Date('1920-01-02')}
                            onError={(r) => { r == null ? setErrorDate('') : setErrorDate('Insira uma data válida!')}}
                            onChange={(newDate) => {
                                setDate(newDate);
                            }}
                            renderInput={(params) => <TextField name="date" {...params} required helperText={errorDate} />}
                        />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Endereço" variant="outlined" name="address" required/>
                    </Grid>
                    <Grid item xs={6}>
                        <button type="submit">Criar</button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    </div>
  )
}

export default FormMain