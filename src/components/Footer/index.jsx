import React from 'react'
/////
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Phone from '@mui/icons-material/Phone';
import Public from '@mui/icons-material/Public';
import MailOutline from '@mui/icons-material/MailOutline';

//////ICONS
import { ImFacebook } from "react-icons/im"
import { FaTwitter } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"
import { FaPinterest } from "react-icons/fa"
import { FaBehance } from "react-icons/fa"
import { AiOutlineGithub } from "react-icons/ai"
///
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(1,1,1,0)',
    boxShadow: 'none'
}));
export default () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: { md: "70vh", sm: "80vh", xs: "130vh" },
                backgroundColor: 'rgba(1,1,1,0.1)',
                marginTop: "-2%"
            }}
        >
            <Container>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                        paddingTop: { xs: "20%", md: "10%" }
                    }}>
                        <Grid item xs={12} md={4} sm={4}>
                            <Item>
                                <Typography variant="h5" gutterBottom component="div"
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: { xs: "23px", md: "35px" },
                                        textAlign: "left",
                                        mt:{xs:"30px"}
                                    }}
                                >
                                    OUR OFFICE

                                </Typography>
                                <Box sx={{
                                    textAlign: "left",

                                }}>
                                    <Typography variant='body1' gutterBottom component="div" sx={{
                                        fontSize: "15px",
                                        fontWeight: "bold"
                                    }} >
                                        <Phone sx={{
                                            fontSize: "16px",
                                            fontWeight: "bold"
                                        }} />   Tel: 010-020-0340 | 090-080-0760
                                    </Typography>
                                    <Typography variant='body1' gutterBottom component="div" sx={{
                                        fontSize: "15px",
                                        fontWeight: "bold"
                                    }} >
                                        <Public sx={{
                                            fontSize: "16px"
                                        }} /> URL: www.company.com
                                    </Typography>
                                    <Typography variant='body1' gutterBottom component="div" sx={{
                                        fontSize: "15px",
                                        fontWeight: "bold"
                                    }} >
                                        <MailOutline
                                            sx={{
                                                fontSize: "17px",
                                                fontWeight: "bold"
                                            }}
                                        /> Email: info@company.com
                                    </Typography>
                                    </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4} sm={4}>
                            <Item>
                                <Typography variant="h5" gutterBottom component="div"
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: { xs: "23px", md: "35px" },
                                        textAlign: "left",
                                        mt:{xs:"30px"}
                                    }}
                                >
                                    SOCIAL MEDIA

                                </Typography>
                                <Box sx={{
                                    width: "60%",

                                }}>
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                        <Grid item xs={4} md={3} sm={6}  sx={{


                                        }}>
                                            <Item sx={{

                                                backgroundColor: "white",
                                                height: "6vh",
                                                fontSize: "15px",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}> <ImFacebook /> </Item>
                                        </Grid>
                                        <Grid item sm={6} md={3} xs={4} sx={{

                                        }}>
                                            <Item sx={{

                                                backgroundColor: "white",
                                                height: "6vh",
                                                fontSize: "15px",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}><FaTwitter /></Item>
                                        </Grid>
                                        <Grid item sm={6} md={3} xs={4} sx={{

                                        }}>
                                            <Item sx={{
                                                backgroundColor: "white",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: "6vh",
                                                fontSize: "15px",

                                            }}><TbWorld /></Item>
                                        </Grid>
                                        <Grid item sm={6} md={3} xs={4} sx={{

                                        }}>

                                            <Item sx={{
                                                backgroundColor: "white",
                                                height: "6vh",
                                                fontSize: "15px",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}><FaPinterest /></Item>
                                        </Grid>
                                        <Grid item sm={6} md={3} xs={4} sx={{

                                        }}>

                                            <Item sx={{
                                                backgroundColor: "white",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: "6vh",
                                                fontSize: "15px",
                                            }}><FaBehance /></Item>
                                        </Grid>
                                        <Grid item sm={6} md={3} xs={4} sx={{

                                        }}>

                                            <Item sx={{
                                                backgroundColor: "white",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: "6vh",
                                                fontSize: "15px",
                                            }}><AiOutlineGithub /></Item>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4} sm={4}>
                            <Item>
                                <Typography variant="h5" gutterBottom component="div"
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: { xs: "23px", md: "35px" },
                                        textAlign: "left",
                                        mt:{xs:"30px"}
                                    }}
                                >
                                    SUBSCRIBE NOW
                                </Typography>
                                <Typography variant='body1' gutterBottom component="div">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae eos quaerat.
                                </Typography>
                                <TextField id="outlined-basic" label="Your email" variant="outlined" sx={{
                                    backgroundColor: "white",
                                    width: "70%",
                                    marginTop: "10%"
                                }} /><br />
                                <Button variant="outlined" sx={{
                                    backgroundColor: "white",
                                    border: "none",
                                    color: "black",
                                    width: "70%",
                                    height: "7vh",
                                    marginTop: "4%"
                                }}>Submit</Button>
                            </Item>
                        </Grid>

                    </Grid>
                </Box>
            </Container>

        </Box>
    )
}