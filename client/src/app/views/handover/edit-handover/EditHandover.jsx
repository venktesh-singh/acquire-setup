import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import { Box, useTheme } from "@mui/system";
import { FlexBox } from "app/components/FlexBox";
import { Formik } from "formik";
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, TextField, Icon, Stack, Divider, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { Container, Form, StyledTextField, DropZone } from './FormStyle';
import { H3 } from "app/components/Typography";
import { updateHandover } from "app/redux/actions/HandoverAction";
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addImage } from 'app/redux/actions/UploadImages';


// const StyledCell = styled(TableCell)(() => ({ padding: 0 }));

const EditHandover = () => {
    const location = useLocation()
    const handoverData = location.state
    const id = handoverData?._id;
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [imageList1, setImageList1] = useState([]);
    const picture = imageList1.name;

    const [state, setState] = useState({
        h_sitename: handoverData.h_sitename,
        h_siteincharge: handoverData.h_siteincharge,
        handover_ckb1: handoverData.handover_ckb1,
        handover_ckb2: handoverData.handover_ckb2,
        handover_ckb3: handoverData.handover_ckb3,
        handover_ckb4: handoverData.handover_ckb4,
        handover_ckb5: handoverData.handover_ckb5,
        handover_ckb6: handoverData.handover_ckb6,
        handover_ckb7: handoverData.handover_ckb7,
        handover_ckb8: handoverData.handover_ckb8,
        handover_ckb9: handoverData.handover_ckb9,
        add_handover_commnet: handoverData.add_handover_commnet,
        site_survey_images: handoverData.site_survey_images,
    });

    const handleSubmit = (event) => {

        const formData = new FormData();
        formData.append("site_survey_images", imageList1);

        dispatch(updateHandover(id, state))
        dispatch(addImage(formData))
        navigate("/emp/handoverlist")
        toast.success('Update Handover Successfully!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    };

    const handleChange = (event) => {
        event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const handleCheckBox1 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                handover_ckb1: !prevState.handover_ckb1,
            }
        })
    }
    const handleCheckBox2 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                handover_ckb2: !prevState.handover_ckb2,
            }
        })
    }
    const handleCheckBox3 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                handover_ckb3: !prevState.handover_ckb3,
            }
        })
    }
    const handleCheckBox4 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                handover_ckb4: !prevState.handover_ckb4,
            }
        })
    }
    const handleCheckBox5 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                handover_ckb5: !prevState.handover_ckb5,
            }
        })
    }
    const handleCheckBox6 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                handover_ckb6: !prevState.handover_ckb6,
            }
        })
    }
    const handleCheckBox7 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                handover_ckb7: !prevState.handover_ckb7,
            }
        })
    }
    const handleCheckBox8 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                handover_ckb8: !prevState.handover_ckb8,
            }
        })
    }

    const handleCheckBox9 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                handover_ckb9: !prevState.handover_ckb9,
            }
        })
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

            <Container>
                <Box className="breadcrumb">
                    <Breadcrumb routeSegments={[{ name: "Drawing", path: "/drawing/drawing-list" }, { name: "New Drawing" }]} />
                </Box>

                <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
                    <Icon >navigate_before</Icon> Back
                </Button>



                <Stack spacing={3}>
                    {/* Material Details................ */}

                    <SimpleCard title="Working Handover">
                        <Formik
                            onSubmit={handleSubmit}
                            enableReinitialize={true}
                            initialValues={{
                                handover_ckb1: false,
                                handover_ckb2: false,
                                handover_ckb3: false,
                                handover_ckb4: false,
                                handover_ckb5: false,
                                handover_ckb6: false,
                                handover_ckb7: false,
                                handover_ckb8: false,
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                //handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                setSubmitting,
                                setFieldValue,
                            }) => (
                                <Form enctype="multipart/form-data">

                                    <Box mt="10px">
                                        <Grid container spacing={3}>
                                            <Grid item sm={6} xs={12}>
                                                <StyledTextField
                                                    fullWidth
                                                    size="small"
                                                    name="h_sitename"
                                                    label="Site Name."
                                                    value={state.h_sitename || ""}
                                                    variant="outlined"
                                                />
                                            </Grid>

                                            <Grid item sm={6} xs={12}>
                                                <StyledTextField
                                                    fullWidth
                                                    size="small"
                                                    name="h_siteincharge"
                                                    label="Site Incharge."
                                                    value={state.h_siteincharge || ""}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.handover_ckb1 === true ? 'Checked' : ''} />}
                                        name="handover_ckb1"
                                        value={true}
                                        onChange={handleCheckBox1}
                                        label={<Typography style={{ fontSize: '20px' }}>Get your scrap back with verification.</Typography>}
                                        sx={{ width: '100%', mt: "30px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.handover_ckb2 === true ? 'Checked' : ''} />}
                                        name="handover_ckb2"
                                        value={true}
                                        onChange={handleCheckBox2}
                                        label={<Typography style={{ fontSize: '20px' }}>Check all joint of silicone before removal of scaffolding.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.handover_ckb3 === true ? 'Checked' : ''} />}
                                        name="handover_ckb3"
                                        value={true}
                                        onChange={handleCheckBox3}
                                        label={<Typography style={{ fontSize: '20px' }}>Water test.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.handover_ckb4 === true ? 'Checked' : ''} />}
                                        name="handover_ckb4"
                                        value={true}
                                        onChange={handleCheckBox4}
                                        label={<Typography style={{ fontSize: '20px' }}>Cleaning Sticker/protection tape removal etc.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.handover_ckb5 === true ? 'Checked' : ''} />}
                                        name="handover_ckb5"
                                        value={true}
                                        onChange={handleCheckBox5}
                                        label={<Typography style={{ fontSize: '20px' }}>Measurement before removal of scaffolding.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.handover_ckb6 === true ? 'Checked' : ''} />}
                                        name="handover_ckb6"
                                        value={true}
                                        onChange={handleCheckBox6}
                                        label={<Typography style={{ fontSize: '20px' }}>Return challan & scaffolding if scaffolding is our side.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.handover_ckb7 === true ? 'Checked' : ''} />}
                                        name="handover_ckb7"
                                        value={true}
                                        onChange={handleCheckBox7}
                                        label={<Typography style={{ fontSize: '20px' }}>Scaffolding labour, bill and measurement check.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.handover_ckb8 === true ? 'Checked' : ''} />}
                                        name="handover_ckb8"
                                        value={true}
                                        onChange={handleCheckBox8}
                                        label={<Typography style={{ fontSize: '20px' }}>Check Contractor's safety equipments bags/tools if any.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.handover_ckb9 === true ? 'Checked' : ''} />}
                                        name="handover_ckb8"
                                        value={true}
                                        onChange={handleCheckBox9}
                                        label={<Typography style={{ fontSize: '20px' }}>Get completion certificate from client.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <Divider sx={{ mt: 3, mb: 2 }} />
                                    <H3 sx={{ mb: 2 }} fontWeight={500}>Take all photos after cleaning and upload / Remark </H3>
                                    <Box>
                                        <Grid container spacing={3}>
                                            <Grid item sm={6} xs={12}>

                                                <StyledTextField
                                                    type="file"
                                                    multiple
                                                    id='file'
                                                    name='site_survey_images'
                                                    onChange={(e) => setImageList1(e.target.files[0])}
                                                />

                                                {/* <StyledTextField
                                                    type="text"
                                                    name='site_survey_images'
                                                    value={imageList1.name}
                                                    onChange={(e) => setImageList1(e.target.value)}
                                                /> */}

                                                <input 
                                                type="text" 
                                                name='site_survey_images' 
                                                />

                                            </Grid>


                                            <Grid item sm={6} xs={12}>
                                                <TextField
                                                    size="small"
                                                    name="add_handover_commnet"
                                                    label="Add Remarks if any."
                                                    onChange={handleChange}
                                                    value={state.add_handover_commnet || ""}
                                                    multiline
                                                    rows={1}
                                                    sx={{ width: '100%' }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>


                                    <Divider sx={{ mt: 3, mb: 2 }} />


                                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", }}>
                                        <Button onClick={handleSubmit} type="submit" color="primary" variant="contained" sx={{ mt: "0px !important", ml: 2, px: 6 }}>
                                            Update Handover
                                        </Button>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </SimpleCard>
                </Stack>
                {/* <ToastContainer /> */}
            </Container>
        </>
    )
}


// const initialValues = {
//     handover_ckb1: false,
//     handover_ckb2: false,
//     handover_ckb3: false,
//     handover_ckb4: false,
//     handover_ckb5: false,
//     handover_ckb6: false,
//     handover_ckb7: false,
//     handover_ckb8: false,
//     handover_pic: {},
// };

export default EditHandover;