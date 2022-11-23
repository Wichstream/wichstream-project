import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";

// Soft UI Dashboard PRO React example components
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Soft UI Dashboard PRO React icons
import Cube from "examples/Icons/Cube";
import Document from "examples/Icons/Document";
import Settings from "examples/Icons/Settings";

import axios from "axios";

// Soft UI Dashboard PRO React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Custom styles for Header
import styles from "layouts/profile/components/Header/styles";

// Images
import burceMars from "assets/images/bruce-mars.jpg";

import { API_SERVER } from "../../../../config/constant";

function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const classes = styles();

  const tokenUserSession = localStorage.getItem("user");
  console.log(tokenUserSession);
  const jsonTokenUserSession = JSON.parse(tokenUserSession);
  const AuthStr = jsonTokenUserSession.token;

  const [user, setUser] = useState(null);

  
  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
      ? setTabsOrientation("vertical")
      : setTabsOrientation("horizontal");
    }
    
    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
     */
    window.addEventListener("resize", handleTabsOrientation);
    
    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  useEffect(() => {
    axios
      .get(API_SERVER + "users/user", { headers: { Authorization: AuthStr } })
      .then((response) => {
        setUser(response.data.userDto);
      });
  }, []);

  if (!user) return null;

  return (
    <SuiBox position="relative">
      <DashboardNavbar absolute light />
      <SuiBox customClass={classes.profileHeader_background} />
      <Card className={classes.profileHeader_profile}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <SuiAvatar
              src={burceMars}
              alt="profile-image"
              variant="rounded"
              size="xl"
              customClass="shadow-sm"
            />
          </Grid>
          <Grid item>
            <SuiBox height="100%" mt={0.5} lineHeight={1}>
              <SuiTypography variant="h5" fontWeight="medium">
                {user.username}
              </SuiTypography>
            </SuiBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} className="ml-auto">
            <AppBar position="static">
              <Tabs
                orientation={tabsOrientation}
                value={tabValue}
                onChange={handleSetTabValue}
                className="bg-transparent"
              ></Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </SuiBox>
  );
}

export default Header;
