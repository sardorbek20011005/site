import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rasm from '../../assets/home-bg.jpg'
import { Autocomplete } from '@mui/material';
import Typography from '@mui/material/Typography';
import { color, height } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    boxShadow: 'none',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <>
                        <Box
                            sx={{
                                width: '100%',
                                height: "80vh",
                                m:0,
                                p:0,    
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundImage:`url(${Rasm})`,
                                backgroundPosition:"center"
                            }}
                            >
                                
                            <Typography variant='h3' sx={{backgroundColor:'white',textAlign:'center', width:{md:'40%',sm:'50%',xs:'55%'},fontSize:{md:'60px',sm:'45px',xs:'25px'},fontWeight:'bold' ,top:'22%',left:'20%',position:'absolute',padding:'0.7%'}}>DESIGIN AGENCY</Typography>
                           <Typography variant='h3' sx={{color:'orange',backgroundColor:'white',textAlign:'center', width:{md:'55%',sm:'71%',xs:'75%'},fontSize:{md:'60px',sm:'45px',xs:'25px'},fontWeight:'bold' ,top:'40%',left:'20%',position:'absolute',padding:'0.7%'}}>COMING SON TEMPLATE</Typography>
                        </Box>
                    </>
                </Grid>
            </Grid>
        </Box>
        
    );
}