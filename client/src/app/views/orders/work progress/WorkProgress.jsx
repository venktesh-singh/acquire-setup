import { styled, Grid, Box, Icon, FormControlLabel, Checkbox, Button, Typography, TableBody, TableCell, TableHead, TablePagination, TableRow, } from '@mui/material';
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Breadcrumb } from "app/components";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Container, Heading, StyledCard, StyledCard2, StyledCard3, StyledTable } from "../../Style";
import { H2, H4, H3 } from "app/components/Typography";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { Form } from './FormStyle'
import { updateHandover } from "app/redux/actions/HandoverAction";
import { createNotification } from "app/redux/actions/NotificationActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';

const IMG = styled("img")(() => ({
    width: "100%",
    height: "auto",
    borderRadius: "4px",
    marginBottom: "50px",
}));

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: "-10px",
    '& small': { color: theme.palette.text.secondary },
    '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));


const WorkProgress = () => {
    const navigate = useNavigate()




    return (

        <>
            <ToastContainer
                position="top-center"
                theme="dark"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Container>
                <Box className="breadcrumb">
                    <Breadcrumb routeSegments={[{ name: "Handover", path: "/handover/handover-list" }, { name: "View Handover" }]} />
                </Box>


                <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between", }} >
                    <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
                        <Icon >navigate_before</Icon> Back
                    </Button>

                </Box>

                <StyledCard3 sx={{ mt: 2, }} elevation={2}>

                    <Box>
                        <Grid container spacing={1}>
                            <Grid item sm={12} xs={12}>
                                <Box>
                                    <Grid container spacing={1}>
                                        <Grid item sm={6} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <ContentBox>
                                                    <Box>
                                                        <H4>Project Name</H4>
                                                        <Heading>tt</Heading>
                                                    </Box>
                                                </ContentBox>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={6} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <ContentBox>
                                                    <Icon className="icon"></Icon>
                                                    <Box>
                                                        <H4>Site Incharge</H4>
                                                        <Heading>tt</Heading>
                                                    </Box>
                                                </ContentBox>
                                            </StyledCard>
                                        </Grid>

                                    </Grid>
                                </Box>

                                <Box>
                                    <Grid container spacing={1}>
                                        <Grid item sm={12} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <ContentBox>
                                                    <Box>
                                                        <H4>Work Description</H4>
                                                        <Heading>tt</Heading>
                                                    </Box>
                                                </ContentBox>
                                            </StyledCard>
                                        </Grid>

                                    </Grid>
                                </Box>

                                <H2 sx={{ mt: 2 }}>All Materail Details</H2>
                                <Box sx={{ mt: 0 }}>
                                    <StyledTable>
                                        <TableHead sx={{ backgroundColor: "#d0e6fe" }}>
                                            <TableRow>
                                                <TableCell align="center">Requird Matrelias</TableCell>
                                                <TableCell align="center">Materail Quantity</TableCell>
                                                <TableCell align="center">Delivered Materail</TableCell>
                                                <TableCell align="center">Painding Materials</TableCell>
                                                <TableCell align="center">Delevery Date</TableCell>
                                                <TableCell align="center">Remarks</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            <TableRow >
                                                <TableCell align="center">Glass</TableCell>
                                                <TableCell align="center">100 pc</TableCell>
                                                <TableCell align="center">88 pc</TableCell>
                                                <TableCell align="center">12 pc</TableCell>
                                                <TableCell salign="center">12 DEC 2012</TableCell>
                                                <TableCell align="center">Material Delevery in Progress</TableCell>
                                            </TableRow>

                                            <TableRow >
                                                <TableCell align="center">Curtain</TableCell>
                                                <TableCell align="center">50 pc</TableCell>
                                                <TableCell align="center">50 pc</TableCell>
                                                <TableCell align="center">0 pc</TableCell>
                                                <TableCell salign="center">12 DEC 2012</TableCell>
                                                <TableCell align="center">Material Delevery in Progress</TableCell>
                                            </TableRow>

                                        </TableBody>
                                    </StyledTable>
                                </Box>

                                <H2 sx={{ mt: 2 }}>Payment Details</H2>

                                <Box sx={{ mt: 0 }}>
                                    <StyledTable>
                                        <TableHead sx={{ backgroundColor: "#d0e6fe" }}>
                                            <TableRow>
                                                <TableCell align="center">Billing Type</TableCell>
                                                <TableCell align="center">Total Payment</TableCell>
                                                <TableCell align="center">Recieved Payment</TableCell>
                                                <TableCell align="center">Painding Payment</TableCell>
                                                <TableCell align="center">Payment Date</TableCell>
                                                <TableCell align="center">Remarks</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            <TableRow >
                                                <TableCell align="center">RA 4 Bill (Final Bill)</TableCell>
                                                <TableCell align="center">25000</TableCell>
                                                <TableCell align="center">20000</TableCell>
                                                <TableCell align="center">5000</TableCell>
                                                <TableCell salign="center">12 DEC 2012</TableCell>
                                                <TableCell align="center">Remaining Payment not Recieved yet </TableCell>
                                            </TableRow>

                                            <TableRow >
                                                <TableCell align="center">Curtain RA Bill</TableCell>
                                                <TableCell align="center">20000</TableCell>
                                                <TableCell align="center">15000</TableCell>
                                                <TableCell align="center">5000</TableCell>
                                                <TableCell salign="center">12 DEC 2012</TableCell>
                                                <TableCell align="center">Remaining Payment not Recieved yet </TableCell>
                                            </TableRow>

                                        </TableBody>
                                    </StyledTable>
                                </Box>

                            </Grid>


                        </Grid>


                    </Box>
                </StyledCard3>
            </Container>
        </>
    );
};

export default WorkProgress;