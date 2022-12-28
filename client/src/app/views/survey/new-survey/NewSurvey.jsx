import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { Formik } from 'formik';
// import { validationSchema } from "./ValidationSchema"
import { Box, useTheme } from '@mui/system';
import { FlexBox } from 'app/components/FlexBox';
import { Breadcrumb, SimpleCard } from 'app/components';
import {
  Button,
  Grid,
  TextField,
  Icon,
  Stack,
  styled,
  Table,
  FormControlLabel,
  Checkbox,
  Typography,
  TableBody,
  MenuItem,
  TableCell,
  TableHead,
  IconButton,
  TableRow,
  TextareaAutosize,
} from '@mui/material';
import { addSurvey, getSurveyList } from 'app/redux/actions/SurveyAction';
import { addImage, addEvolutionImage } from 'app/redux/actions/UploadImages';
import { addImage2 } from 'app/redux/actions/UploadImages2';
import { Container, Form, StyledTextField, DropZone } from './FormStyle';
import { getUserList } from '../../../redux/actions/userAction';
import { StyledCard4 } from '../../Style';
import { getOrderListByEmp } from '../../../redux/actions/OrderAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createNotification } from 'app/redux/actions/NotificationActions';

const StyledCell = styled(TableCell)(() => ({ padding: 0 }));

const AddSurvey = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const orderData = useSelector((state) => state?.orders.workList);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user.user.first_name + ' ' + user.user.last_name);
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(
        getOrderListByEmp(user.user.first_name + ' ' + user.user.last_name)
      );
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);


  
  const [imageList2, setImageList2] = useState('');

  const elevationimage = imageList2;

  const [elevationImages, setElevationImages] = useState([
    {
      img_el_add_commnet: '',
      elevation_survey_images: elevationimage,
    },
  ]);

  const addelevationImage = () => {
    let object4 = {
      img_el_add_commnet: '',
      elevation_survey_images: elevationimage,
    };

    setElevationImages([...elevationImages, object4]);
  };

  // console.log('image 2222', elevationimage);

  console.log(
    'commnet ',
    elevationImages.map((a) => a?.elevation_survey_images?.name)
  );
  // console.log('imge 2', imageList2);




  // Floor Finishing===========

  const [floorfinishings, setFloorfinishings] = useState([
    { f_floor_no: '', f_finishing_status: '', f_add_review: '' },
  ]);

  const addflFinishing = () => {
    let object1 = {
      f_floor_no: '',
      f_finishing_status: '',
      f_add_review: '',
    };

    setFloorfinishings([...floorfinishings, object1]);
  };


  // Height And Width Elevation Wise===========

  const [welevations, setWelevations] = useState([
    {
      hw_floor_no: '',
      hw_height: '',
      hw_width: '',
      hw_elevation: '',
      hw_floor_height: '',
      hw_beam_height: '',
      hw_slab_height: '',
    },
  ]);

  const addwelevation = () => {
    let object2 = {
      hw_floor_no: '',
      hw_height: '',
      hw_width: '',
      hw_elevation: '',
      hw_floor_height: '',
      hw_beam_height: '',
      hw_slab_height: '',
    };

    setWelevations([...welevations, object2]);
  };

  // Water Lavel===================

  const [waterls, setWaterls] = useState([
    {
      w_floor_no: '',
      water_level: '',
      w_beam_height: '',
      w_slab_height: '',
      w_height_width: '',
    },
  ]);

  const addWaterL = () => {
    let object3 = {
      w_floor_no: '',
      water_level: '',
      w_beam_height: '',
      w_slab_height: '',
      w_height_width: '',
    };

    setWaterls([...waterls, object3]);
  };

  const onChange = (e, index) => {
    const updateElevationImage = elevationImages.map((elevationImage, i) =>
      index === i
        ? Object.assign(elevationImage, { [e.target.name]: e.target.value })
        : elevationImage
    );
    setElevationImages(updateElevationImage);

    const updatefloorFinishing = floorfinishings.map((floorfinishing, i) =>
      index === i
        ? Object.assign(floorfinishing, { [e.target.name]: e.target.value })
        : floorfinishing
    );
    setFloorfinishings(updatefloorFinishing);

    const updatWaterls = waterls.map((waterl, i) =>
      index === i
        ? Object.assign(waterl, { [e.target.name]: e.target.value })
        : waterl
    );
    setWaterls(updatWaterls);

    const updatwidthElevation = welevations.map((widthelevation, i) =>
      index === i
        ? Object.assign(widthelevation, { [e.target.name]: e.target.value })
        : widthelevation
    );
    setWelevations(updatwidthElevation);
  };

  const removeelevationImage = (index) => {
    const filteredElevationImage = [...elevationImages];
    filteredElevationImage.splice(index, 1);
    setElevationImages(filteredElevationImage);
  };

  const removefloorFinishing = (index) => {
    const filteredFloorFinishing = [...floorfinishings];
    filteredFloorFinishing.splice(index, 1);
    setFloorfinishings(filteredFloorFinishing);
  };

  const removeWelevation = (index) => {
    const filteredWGelevation = [...welevations];
    filteredWGelevation.splice(index, 1);
    setWelevations(filteredWGelevation);
  };

  const removeWaterl = (index) => {
    const filteredWaterl = [...waterls];
    filteredWaterl.splice(index, 1);
    setWaterls(filteredWaterl);
  };

  // const handleSubmitAll = (e) => {
  //   e.preventDefault();
  //   console.log(waterls, floorfinishings, welevations);
  // };

  const [imageList1, setImageList1] = useState([]);

  console.log(imageList1);

  useEffect(() => {
    const formData = new FormData();
    formData.append('elevation_survey_images', imageList2);
    dispatch(addEvolutionImage(formData));
  }, [imageList2]);

  const handleSubmit = async (values) => {
    const data = {
      floorfinishings: floorfinishings,
      welevations: welevations,
      waterls: waterls,
      site_incharge: user,
      survey_deadline: values.survey_deadline,
      ordergroup: values.ordergroup,
      building_saul: values.building_saul,
      floor_finishing_from_client: values.floor_finishing_from_client,
      mail_to_client: values.mail_to_client,
      celling_height: values.celling_height,
      lad_add_commnet: values.lad_add_commnet,
      approve_status: false,
      sitesurvey_notification: values.sitesurvey_notification,
      user_type_notifaction: values.user_type_notifaction,
      site_survey_images: imageList1.name,
      elevation_images: elevationImages.map((a) => a?.elevation_survey_images?.name),
      img_el_add_commnet: elevationImages.map((a) => a?.img_el_add_commnet),
    };

    dispatch(addSurvey(data));
    dispatch(getSurveyList());
    firstImageUpload();
    // secoundImageUpload();
    dispatch(createNotification(data));
    navigate('/emp/survey');
    // window.location.reload(true);
    toast.success('Add Survey Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const firstImageUpload = () => {
    const formData = new FormData();
    formData.append('site_survey_images', imageList1);
    dispatch(addImage(formData));
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
          <Breadcrumb
            routeSegments={[
              { name: 'Survey', path: '/Survey/survey-list' },
              { name: 'New Survey' },
            ]}
          />
        </Box>

        <Button
          sx={{ mb: 2, pl: 1 }}
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
        >
          <Icon>navigate_before</Icon> Back
        </Button>

        {/* Add New Survey................ */}

        <Stack spacing={3}>
          <Formik
            enctype="multipart/form-data"
            onSubmit={handleSubmit}
            enableReinitialize={true}
            initialValues={{
              site_incharge: user,
              ordergroup: '',
              building_saul: '',
              survey_deadline: '',
              floor_finishing_from_client: '',
              mail_to_client: '',
              celling_height: '',
              lad_add_commnet: '',
              approve_status: false,
              latest_architecture_drawing: '',
              elevation_images: "",
              sitesurvey_notification: 'New Site Survey Submited For Approvel',
              user_type_notifaction:"Admin",
              site_survey_images: '',
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
              <Form>
                <Stack style={{ marginBottom: '20px' }}>
                  <SimpleCard title="Add New Survey">
                    <Grid container spacing={3}>
                      <Grid item sm={6} xs={12}>
                        <StyledTextField
                          fullWidth
                          select
                          name="ordergroup"
                          label="Order Group"
                          size="small"
                          variant="outlined"
                          value={values.ordergroup || ''}
                          onChange={handleChange}
                        >
                          {orderData.map((resCountry, index) => (
                            <MenuItem
                              value={resCountry.work_order_group}
                              key={index}
                            >
                              {resCountry.work_order_group}
                            </MenuItem>
                          ))}
                        </StyledTextField>
                        {/* <StyledTextField
                          fullWidth
                          size="small"
                          name="survey_deadline"
                          label="Site Survey DeadLine"
                          variant="outlined"
                          value={values.survey_deadline || ""}
                          onChange={handleChange}
                        /> */}

                        <StyledTextField
                          fullWidth
                          size="small"
                          name="site_incharge"
                          variant="outlined"
                          label="Site Incharge"
                          value={values.site_incharge || ''}
                        ></StyledTextField>

                        <StyledTextField
                          fullWidth
                          size="small"
                          name="celling_height"
                          label="Celling Height"
                          variant="outlined"
                          value={values.celling_height || ''}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item sm={6} xs={12}>
                        <StyledTextField
                          fullWidth
                          size="small"
                          name="building_saul"
                          label="Building Saul"
                          variant="outlined"
                          value={values.building_saul || ''}
                          onChange={handleChange}
                        />

                        <StyledTextField
                          fullWidth
                          size="small"
                          name="floor_finishing_from_client"
                          label="Floor Finishing From Client"
                          variant="outlined"
                          value={values.floor_finishing_from_client || ''}
                          onChange={handleChange}
                        />

                        <StyledTextField
                          fullWidth
                          size="small"
                          name="mail_to_client"
                          label="Mail To Client"
                          variant="outlined"
                          value={values.mail_to_client || ''}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                  </SimpleCard>
                </Stack>

                {/* Latest Architecture Drawing................ */}
                <Stack style={{ marginBottom: '20px' }}>
                  <SimpleCard title="Latest Architecture Drawing">
                    <Grid container spacing={3}>
                      <Grid item sm={6} xs={12}>
                        <input
                          type="file"
                          multiple
                          id="file"
                          name="site_survey_images"
                          onChange={(e) => setImageList1(e.target.files[0])}
                        />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextareaAutosize
                          name="lad_add_commnet"
                          label="Add Your Commnets"
                          placeholder="Add Your Commnets"
                          value={values.lad_add_commnet || ''}
                          onChange={handleChange}
                          multiline
                          rows={1}
                          style={{
                            width: '100%',
                            height: '100px',
                            border: '1px solid #dadada',
                            borderRadius: '5px',
                          }}
                        />
                      </Grid>
                    </Grid>
                  </SimpleCard>
                </Stack>

                {/* Elevation images................ */}
                <Stack style={{ marginBottom: '20px' }}>
                  <SimpleCard title="Elevation images">
                    <Box overflow="auto">
                      <Table sx={{ whiteSpace: 'pre', minWidth: 750 }}>
                        <TableHead>
                          <TableRow>
                            <TableCell colSpan={6}>Elevation images</TableCell>
                            <TableCell colSpan={5}>
                              Add Your Commnets{' '}
                            </TableCell>
                            <StyledCell colSpan={1} align="center" />
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {elevationImages.map((elevationImage, index) => (
                            <TableRow key={index} sx={{ position: 'relative' }}>
                              <StyledCell colSpan={6} align="left">
                                <input
                                  type="file"
                                  multiple
                                  id="elevation_survey_images"
                                  name="elevation_survey_images"
                                  onChange={(e) =>
                                    setImageList2(e.target.files[0])
                                  }
                                />
                              </StyledCell>

                              <StyledCell colSpan={5} align="left">
                                <TextField
                                  size="small"
                                  name="img_el_add_commnet"
                                  label="Add Your Commnets"
                                  onChange={(e) => onChange(e, index)}
                                  value={elevationImage.img_el_add_commnet}
                                  multiline
                                  sx={{ ml: 2, width: '100%' }}
                                />
                              </StyledCell>

                              <StyledCell colSpan={1} align="center">
                                <IconButton
                                  size="small"
                                  onClick={() => removeelevationImage(index)}
                                >
                                  <Icon color="error" fontSize="small">
                                    clear
                                  </Icon>
                                </IconButton>
                              </StyledCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>

                      <Button
                        color="primary"
                        variant="contained"
                        sx={{ mt: '16px !important' }}
                        onClick={addelevationImage}
                      >
                        + Add
                      </Button>
                    </Box>
                  </SimpleCard>
                </Stack>

                {/* Floor Finishing................ */}
                <Stack style={{ marginBottom: '20px' }}>
                  <SimpleCard title="Floor Finishing">
                    <Box overflow="auto">
                      <Table sx={{ whiteSpace: 'pre', minWidth: 750 }}>
                        <TableHead>
                          <TableRow>
                            <TableCell colSpan={3}>Floor No</TableCell>
                            <TableCell colSpan={3}>Finishing Status</TableCell>
                            <TableCell colSpan={5}>Add Your Review </TableCell>
                            <StyledCell colSpan={1} align="center" />
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {floorfinishings.map((floorfinishing, index) => (
                            <TableRow key={index} sx={{ position: 'relative' }}>
                              <StyledCell colSpan={3} align="left">
                                <TextField
                                  size="small"
                                  name="f_floor_no"
                                  label="Floor No"
                                  onChange={(e) => onChange(e, index)}
                                  value={floorfinishing.f_floor_no}
                                  multiline
                                  sx={{ width: '95%', m: '10px' }}
                                />
                              </StyledCell>

                              <StyledCell colSpan={3} align="left">
                                <TextField
                                  size="small"
                                  name="f_finishing_status"
                                  label="Finishing Status"
                                  onChange={(e) => onChange(e, index)}
                                  value={floorfinishing.f_finishing_status}
                                  multiline
                                  sx={{ width: '95%', m: '10px' }}
                                />
                              </StyledCell>

                              <StyledCell colSpan={5} align="left">
                                <TextField
                                  size="small"
                                  name="f_add_review"
                                  label="Add Your Review"
                                  onChange={(e) => onChange(e, index)}
                                  value={floorfinishing.f_add_review}
                                  multiline
                                  sx={{ width: '100%', m: '10px' }}
                                />
                              </StyledCell>

                              <StyledCell colSpan={1} align="center">
                                <IconButton
                                  size="small"
                                  onClick={() => removefloorFinishing(index)}
                                >
                                  <Icon color="error" fontSize="small">
                                    clear
                                  </Icon>
                                </IconButton>
                              </StyledCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>

                      <Button
                        color="primary"
                        variant="contained"
                        sx={{ mt: '16px !important' }}
                        onClick={addflFinishing}
                      >
                        + Add
                      </Button>
                    </Box>
                  </SimpleCard>
                </Stack>

                {/* Height And Width Elevation wise................ */}
                <Stack style={{ marginBottom: '20px' }}>
                  <SimpleCard title="Height And Width Elevation wise">
                    <Box overflow="auto">
                      <Table sx={{ whiteSpace: 'pre', minWidth: 850 }}>
                        <TableHead>
                          <TableRow>
                            <TableCell colSpan={2}>Floor No</TableCell>
                            <TableCell colSpan={2}>Height</TableCell>
                            <TableCell colSpan={2}>Width</TableCell>
                            <TableCell colSpan={2}>Elevation</TableCell>
                            <TableCell colSpan={2}>Floor Height</TableCell>
                            <TableCell colSpan={2}>Beam Height </TableCell>
                            <TableCell colSpan={2}>Slab Height </TableCell>
                            <StyledCell colSpan={1} align="center" />
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {welevations.map((widthelevation, index) => (
                            <TableRow key={index} sx={{ position: 'relative' }}>
                              <StyledCell colSpan={2} align="left">
                                <TextField
                                  size="small"
                                  name="hw_floor_no"
                                  label="Floor No"
                                  onChange={(e) => onChange(e, index)}
                                  value={widthelevation.hw_floor_no}
                                  multiline
                                  sx={{ width: '95%', m: '10px' }}
                                />
                              </StyledCell>

                              <StyledCell colSpan={2} align="left">
                                <TextField
                                  size="small"
                                  name="hw_height"
                                  label="Height"
                                  onChange={(e) => onChange(e, index)}
                                  value={widthelevation.hw_height}
                                  multiline
                                  sx={{ width: '95%', m: '10px' }}
                                />
                              </StyledCell>

                              <StyledCell colSpan={2} align="left">
                                <TextField
                                  size="small"
                                  name="hw_width"
                                  label="Width"
                                  onChange={(e) => onChange(e, index)}
                                  value={widthelevation.hw_width}
                                  multiline
                                  sx={{ width: '95%', m: '10px' }}
                                />
                              </StyledCell>
                              <StyledCell colSpan={2} align="left">
                                <TextField
                                  size="small"
                                  name="hw_elevation"
                                  label="Elevation"
                                  onChange={(e) => onChange(e, index)}
                                  value={widthelevation.hw_elevation}
                                  multiline
                                  sx={{ width: '95%', m: '10px' }}
                                />
                              </StyledCell>
                              <StyledCell colSpan={2} align="left">
                                <TextField
                                  size="small"
                                  name="hw_floor_height"
                                  label="Floor Height"
                                  onChange={(e) => onChange(e, index)}
                                  value={widthelevation.hw_floor_height}
                                  multiline
                                  sx={{ width: '95%', m: '10px' }}
                                />
                              </StyledCell>
                              <StyledCell colSpan={2} align="left">
                                <TextField
                                  size="small"
                                  name="hw_beam_height"
                                  label="Beam Height"
                                  onChange={(e) => onChange(e, index)}
                                  value={widthelevation.hw_beam_height}
                                  multiline
                                  sx={{ width: '95%', m: '10px' }}
                                />
                              </StyledCell>
                              <StyledCell colSpan={2} align="left">
                                <TextField
                                  size="small"
                                  name="hw_slab_height"
                                  label="Slab Height"
                                  onChange={(e) => onChange(e, index)}
                                  value={widthelevation.hw_slab_height}
                                  multiline
                                  sx={{ width: '100%', m: '10px' }}
                                />
                              </StyledCell>
                              <StyledCell colSpan={1} align="center">
                                <IconButton
                                  size="small"
                                  onClick={() => removeWelevation(index)}
                                >
                                  <Icon color="error" fontSize="small">
                                    clear
                                  </Icon>
                                </IconButton>
                              </StyledCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>

                      <Button
                        color="primary"
                        variant="contained"
                        sx={{ mt: '16px !important' }}
                        onClick={addwelevation}
                      >
                        + Add
                      </Button>
                    </Box>
                  </SimpleCard>
                </Stack>

                {/* Water Level................ */}
                <Stack style={{ marginBottom: '20px' }}>
                  <SimpleCard title="Water Lavel">
                    <Box overflow="auto">
                      <Table sx={{ whiteSpace: 'pre', minWidth: 750 }}>
                        <TableHead>
                          <TableRow>
                            <TableCell colSpan={2}>Floor No</TableCell>
                            <TableCell colSpan={2}>Water Level</TableCell>
                            <TableCell colSpan={2}>Beam Height</TableCell>
                            <TableCell colSpan={2}>Slab Height</TableCell>
                            <TableCell colSpan={3}>
                              Height And Width Elevation wise
                            </TableCell>
                            <StyledCell colSpan={1} align="center" />
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {waterls.map((waterl, index) => (
                            <TableRow key={index} sx={{ position: 'relative' }}>
                              <StyledCell colSpan={2} align="left">
                                <TextField
                                  size="small"
                                  name="w_floor_no"
                                  label="Floor No"
                                  onChange={(e) => onChange(e, index)}
                                  value={waterl.w_floor_no}
                                  multiline
                                  sx={{ width: '95%', m: '10px' }}
                                />
                              </StyledCell>

                              <StyledCell colSpan={2} align="left">
                                <TextField
                                  size="small"
                                  name="water_level"
                                  label="Water Level"
                                  onChange={(e) => onChange(e, index)}
                                  value={waterl.water_level}
                                  multiline
                                  sx={{ width: '95%', m: '10px' }}
                                />
                              </StyledCell>

                              <StyledCell colSpan={2} align="left">
                                <TextField
                                  size="small"
                                  name="w_beam_height"
                                  label="Beam Height"
                                  onChange={(e) => onChange(e, index)}
                                  value={waterl.w_beam_height}
                                  multiline
                                  sx={{ width: '95%', m: '10px' }}
                                />
                              </StyledCell>
                              <StyledCell colSpan={2} align="left">
                                <TextField
                                  size="small"
                                  name="w_slab_height"
                                  label="Slab Height"
                                  onChange={(e) => onChange(e, index)}
                                  value={waterl.w_slab_height}
                                  multiline
                                  sx={{ width: '95%', m: '10px' }}
                                />
                              </StyledCell>
                              <StyledCell colSpan={3} align="left">
                                <TextField
                                  size="small"
                                  name="w_height_width"
                                  label="Height And Width Elevation wise"
                                  onChange={(e) => onChange(e, index)}
                                  value={waterl.w_height_width}
                                  multiline
                                  sx={{ width: '100%', m: '10px' }}
                                />
                              </StyledCell>
                              <StyledCell colSpan={1} align="center">
                                <IconButton
                                  size="small"
                                  onClick={() => removeWaterl(index)}
                                >
                                  <Icon color="error" fontSize="small">
                                    clear
                                  </Icon>
                                </IconButton>
                              </StyledCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>

                      <Button
                        color="primary"
                        variant="contained"
                        sx={{ mt: '16px !important' }}
                        onClick={addWaterL}
                      >
                        + Add
                      </Button>
                    </Box>
                  </SimpleCard>
                </Stack>

                <StyledCard4>
                  <FormControlLabel
                    control={<Checkbox />}
                    name="approve_status"
                    value={values.approve_status}
                    onChange={handleChange}
                    label={
                      <Typography style={{ fontSize: '20px' }}>
                        Approve Site Survey
                      </Typography>
                    }
                    sx={{ width: '100%', mt: '30px' }}
                  />
                </StyledCard4>

                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {/* <Button
                    color="primary"
                    variant="contained"
                    sx={{
                      alignContent: 'center',
                      mt: '0px !important',
                      mr: '10px',
                    }}
                    onClick={handleSubmitAll}
                  >
                    Save
                  </Button> */}
                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{ mt: '0px !important', ml: 2, px: 6 }}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Stack>
      </Container>
      <ToastContainer />
    </>
  );
};

export default AddSurvey;
