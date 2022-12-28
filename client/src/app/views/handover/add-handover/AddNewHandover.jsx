import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import { Formik } from "formik";
import { Box, useTheme } from "@mui/system";
import { FlexBox } from "app/components/FlexBox";
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, TextField, Icon, Stack, Divider, Typography, Checkbox, FormControlLabel, MenuItem } from "@mui/material";
import { addHandover, getHandoverList } from 'app/redux/actions/HandoverAction';
import { Container, Form, StyledTextField, DropZone } from './FormStyle';
import { createNotification } from "app/redux/actions/NotificationActions";
import { getOrderListByEmp } from "../../../redux/actions/OrderAction";
import { H3 } from "app/components/Typography";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddNewHandover = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [imageList, setImageList] = useState([]);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "image/*",
  });

  const [user, setUser] = useState()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user.user.first_name + " " + user.user.last_name);
  }, []);


  const orderData = useSelector(state => state?.orders.workList);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(getOrderListByEmp(user.user.first_name + " " + user.user.last_name));
    }
  }, [dispatch]);

  useEffect(() => {
    setImageList(acceptedFiles);
  }, [acceptedFiles]);


  const { palette } = useTheme();
  const textMuted = palette.text.secondary;

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("h_sitename",values.h_sitename);
    formData.append("h_siteincharge",values.h_siteincharge);
    formData.append("handover_ckb1",values.handover_ckb1);
    formData.append("handover_ckb2",values.handover_ckb2);
    formData.append("handover_ckb3",values.handover_ckb3);
    formData.append("handover_ckb4",values.handover_ckb4);
    formData.append("handover_ckb5",values.handover_ckb5);
    formData.append("handover_ckb6",values.handover_ckb6);
    formData.append("handover_ckb7",values.handover_ckb7);
    formData.append("handover_ckb8",values.handover_ckb8);
    formData.append("handover_ckb9",values.handover_ckb9);
    formData.append("add_handover_commnet",values.add_handover_commnet);
    formData.append("h_approve_status",values.h_approve_status);
    formData.append("site_survey_images",values.site_survey_images);
    formData.append("handover_pic",imageList[0]);

    dispatch(addHandover(formData))
    dispatch(createNotification(values));
    toast.success('Add Handover Successfully!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    dispatch(getHandoverList())
    navigate("/emp/handoverlist")
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        theme="colored"
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
          <Breadcrumb routeSegments={[{ name: "Handover", path: "/handover/handover-list" }, { name: "New Handover" }]} />
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
                h_sitename: "",
                h_siteincharge: user,
                handover_ckb1: false,
                handover_ckb2: false,
                handover_ckb3: false,
                handover_ckb4: false,
                handover_ckb5: false,
                handover_ckb6: false,
                handover_ckb7: false,
                handover_ckb8: false,
                handover_ckb9: false,
                add_handover_commnet: "",
                h_approve_status: false,
                site_survey_images:"",
                handover_notification: "New Handover submited for Approval",
                user_type_notifaction:"Admin",
                status: false,
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setSubmitting,
                setFieldValue,
              }) => (
                <Form >

                  <Box mt="10px">
                    <Grid container spacing={3}>
                      <Grid item sm={6} xs={12}>

                        <StyledTextField
                          fullWidth
                          select
                          size="small"
                          name="h_sitename"
                          label="Enter Site Name."
                          onChange={handleChange}
                          value={values.h_sitename || ""}
                          variant="outlined"
                        >
                          {orderData?.map((item) => (
                            <MenuItem value={item?.work_order_group} key={item._id}>
                              {item?.work_order_group}
                            </MenuItem>
                          ))}
                        </StyledTextField>

                        {/* <StyledTextField
                          fullWidth
                          size="small"
                          name="handover_deadline_sm"
                          label="Handover Deadline"
                          variant="outlined"
                          value={values.handover_deadline_sm || ""}
                          onChange={handleChange}
                        /> */}
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <StyledTextField
                          fullWidth
                          size="small"
                          name="h_siteincharge"
                          variant="outlined"
                          label="Site Incharge"
                          value={values.h_siteincharge || ""}
                          onChange={handleChange}
                        >
                        </StyledTextField>
                      </Grid>
                    </Grid>
                  </Box>

                  <FormControlLabel
                    control={<Checkbox />}
                    name="handover_ckb1"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Get your scrap back with verification.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="handover_ckb2"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Check all joint of silicone before removal of scaffolding.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="handover_ckb3"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Water test.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="handover_ckb4"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Cleaning Sticker/protection tape removal etc.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="handover_ckb5"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Measurement before removal of scaffolding.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="handover_ckb6"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Return challan & scaffolding if scaffolding is our side.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="handover_ckb7"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Scaffolding labour, bill and measurement check.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="handover_ckb8"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Check Contractor's safety equipments bags/tools if any.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="handover_ckb9"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Get completion certificate from client.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />


                  <Divider sx={{ mt: 3, mb: 2 }} />
                  <H3 sx={{ mb: 2 }} fontWeight={500}>Take all photos after cleaning and upload / Remark </H3>
                  <Box>
                    <Grid container spacing={3}>
                      <Grid item sm={6} xs={12}>

                        <DropZone sx={{ height: "40px" }} {...getRootProps()}>
                          <input {...getInputProps()} />
                          <FlexBox alignItems="center" >
                            <Icon sx={{ color: textMuted, fontSize: "48px" }}>publish</Icon>
                            {imageList.length ? (
                              <span>{imageList.length} images were selected</span>
                            ) : (
                              <span>Upload Cleaning photos Here</span>
                            )}
                          </FlexBox>
                        </DropZone>

                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextField
                          size="small"
                          name="add_handover_commnet"
                          label="Add Comment if any."
                          onChange={handleChange}
                          value={values.add_handover_commnet || ""}
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
                      Submit
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



export default AddNewHandover;