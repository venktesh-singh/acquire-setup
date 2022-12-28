import { Link } from 'react-router-dom';
import {
  Box,
  Table,
  styled,
  Icon,
  IconButton,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Grid,
  Slider, Typography
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { StylPopUp, Heading } from "../../Style"
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, getOrderList } from '../../../redux/actions/OrderAction';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { H4, } from "app/components/Typography";
import { ContainerForOrder } from "../../Style"
import { Breadcrumb } from "app/components";
import { LineProgressBar } from '@frogress/line';
import { AnimatedLineProgressBar } from '@frogress/line'


const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: "-10px",

  '& small': { color: "white" },
  '& .icon': { fontSize: '50px', },
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



const PaginationTable = (props) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const orderData = useSelector((state) => state?.orders);

  useEffect(() => {
    getWorks();
  }, [dispatch]);

  const getWorks = () => {
    dispatch(getOrderList());
  };

  const deleteOrders = async (id) => {
    await deleteOrder(id);
    toast.success('Work Delete Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
    dispatch(getOrderList());
  };

  const marks = [
    { value: 0, label: "Material Order" },
    { value: 50, label: "Material Delivered" },
    { value: 100, label: "Material fixed" },
  ];

  function valuetext(label) {
    return `${label}°C`;
  }


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

      <ContainerForOrder>
        <Box className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: "Works", path: "/orders/order-list" }, { name: "All Work List" }]} />
        </Box>

        <Box width="100%" overflow="auto">
          <Grid container spacing={3}>
            {
              orderData.orderList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((subscriber, index) => (
                  <>
                    <Grid item sm={6} xs={12} key={index}>
                      <StylPopUp sx={{ mb: 3, background: "#f1f4f6", }}>
                        <Box>
                          <H1 sx={{ fontWeight: 600, fontSize: "20px", mb: "10px" }}>Work List -<span><Taskbox>{index + 1}</Taskbox></span></H1>
                          <Grid container spacing={2} sx={{ mb: "5px" }}>
                            <Grid item sm={6} xs={6}>
                              <ContentBox>
                                <Icon style={{ color: "#1da1f2" }} className="icon">location_city</Icon>
                                <Box ml="7px" mr="7px">
                                  <H4 sx={{ fontSize: "14px" }}>Work Group</H4>
                                  <Heading sx={{ fontSize: "15px" }}>{subscriber.work_order_group}</Heading>
                                </Box>
                              </ContentBox>
                            </Grid>
                            <Grid item sm={6} xs={6}>
                              <ContentBox>
                                <Icon style={{ color: "#1da1f2" }} className="icon">keyOutlined</Icon>
                                <Box ml="7px" mr="7px">
                                  <H4 sx={{ fontSize: "14px" }}>Site Owner</H4>
                                  <Heading sx={{ fontSize: "15px" }}>{subscriber.site_owner}</Heading>
                                </Box>
                              </ContentBox>
                            </Grid>
                          </Grid>

                          <Grid container spacing={2} sx={{ mb: "15px" }}>
                            <Grid item sm={6} xs={6}>
                              <ContentBox>
                                <Icon style={{ color: "#1da1f2" }} className="icon">engineeringOu</Icon>
                                <Box ml="7px" mr="7px">
                                  <H4 sx={{ fontSize: "14px" }}>Site Incharge</H4>
                                  <Heading sx={{ fontSize: "15px" }}>{subscriber.site_incharge}</Heading>
                                </Box>
                              </ContentBox>
                            </Grid>
                            <Grid item sm={6} xs={6}>
                              <ContentBox>
                                <Icon style={{ color: "#1da1f2" }} className="icon">location_city</Icon>
                                <Box ml="7px" mr="7px">
                                  <H4 sx={{ fontSize: "14px" }}> Project Deadline</H4>
                                  <Heading sx={{ fontSize: "15px" }}>{(moment(subscriber?.deadline).format("MMM Do YYYY"))}</Heading>

                                </Box>
                              </ContentBox>
                            </Grid>
                          </Grid>

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
                              <TableHead sx={{ backgroundColor: "#d0e6fe",}}>
                                <TableRow>
                                  <TableCell style={{ width: '30%' }} align="center">Materials</TableCell>
                                  <TableCell style={{ width: '30%' }} align="center">Order</TableCell>
                                  <TableCell style={{ width: '20%' }} align="left">Delivered</TableCell>
                                  <TableCell style={{ width: '10%' }} align="center">Fixing</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody sx={{ width: "100%" }}>
                                <TableRow >
                                  <TableCell style={{ width: '30%', backgroundColor: "#d0e6fe", }} align="center">Glass</TableCell>
                                  <TableCell style={{  }} align="center">
                                    <IconButton
                                      aria-label="delete"
                                      aria-haspopup="true"
                                    >
                                      <Icon color="success">done</Icon>
                                    </IconButton>
                                  </TableCell>
                                  <TableCell style={{  }} align="left">
                                    <IconButton
                                      aria-label="delete"
                                      aria-haspopup="true"
                                    >
                                      <Icon color="success">done</Icon>
                                    </IconButton>
                                  </TableCell>
                                  <TableCell style={{  }} align="left">
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
                              <TableHead sx={{ backgroundColor: "#d0e6fe",}}>
                                <TableRow>
                                  <TableCell style={{ width: '20%' }} align="center">Payment <br></br> Type</TableCell>
                                  <TableCell style={{ width: '25%' }} align="center">Total <br></br> Amount</TableCell>
                                  <TableCell style={{ width: '20%' }} align="center">Rec. Amount</TableCell>
                                  <TableCell style={{ width: '25%' }} align="center">Painding <br></br> Amount</TableCell>
                                  <TableCell style={{ width: '20%' }} align="center">Final <br></br> Payent</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody sx={{ width: "100%" }}>
                                <TableRow >
                                  <TableCell style={{ width: '20%', backgroundColor: "#d0e6fe", }} align="center">Glass</TableCell>
                                  <TableCell style={{  }} align="center">25,000</TableCell>
                                  <TableCell style={{  }} align="center">21,000</TableCell>
                                  <TableCell style={{  }} align="center">4,000</TableCell>
                                  <TableCell style={{  }} align="center">
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
                                  <TableCell style={{  }} align="center">20,000</TableCell>
                                  <TableCell style={{  }} align="center">20,000</TableCell>
                                  <TableCell style={{  }} align="center">0</TableCell>
                                  <TableCell style={{  }} align="center">
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

                          
                        </Box>
                      </StylPopUp>
                    </Grid>
                  </>
                ))}
          </Grid>
          <TablePagination
            sx={{ px: 2 }}
            page={page}
            component="div"
            rowsPerPage={rowsPerPage}
            count={orderData.orderList.length}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={handleChangeRowsPerPage}
            nextIconButtonProps={{ "aria-label": "Next Page" }}
            backIconButtonProps={{ "aria-label": "Previous Page" }}
          />
        </Box>
      </ContainerForOrder>



    </>
  );
};

export default PaginationTable;
