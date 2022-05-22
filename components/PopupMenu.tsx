import { useState } from 'react';
import { styled } from '@mui/material/styles';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import CommentIcon from '@mui/icons-material/Comment';
import HistoryIcon from '@mui/icons-material/History';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 2,
    marginTop: theme.spacing(1),
    width: 146,
    height: 100,
    color: '#1A212C',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)',
    '& .MuiMenu-list': {
      padding: '5px 0',
    },
    '& .MuiMenuItem-root': {
      fontFamily: 'Inter',
      '& .MuiSvgIcon-root': {
        color: '#CDCED7',
        marginRight: theme.spacing(1.5),
      },
      '&:hover': {
        backgroundColor: '#feebeb',
        '& .MuiSvgIcon-root': {
          color: '#C86666'
        }
      },
    },
  },
}));

const PopupMenu = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div
        onClick={handleClick}
        id="popup-more-icon"
        aria-controls={open ? 'popup-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <MoreVertIcon
          sx={{
            marginTop: '6px',
            color: '#7D90B2'
          }}
        />
      </div>
      <StyledMenu 
        id="popup-menu"
        MenuListProps={{
          'aria-labelledby': 'popup-more-icon',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          sx={{fontSize: '14px', padding: '3px 5px 5px 12px'}}
        >
          <HistoryIcon
            sx={{width: '14px', height: '14px'}}
          />
          History
        </MenuItem>
        <MenuItem
          sx={{fontSize: '14px', padding: '3px 5px 5px 12px'}}
        >
          <CommentIcon
            sx={{width: '14px', height: '14px'}}
          />
          Comments
        </MenuItem>
        <MenuItem
          sx={{fontSize: '14px', padding: '3px 5px 5px 12px'}}
        >
          <PictureAsPdfIcon
            sx={{width: '14px', height: '14px'}}
          />
          Download PDF
        </MenuItem>
      </StyledMenu>
    </>
  )
}

export default PopupMenu