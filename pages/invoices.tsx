import { NextPage } from "next/types"

import styles from '../styles/Home.module.css';
import InvoicesTable from "../components/Table/InvoicesTable";
import { Divider, Paper, Typography } from "@mui/material";

const Invoices : NextPage  = () => {
  
  return (
    <div className={styles.container}>
      <Paper sx={{boxShadow: '0px 16px 22px 1px rgba(4, 31, 48, 0.25)', borderRadius: '40px', padding: '35px'}}>
        <Typography sx={{fontWeight: 800, color: '#003759', fontFamily: 'Inter', fontSize: '68px', marginLeft: '20px', marginBottom: '15px'}} variant='h1'>Invoices</Typography>
        <Divider sx={{border: '1px solid #F15A5C', marginBottom: '37px'}}/>
        <InvoicesTable/>
      </Paper>
    </div>
  )
}

export default Invoices