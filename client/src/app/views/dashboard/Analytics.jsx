import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import DoughnutChart from './shared/Doughnut';
import StatCards from './shared/StatCards';
import StatCards2 from './shared/StatCards2';
import TopSellingTable from './shared/TopSellingTable';
import UpgradeCard from './shared/UpgradeCard';
import { useState, useEffect } from 'react';
import EmpDeadlinePopup from './shared/EmpDeadlinePopup';
import { useDispatch } from 'react-redux';
import { getOrderListByEmp } from "../../redux/actions/OrderAction"


const ContentBox = styled('div')(({ theme }) => ({
  padding: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));

const Analytics = () => {
  const dispatch = useDispatch();
  const { palette } = useTheme();

  const [user, setUser] = useState();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user.user.user_type);
    }
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(getOrderListByEmp(user.user.first_name + " " + user.user.last_name));
    }
  }, [dispatch]);

  // const totalsms = orderData
  // .map((filteredPerson) => ((moment(filteredPerson?.site_survey_deadline).format("DD-MM-YYYY")) < formattedDate ? "hello" : null ));


  return (
    <>

      {user === "Employee" ?
        <>
          <EmpDeadlinePopup />
        </>
        : null}

      <Fragment>
        <ContentBox className="analytics" sx={{backgroundColor:"#f4f5fa"}}>
          <Grid container spacing={3}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <StatCards />
              <TopSellingTable />
              {/* <StatCards2 /> */}

              {/* <H4>Ongoing Projects</H4>
              <RowCards /> */}
            </Grid>

            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <Title>Traffic Sources</Title>
                <SubTitle>Last 30 days</SubTitle>

                <DoughnutChart
                  height="300px"
                  color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                />
              </Card>

              <UpgradeCard />
              {/* <Campaigns /> */}
            </Grid>
          </Grid>
        </ContentBox>
      </Fragment>
    </>

  );
};

export default Analytics;
