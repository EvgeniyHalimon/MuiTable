import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckboxBar from './CheckboxBar';

const StyledInput = styled(InputBase)(({ theme }) => ({
    '.MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(70, 79, 96, 0.16), 0px 2px 5px rgba(89, 96, 120, 0.1)',
      padding: '7px 17px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
  }));

const InvoiceTableToolbar = () => {
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return(
        <div style={{display: 'flex', alignItems: 'center'}}>
            <FormControl sx={{ m: 1, minWidth: 60, display: 'flex', justifyContent: 'center' }} size="small">
                <InputLabel 
                    id="jobtype"
                    sx={{fontSize: '14px', fontFamily: 'Mulish', fontWeight: 700, color: '#9FA2B4',
                        '&.Mui-focused':{
                            top: '-6px',
                            color: '#9FA2B4'
                        }
                    }}
                    >ALL</InputLabel>
                <Select
                    labelId="all"
                    id="all"
                    value={age}
                    label="ALL"
                    onChange={handleChange}
                    IconComponent={KeyboardArrowDownIcon}
                    input={<StyledInput/>}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 130, display: 'flex', justifyContent: 'center' }} size="small">
                <InputLabel 
                    id="jobtype"
                    sx={{fontSize: '14px', fontFamily: 'Mulish', fontWeight: 700, color: '#9FA2B4',
                        '&.Mui-focused':{
                            top: '-6px',
                            color: '#9FA2B4'
                        }
                    }}
                    >JOB TYPE</InputLabel>
                <Select
                    labelId="jobtype"
                    id="jobtype"
                    value={age}
                    label="JOB TYPE"
                    onChange={handleChange}
                    IconComponent={KeyboardArrowDownIcon}
                    input={<StyledInput/>}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 130, display: 'flex', justifyContent: 'center' }} size="small">
                <InputLabel 
                    id="salesrep" 
                    sx={{fontSize: '14px', fontFamily: 'Mulish', fontWeight: 700, color: '#9FA2B4',
                        '&.Mui-focused':{
                            top: '-6px',
                            color: '#9FA2B4'
                        }
                    }}
                    >SALES REP</InputLabel>
                <Select
                    labelId="salesrep"
                    id="salesrep"
                    value={age}
                    label="SALES REP"
                    onChange={handleChange}
                    IconComponent={KeyboardArrowDownIcon}
                    input={<StyledInput/>}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <CheckboxBar/>
        </div>
    )
}

export default InvoiceTableToolbar