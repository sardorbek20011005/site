import React from 'react'

        import Card from '@mui/material/Card';
        
        import CardMedia from '@mui/material/CardMedia';
        import Rasm from '../../assets/about-img.png'
        import Box from '@mui/material/Box';
        import Typography from '@mui/material/Typography';
        import { fontWeight, textAlign } from '@mui/system';
        import { styled } from '@mui/material/styles';
        import Grid from '@mui/material/Grid';
        import Paper from '@mui/material/Paper';
        import Container from '@mui/material/Container';
        
        const Item = styled(Paper)(({ theme }) => ({
          backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          ...theme.typography.body2,
          padding: theme.spacing(1),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        }));

        export default () => {

            return ( 
              <Container 
                
              >
                  <Box sx={{ width: '100%',backgroundColor:"white"}}>
                    <Grid container rowSpacing={1} >
                      <Grid item xs={12} sm={6} md={6} sx={{
                        
                        alignItems:"left"
                      }} >
                        <Item sx={{
                          boxShadow:"none"
                          
                        }}>
                        <Box
                            sx={{
                              
                              height:{xs:"90vh",sm:"80vh",md:"80vh"},
                              backgroundColor: 'orange',
                            }}
                            >
                              <Typography variant="h4" gutterBottom component="div" sx={{
                                color:"white",
                                fontWeight:"bold",
                                paddingTop:'20%',
                                textAlign:"left",
                                paddingLeft:"15%",
                                fontSize:{xs:'22px',md:"35px"}
                                
                              }}>
                                WEB DESIGN
                              </Typography>
                              <Typography variant="body2" gutterBottom sx={{
                                width:"60%",
                                color:"white",
                                paddingLeft:"15%",
                                textAlign:"left",
                                fontSize:{xs:"12px",md:"15px"}
                              }}>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                              blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                              quasi quidem quibusdam.<br/><br/>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                              blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                              landitiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            </Typography>
                            </Box>
                          </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Item sx={{
                              boxShadow:"none",
                          }}>
                            <CardMedia
                            component="img"
                            sx={{
                            width:{xs:"100%",sm:"70%" ,md:"50%"} ,
                            height:{xs:"90vh",sm:"80vh",md:"80vh"},
                            paddingLeft:{md:"35%"},
                            margin:{xs:"auto"},
                            
                            backgroundSize:"cover"
                           }}
                            image={Rasm}
                            alt="Live from space album cover"
                          />
                          </Item>
                        </Grid>
                      
                      </Grid>
                    </Box>
            </Container>
        )
    }