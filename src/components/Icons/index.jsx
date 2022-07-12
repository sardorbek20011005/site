import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import axios from 'axios';
import Language from '@mui/icons-material/Language'
import AccessibleIcon from '@mui/icons-material/Accessible';
import Typography from '@mui/material/Typography';
import { border, margin, style, textAlign } from '@mui/system';
import { BorderLeft } from '@mui/icons-material';

import CustomIcon from '../CustomIcon';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));




export default () => {
  const [icon, setIcon] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3333/icons")
      .then((res) => {
        setIcon(res.data)
        console.log(res)
      }).catch((err) => (console.log(err)))
  }, [])



  return (

    <Container>
      <Box
        sx={{
            boxShadow: "none",
            border:"1px solid grey",
            marginTop: "2%",
            position: "relative",
    
            top: '40px',
            backgroundColor: "white",
    
    
          }} >
            
    
          <Grid item xs={6}  >
            <Item sx={{
              boxShadow: "none",
              paddingTop: "10%",
    
    
            }}>
              <Typography variant="h4" gutterBottom component="div"
                sx={{
                  fontWeight: "bold",
    
                }}
              >
                OUR WORK
              </Typography>
              <Typography variant="body1" gutterBottom
                sx={{
    
    
                  textAlign: { xs: "left", md: "center" }
    
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit blanditiis tenetur unde suscipit
              </Typography>
            </Item>
          </Grid>
    
    
    
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {icon.map((val, index) => {
              return (
                <Grid item xs={12} mad={6} sm={6} key={index} sx={{}} >
                  <Item sx={{
                    height: {xs:"70vh",sm:"55vh",md:"40vh"},
                    paddingTop: "10%",
                    borderBottom: {xs:"1px solid lightgrey",sm:"1px solid lightgrey",md:"1px solid lightgrey"},
                    borderRight: {xs:"none",sm:"1px solid lightgrey",md:"1px solid lightgrey"},
                    boxShadow: "none",
                  }}>
                    <CustomIcon name={val.icon} />
                    <Typography variant='h6'>
                      {val.title}
                    </Typography>
                    <Typography variant='body1' sx={{
                      paddingTop:"3%",
                    }}>
                      {val.desc}
                    </Typography>
                  </Item>
                </Grid>
              )
            })}
          </Grid>
    
    
      </Box>
    </Container>

  )
}   