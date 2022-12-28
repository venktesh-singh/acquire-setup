import { styled, Card, Chip, Icon, IconButton, Grid, TableCell, TableHead, TablePagination, TableRow, } from "@mui/material";
import { Box } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getHandoverList, deleteHandover } from "app/redux/actions/HandoverAction";
import { Container, StyledTable, StylPopUp, Heading } from "../../Style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { H4 } from "app/components/Typography";

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: "-10px",
    '& small': { color: "white" },
    '& .icon': { fontSize: '40px', color: "white", },
}));

const StyledIonButton = styled(IconButton)(() => ({
    padding: "8px",
    "&:hover": { color: "#ffffff" },
    "& svg": { fontSize: "14px" },
}));

const Taskbox = styled(StyledIonButton)(() => ({
    padding: "5px 10px",
    borderRadius: "7px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#ec412c",
    borderColor: "#ec412c",
    backgroundColor: "rgba(236,65,44,.1)",
    "&:hover": { background: `#ec412c`, color: "#ffffff" },
}));


const HandoverList = () => {
    // const navigate = useNavigate();
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

    const handoverLists = useSelector(state => state.handover.handoverList)

    useEffect(() => {
        dispatch(getHandoverList());
    }, [dispatch])

    const deleteHandovers = async (id) => {
        await deleteHandover(id);
        toast.success('Delete Handover Successfully!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        dispatch(getHandoverList());
    }

    return (
        <Container>

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
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[{ name: "Handover", path: "/handover/handover-list" }, { name: "Handover List" }]}
                />
            </div>

            <SimpleCard title="All Handover">
                <Box width="100%" overflow="auto">
                    <StyledTable>
                        {
                            handoverLists?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((subscriber, index) => (
                                    <>
                                        <StylPopUp key={index} sx={{ mb: 2, background: `linear-gradient(87deg,#11cdef 0,#1171ef 100%)!important` }}>
                                            <Grid container spacing={2}>
                                                <Grid item sm={10} xs={10}>
                                                    <TableHead>
                                                        <TableRow style={{ width: "100%" }}>

                                                            <TableCell style={{ width: '10%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">
                                                                <ContentBox>
                                                                    <Box >
                                                                        <H4 sx={{ color: "black", fontSize: "15px" }}>S.No.</H4>
                                                                        <Taskbox>
                                                                            {index + 1}
                                                                        </Taskbox>
                                                                    </Box>
                                                                </ContentBox>
                                                            </TableCell>

                                                            <TableCell style={{ width: '25%', padding: "5px", fontSize: "14px", borderBottom: "none" }} align="center">
                                                                <ContentBox>
                                                                    <Icon className="icon">location_city</Icon>
                                                                    <Box ml="7px" mr="7px">
                                                                        <H4 sx={{ color: "white", fontSize: "15px" }}>Site Name</H4>
                                                                        <Heading sx={{ fontSize: "13px" }}>{subscriber.h_sitename}</Heading>
                                                                    </Box>
                                                                </ContentBox>
                                                            </TableCell>

                                                            <TableCell style={{ width: '26%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">
                                                                <ContentBox>
                                                                    <Icon className="icon">engineeringOu</Icon>
                                                                    <Box ml="7px" mr="7px">
                                                                        <H4 sx={{ color: "white", fontSize: "15px" }}>Site Incharge</H4>
                                                                        <Heading sx={{ fontSize: "13px" }}>{subscriber.h_siteincharge}</Heading>
                                                                    </Box>
                                                                </ContentBox>
                                                            </TableCell>

                                                            <TableCell style={{ width: '28%', padding: "0px", fontSize: "14px", borderBottom: "none" }}>
                                                                <ContentBox>
                                                                    <Icon className="icon">location_city</Icon>
                                                                    <Box ml="7px" mr="7px">
                                                                        <H4 sx={{ color: "white", fontSize: "15px" }}>Remark</H4>
                                                                        <Heading sx={{ fontSize: "13px", maxWidth:"100px", maxHeight:"20px", overflow:"hidden"}}>{subscriber?.add_handover_commnet}</Heading>

                                                                    </Box>
                                                                </ContentBox>
                                                            </TableCell>

                                                            <TableCell style={{ width: '25%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">
                                                                <ContentBox>
                                                                    <Box ml="7px" mr="7px">
                                                                        <H4 sx={{ color: "white", fontSize: "15px" }}> Status</H4>
                                                                        {subscriber?.h_approve_status === true ? <Chip size="small" style={{ fontSize: "13px" }} label="Aprroved" color="success" /> : <Chip style={{ fontSize: "13px" }} size="small" label="UnAprroved" color="error" />}

                                                                    </Box>
                                                                </ContentBox>
                                                            </TableCell>

                                                        </TableRow>
                                                    </TableHead>
                                                </Grid>

                                                <Grid item sm={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <Link
                                                        variant="contained"
                                                        to="/handover/view-handover"
                                                        state={subscriber}
                                                    >
                                                        <IconButton aria-label="details" aria-haspopup="true" sx={{ backgroundColor: "white", padding: "3px", marginRight: "4px" }}>
                                                            <Icon style={{ color: 'primary' }}>
                                                                trending_flat
                                                            </Icon>
                                                        </IconButton>
                                                    </Link>

                                                    <IconButton
                                                        sx={{ backgroundColor: "white", padding: "3px", marginRight: "4px" }}
                                                        aria-label="delete"
                                                        aria-haspopup="true"
                                                        onClick={() => deleteHandovers(subscriber?._id)}
                                                    >
                                                        <Icon color="error">close</Icon>
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                        </StylPopUp>
                                    </>
                                ))}
                    </StyledTable>

                    <TablePagination
                        sx={{ px: 2 }}
                        page={page}
                        component="div"
                        rowsPerPage={rowsPerPage}
                        count={handoverLists?.length}
                        onPageChange={handleChangePage}
                        rowsPerPageOptions={[5, 10, 25]}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        nextIconButtonProps={{ "aria-label": "Next Page" }}
                        backIconButtonProps={{ "aria-label": "Previous Page" }}
                    />
                </Box>
            </SimpleCard>
        </Container>
    );
};


export default HandoverList;
