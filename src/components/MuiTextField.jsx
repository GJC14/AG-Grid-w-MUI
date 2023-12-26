import { useState } from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'

export const MuiTextField = () => {
  const [value, setValue] = useState('')
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <TextField label='Outlined' variant='outlined' />
        <TextField label='Filled' variant='filled' />
        <TextField label='Standard' variant='standard' />
      </Stack>

      <Stack spacing={2} direction='row'>
        <TextField label='Small secondary' size='small' color='secondary' />
      </Stack>



      <Stack spacing={2} direction='row'>
        <TextField
          label='Form Input'
          required
          helperText={ 'Required' }
          type='password'
        />
      </Stack>

      <Stack spacing={2} direction='row'>
        <TextField
          label='Amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
          }}
          required
          helperText={
            !value ? 'Help me fill up this required field' : ''
          }
          error={!value}
          value={value}
          onChange={handleChange}
        />
        <TextField
          label='Weight'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>
          }}
        />
      </Stack>
    </Stack>
  )
}