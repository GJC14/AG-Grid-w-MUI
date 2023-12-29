// https://www.youtube.com/watch?v=tKApfSoDPgM&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=8
import { Box, TextField, MenuItem } from '@mui/material'; // Box is just for demo; TexField contains the input; MenuItem is for the dropdown
import { useState, useEffect } from 'react';

export const MuiSelect = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        console.log(countries)
      }, [countries])

    return (
        <Box width='500px'>
            <h1>Checkbox</h1>
            <TextField label='Select Country'
                select value={countries}
                onChange={(e) => {
                    const value = e.target.value;
                    setCountries( value === 'string'
                        ? value.split(',') : value
                    )
                }}
                fullWidth
                SelectProps={{
                    multiple: true,
                }}
                error
                helperText='Please select at least one country'
            >
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='CA'>Canada</MenuItem>
                <MenuItem value='MX'>Mexico</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
                <MenuItem value='NZ'>New Zealand</MenuItem>
                <MenuItem value='UK'>United Kingdom</MenuItem>
                <MenuItem value='FR'>France</MenuItem>
                <MenuItem value='DE'>Germany</MenuItem>
                <MenuItem value='ES'>Spain</MenuItem>
                <MenuItem value='IT'>Italy</MenuItem>
                <MenuItem value='TW'>Taiwan</MenuItem>
                <MenuItem value='JP'>Japan</MenuItem>
                <MenuItem value='KR'>South Korea</MenuItem>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='CN'>China</MenuItem>
            </TextField>

        </Box>
    );
}