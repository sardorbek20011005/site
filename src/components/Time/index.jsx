import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTime } from 'react-timer-hook';
export default () => {

  let day=new Date();
  const {
    seconds,
    minutes,
    hours,
    ampm,
  } = useTime({ format: '24-hour'});

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
   <Container>
    <Container sx={{ flexGrow: 1 ,position: "relative", bottom: "50px", backgroundColor: "white", boxShadow: "1px 1px 5px lightgrey",height:{xs:"190vh",md:"85vh",sm:"100vh"}}} >

      <Grid item xs={12} sm={12} md={12}>
        <>
          <Box
            sx={{

              height: "80vh",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <Typography variant="h5" gutterBottom component="div" sx={{ color: "orange", fontWeight: "bold", textAlign: "center", paddingTop: "5%",fontSize:{xs:"20px",md:"40px"} }}>
              NEW WEBSITE IS COMING UP!
            </Typography>
            <Typography variant="h5" gutterBottom component="div" sx={{ color: "black", fontWeight: "bold", textAlign: "center" ,fontSize:{xs:"20px",md:"40px"}}}>
              WE ARE ALMOST READY TO LOUNCH
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ textAlign: "center",paddingTop:"2%",width:"60%",paddingLeft:"20%"}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
              quasi quidem quibusdam.
            </Typography>

            <Box sx={{ paddingTop: "8%", width:{md:"60%",sm:"50%"}, paddingLeft:{xs:"2%",sm:"25%",md:"20%"} }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} md={3} sx={{height:{md:"35vh",xs:"15vh",sm:"30vh"},display:'flex',flexDirection:'column',alignItems:'center',mt:{xs:'10%',sm:'0%',md:'0%'} }}>
                  <Item sx={{ color: "orange", fontSize:{md:"42px",sm:"35px",xs:"30px"}, fontWeight: "bold",width:{md:'100px',sm:'100px',xs:'100px'},height:{md:"90px",sm:'90px',xs:'90px'},justifyContent:"center",alignItems:"center",display:"flex" }} >{day.getDate( )}</Item>
                  <Typography sx={{fontSize:{md:"20px",sm:"20px",xs:"20px"}, color: "orange",fontWeight:"bold",textAlign:"center",paddingTop:"2%"}}>
                       DAYS
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}sx={{height:{md:"35vh",xs:"15vh",sm:"30vh"},display:'flex',flexDirection:'column',alignItems:'center',mt:{xs:'10%',sm:'0%',md:'0%'}}}>
                  <Item sx={{ color: "orange",width:{md:'100px',sm:'100px',xs:'100px'},height:{md:"90px",sm:'90px',xs:'90px'}, fontSize:{md:"42px",sm:"35px",xs:"30px"}, fontWeight: "bold",justifyContent:"center",alignItems:"center",display:"flex"  }}>{hours}</Item>
                  <Typography sx={{fontSize:{md:"20px",sm:"20px",xs:"20px"}, color: "orange",fontWeight:"bold",textAlign:"center",paddingTop:"2%"}}>
                          HOURS
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{height:{md:"35vh",xs:"15vh",sm:"30vh"},display:'flex',flexDirection:'column',alignItems:'center',mt:{xs:'10%',sm:'0%',md:'0%'}}}>
                  <Item sx={{color: "orange",width:{md:'100px',sm:'100px',xs:'100px'},height:{md:"90px",sm:'90px',xs:'90px'}, fontSize:{md:"42px",sm:"35px",xs:"30px"}, fontWeight: "bold",justifyContent:"center",alignItems:"center",display:"flex"  }}>{minutes}</Item>
                  <Typography sx={{fontSize:{md:"20px",sm:"20px",xs:"20px"}, color: "orange",fontWeight:"bold",textAlign:"center",paddingTop:"2%"}}>
                         MINUTES
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{height:{md:"35vh",xs:"15vh",sm:"30vh"},display:'flex',flexDirection:'column',alignItems:'center',mt:{xs:'10%',sm:'0%',md:'0%'}}}> 
                <Item sx={{ color: "orange",width:{md:'100px',sm:'100px',xs:'100px'},height:{md:"90px",sm:'90px',xs:'90px'}, fontSize:{md:"42px",sm:"35px",xs:"30px"}, fontWeight: "bold",justifyContent:"center",alignItems:"center",display:"flex"  }}>{seconds}</Item>
                  <Typography sx={{fontSize:{md:"20px",sm:"17px",xs:"20px"}, color: "orange",fontWeight:"bold",textAlign:"center",paddingTop:"2%"}}>
                        SECONDS
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>

        </>
      </Grid>

    </Container>
    </Container>
  )
}