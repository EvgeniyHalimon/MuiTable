import { Box, Button } from "@mui/material"
import { CustomCheckbox } from "./Table/Checkbox"

const CheckboxBar = () => {
    return(
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '320px',
                height: '46px',
                backgroundColor: '#f4f4f4',
                borderRadius: '6px',
                boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(70, 79, 96, 0.16), 0px 2px 5px rgba(89, 96, 120, 0.1)',
            }}
        >
            <Box sx={{display: 'flex'}}>
                <CustomCheckbox/> <p>ACTIVE</p>
            </Box>
            <Box sx={{display: 'flex'}}>
                <CustomCheckbox/> <p>ARCHIVED</p>
            </Box>
            <Button
                sx={{
                    backgroundColor: '#F15A5C',
                    borderRadius: '20px',
                    color: 'white',
                    height: '20px',
                    width: '67px',
                    fontSize: '10px',
                    fontWeight: 700,
                    '&:hover': {
                        backgroundColor: 'rgba(241, 90, 92, 0.8)'
                    }
                }}
            >Archive</Button>
        </Box>
    )
}

export default CheckboxBar