import {
  styled, Grid, Box, Icon, Button, Divider, Chip, TableBody, IconButton,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Breadcrumb } from 'app/components';
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Heading,
  StyledCard,
  SpanTaxt,
  StyledCard2,
  StylPopUp
} from '../../Style';
import { H2, H4, H5, H3 } from 'app/components/Typography';
import moment from 'moment';
import { AnimatedLineProgressBar } from '@frogress/line'


const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: "-10px",

  '& small': { color: "white" },
  '& .icon': { fontSize: '40px', },
}));

const StyledIonButton = styled(IconButton)(() => ({
  padding: "8px",
  "&:hover": { color: "#ffffff" },
  "& svg": { fontSize: "14px" },
}));

const Taskbox = styled(StyledIonButton)(() => ({
  padding: "5px 10px",
  borderRadius: "7px",
  fontSize: "18px",
  fontWeight: "600",
  color: "red",
  // borderColor: "#ec412c",
  // backgroundColor: "rgba(236,65,44,.1)",
  // "&:hover": { background: `#ec412c`, color: "#ffffff" },
}));

const H1 = styled('h1')(({ theme }) => ({
  margin: 0,
  flexGrow: 1,
  color: theme.palette.text.secondary,
}));

const Analytics = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderData = location.state;
  const [user, setUser] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user.user.user_type);
    }
  }, []);

  console.log('====================================');
  console.log(orderData);
  console.log('====================================');

  return (
    <>
      <Container>
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[
              { name: 'Works', path: '/orders/order-list' },
              { name: 'View Works' },
            ]}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
        >
          <Icon>navigate_before</Icon> Back
        </Button>

        <Box sx={{ mt: 2 }}>
          <H2> Order Group : {orderData?.work_order_group} </H2>
        </Box>

        <Box width="100%" overflow="auto">
          <Grid container spacing={3}>
            <Grid item sm={12} xs={12}>
              <StylPopUp sx={{ mb: 3, background: "#f1f4f6", }}>
                <Box>

                  <Grid container spacing={2} sx={{ mb: "5px" }}>
                    <Grid item sm={4} xs={6}>
                      <ContentBox>
                        <Icon style={{ color: "#1da1f2" }} className="icon">location_city</Icon>
                        <Box ml="7px" mr="7px">
                          <H4 sx={{ fontSize: "14px" }}>Work Group</H4>
                          <Heading sx={{ fontSize: "15px" }}>{orderData.site_name}</Heading>
                        </Box>
                      </ContentBox>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                      <ContentBox>
                        <Icon style={{ color: "#1da1f2" }} className="icon">keyOutlined</Icon>
                        <Box ml="7px" mr="7px">
                          <H4 sx={{ fontSize: "14px" }}>Site Owner</H4>
                          <Heading sx={{ fontSize: "15px" }}>{orderData.site_owner}</Heading>
                        </Box>
                      </ContentBox>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                      <ContentBox>
                        <Icon style={{ color: "#1da1f2" }} className="icon">engineeringOu</Icon>
                        <Box ml="7px" mr="7px">
                          <H4 sx={{ fontSize: "14px" }}>Site Incharge</H4>
                          <Heading sx={{ fontSize: "15px" }}>{orderData.site_incharge}</Heading>
                        </Box>
                      </ContentBox>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2} sx={{ mb: "15px" }}>
                    <Grid item sm={4} xs={6}>

                      <ContentBox>
                        <Icon style={{ color: "#1da1f2" }} className="icon">construction</Icon>
                        <Box ml="12px">
                          <H4 sx={{ fontSize: "14px" }}>Safety Equipments</H4>
                          {orderData?.safety_equipments.map(
                            (floorfinishing, index) => (
                              <span style={{ marginRight: '5px', fontSize: "14px" }} key={index}>
                                <Chip style={{ height: "20px" }} label={floorfinishing} color="primary" />
                              </span>
                            )
                          )}
                        </Box>
                      </ContentBox>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                      <ContentBox>
                        <Icon style={{ color: "#1da1f2" }} className="icon">location_city</Icon>
                        <Box ml="7px" mr="7px">
                          <H4 sx={{ fontSize: "14px" }}> Project Deadline</H4>
                          <Heading sx={{ fontSize: "15px" }}>{(moment(orderData?.deadline).format("MMM Do YYYY"))}</Heading>

                        </Box>
                      </ContentBox>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                      <ContentBox>
                        <Icon style={{ color: "#1da1f2" }} className="icon">group</Icon>
                        <Box ml="7px" mr="7px">
                          <H4 sx={{ fontSize: "14px" }}>Total Team Members</H4>
                          <Heading sx={{ fontSize: "15px" }}>{orderData?.total_team_members}</Heading>
                        </Box>
                      </ContentBox>
                    </Grid>
                  </Grid>

                  <Divider />

                  <ContentBox sx={{ display: "flex", flexDirection: "column", mb: "15px" }}>
                    <H4 sx={{ mt: "10px", mb: "10px", fontSize: "18px", display: "flex", justifyContent: "flex-start", width: "100%" }}>All Stage Deadline</H4>
                    <Grid container spacing={2}>
                      <Grid item sm={2} xs={6}>
                        <ContentBox>
                          {/* <Icon style={{ color: "#1da1f2" }} className="icon">event_available</Icon> */}
                          <Box ml="7px" mr="7px">
                            <H4 sx={{ fontSize: "14px" }}>Site Survey Deadline</H4>
                            <Heading sx={{ fontSize: "15px" }}>
                              {moment(orderData?.site_survey_deadline).format(
                                'MMM Do YY'
                              )}
                            </Heading>
                          </Box>
                        </ContentBox>
                      </Grid>
                      <Grid item sm={2} xs={6}>
                        <ContentBox>
                          {/* <Icon style={{ color: "#1da1f2" }} className="icon">event_available</Icon> */}
                          <Box ml="7px" mr="7px">
                            <H4 sx={{ fontSize: "14px" }}>Drawing Deadline</H4>
                            <Heading sx={{ fontSize: "15px" }}>
                              {moment(orderData?.drawing_deadline).format(
                                'MMM Do YY'
                              )}
                            </Heading>
                          </Box>
                        </ContentBox>
                      </Grid>
                      <Grid item sm={2} xs={6}>
                        <ContentBox>
                          {/* <Icon style={{ color: "#1da1f2" }} className="icon">event_available</Icon> */}
                          <Box ml="7px" mr="7px">
                            <H4 sx={{ fontSize: "14px" }}>Aluminium Deadline</H4>
                            <Heading sx={{ fontSize: "15px" }}>
                              {moment(orderData?.aluminium_deadline).format(
                                'MMM Do YY'
                              )}
                            </Heading>
                          </Box>
                        </ContentBox>
                      </Grid>
                      <Grid item sm={3} xs={6}>
                        <ContentBox>
                          {/* <Icon style={{ color: "#1da1f2" }} className="icon">event_available</Icon> */}
                          <Box ml="7px" mr="7px">
                            <H4 sx={{ fontSize: "14px" }}>GlassAcpHplFixing Deadline</H4>
                            <Heading sx={{ fontSize: "15px" }}>
                              {moment(
                                orderData?.glassAcphplfixing_deadline
                              ).format('MMM Do YY')}
                            </Heading>
                          </Box>
                        </ContentBox>
                      </Grid>
                      <Grid item sm={2} xs={6}>
                        <ContentBox>
                          {/* <Icon style={{ color: "#1da1f2", fontSize: '20px', }} className="icon">event_available</Icon> */}
                          <Box ml="7px" mr="7px">
                            <H4 sx={{ fontSize: "14px" }}>Handover Deadline</H4>
                            <Heading sx={{ fontSize: "15px" }}>
                              {moment(orderData?.handover_deadline).format(
                                'MMM Do YY'
                              )}
                            </Heading>
                          </Box>
                        </ContentBox>
                      </Grid>
                    </Grid>

                    {/* <Grid container spacing={2} sx={{ mb: "5px" }}> */}

                  </ContentBox>

                  <Divider />

                  <ContentBox sx={{ display: "flex", flexDirection: "column", mb: "15px" }}>
                    <H4 sx={{ mt: "10px", mb: "10px", fontSize: "18px", display: "flex", justifyContent: "flex-start", width: "100%" }}>All Stage Progress</H4>

                    <Grid container spacing={2}>
                      <Grid item sm={3} xs={4}>
                        <H4 sx={{ pb: "5px", fontSize: "16px", display: "flex", justifyContent: "flex-start", width: "100%" }}>Site Survey</H4>
                      </Grid>
                      <Grid item sm={9} xs={8}>
                        <AnimatedLineProgressBar
                          percent={98}
                          rounded={36}
                          transition={{ easing: 'linear' }}
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                      <Grid item sm={3} xs={4}>
                        <H4 sx={{ pb: "5px", fontSize: "16px", display: "flex", justifyContent: "flex-start", width: "100%" }}>Drawing</H4>
                      </Grid>
                      <Grid item sm={9} xs={8}>
                        <AnimatedLineProgressBar
                          percent={80}
                          rounded={36}
                          transition={{ easing: 'linear' }}
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                      <Grid item sm={3} xs={4}>
                        <H4 sx={{ pb: "5px", fontSize: "16px", display: "flex", justifyContent: "flex-start", width: "100%" }}>Glass Fixing</H4>
                      </Grid>
                      <Grid item sm={9} xs={8}>
                        <AnimatedLineProgressBar
                          percent={50}
                          rounded={36}
                          transition={{ easing: 'linear' }}
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                      <Grid item sm={3} xs={4}>
                        <H4 sx={{ pb: "5px", fontSize: "16px", display: "flex", justifyContent: "flex-start", width: "100%" }}>Aluminium</H4>
                      </Grid>
                      <Grid item sm={9} xs={8}>
                        <AnimatedLineProgressBar
                          percent={60}
                          rounded={36}
                          transition={{ easing: 'linear' }}
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                      <Grid item sm={3} xs={4}>
                        <H4 sx={{ pb: "5px", fontSize: "16px", display: "flex", justifyContent: "flex-start", width: "100%" }}>Handover</H4>
                      </Grid>
                      <Grid item sm={9} xs={8}>
                        <AnimatedLineProgressBar
                          percent={10}
                          rounded={36}
                          transition={{ easing: 'linear' }}
                        />
                      </Grid>
                    </Grid>
                  </ContentBox>

                  <Divider />
                  <ContentBox sx={{ display: "flex", flexDirection: "column", mb: "15px" }}>
                    <H4 sx={{ mt: "10px", mb: "10px", fontSize: "18px", display: "flex", justifyContent: "flex-start", width: "100%" }}>Material Details</H4>
                    <Box sx={{ width: "100%" }}>
                      <TableHead sx={{ backgroundColor: "#d0e6fe", }}>
                        <TableRow>
                          <TableCell style={{ width: '15%' }} align="center">Materials</TableCell>
                          <TableCell style={{ width: '15%' }} align="center">Order</TableCell>
                          <TableCell style={{ width: '15%' }} align="center">Order Quntity</TableCell>
                          <TableCell style={{ width: '20%' }} align="center">Delivered Quntity</TableCell>
                          <TableCell style={{ width: '20%' }} align="center">Pending Quntity</TableCell>
                          <TableCell style={{ width: '10%' }} align="left">Delivered</TableCell>
                          <TableCell style={{ width: '20%' }} align="center">Fixing</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{ width: "100%" }}>
                        <TableRow >
                          <TableCell style={{ width: '15%', backgroundColor: "#d0e6fe", }} align="center">Glass</TableCell>

                          <TableCell style={{}} align="center">
                            <IconButton
                              aria-label="delete"
                              aria-haspopup="true"
                            >
                              <Icon color="success">done</Icon>
                            </IconButton>
                          </TableCell>
                          <TableCell align="center">100 PC</TableCell>
                          <TableCell align="center">80 PC</TableCell>
                          <TableCell align="center">20 PC</TableCell>
                          <TableCell style={{}} align="left">
                            <IconButton
                              aria-label="delete"
                              aria-haspopup="true"
                            >
                              <Icon color="success">done</Icon>
                            </IconButton>
                          </TableCell>
                          <TableCell style={{}} align="left">
                            <IconButton
                              aria-label="delete"
                              aria-haspopup="true"
                            >
                              <Icon color="error">close</Icon>
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Box>

                  </ContentBox>

                  <Divider />

                  <ContentBox sx={{ display: "flex", flexDirection: "column", mb: "15px" }}>
                    <H4 sx={{ mt: "10px", mb: "10px", fontSize: "18px", display: "flex", justifyContent: "flex-start", width: "100%" }}>Payment Details</H4>
                    <Box sx={{ width: "100%" }}>
                      <TableHead sx={{ backgroundColor: "#d0e6fe", }}>
                        <TableRow>
                          <TableCell style={{ width: '20%' }} align="center">Payment Type</TableCell>
                          <TableCell style={{ width: '25%' }} align="center">Total Amount</TableCell>
                          <TableCell style={{ width: '20%' }} align="center">Rec. Amount</TableCell>
                          <TableCell style={{ width: '25%' }} align="center">Painding Amount</TableCell>
                          <TableCell style={{ width: '25%' }} align="center">Final Payent</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{ width: "100%" }}>
                        <TableRow >
                          <TableCell style={{ width: '20%', backgroundColor: "#d0e6fe", }} align="center">Glass</TableCell>
                          <TableCell style={{}} align="center">25,000</TableCell>
                          <TableCell style={{}} align="center">21,000</TableCell>
                          <TableCell style={{}} align="center">4,000</TableCell>
                          <TableCell style={{}} align="center">
                            <IconButton
                              aria-label="delete"
                              aria-haspopup="true"
                            >
                              <Icon color="error">close</Icon>
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      </TableBody>

                      <TableBody sx={{ width: "100%" }}>
                        <TableRow >
                          <TableCell style={{ width: '20%', backgroundColor: "#d0e6fe", }} align="center">ACP SHeet</TableCell>
                          <TableCell style={{}} align="center">20,000</TableCell>
                          <TableCell style={{}} align="center">20,000</TableCell>
                          <TableCell style={{}} align="center">0</TableCell>
                          <TableCell style={{}} align="center">
                            <IconButton
                              aria-label="delete"
                              aria-haspopup="true"
                            >
                              <Icon color="sucsess">done</Icon>
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Box>
                  </ContentBox>

                  <Divider />

                  <ContentBox sx={{ display: "flex", flexDirection: "column", mt: "15px", mb: "15px" }}>
                    <Grid container spacing={2} sx={{ mb: "5px" }}>
                      <Grid item sm={6} xs={12}>
                        <ContentBox>
                          <Icon style={{ color: "#1da1f2" }} className="icon">assignmentOutlined</Icon>
                          <Box ml="7px" mr="7px">
                            <H3 sx={{ fontSize: "14px" }}>Assessment</H3>
                            <H4>{orderData?.assesment}</H4>
                          </Box>
                        </ContentBox>
                      </Grid>

                      <Grid item sm={6} xs={12}>
                        <ContentBox>
                          <Icon style={{ color: "#1da1f2" }} className="icon">assignmentOutlined</Icon>
                          <Box ml="7px" mr="7px">
                            <H4 sx={{ fontSize: "14px" }}>Deadline Miss Reason</H4>
                            <Heading>{orderData?.deadline_resone}</Heading>
                          </Box>
                        </ContentBox>
                      </Grid>
                    </Grid>
                  </ContentBox>

                  <ContentBox>
                    <Icon style={{ color: "#1da1f2" }} className="icon">event_available</Icon>
                    <Box ml="7px" mr="7px">
                      <H4 sx={{ fontSize: "14px" }}>Checked By</H4>
                      <SpanTaxt>
                        <Heading>Mr. Parveen </Heading>{' '}
                        <H5 sx={{ mt: 1, ml: 2 }}>Director</H5>
                      </SpanTaxt>
                    </Box>
                  </ContentBox>


                </Box>
              </StylPopUp>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Analytics;
