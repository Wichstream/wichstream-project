import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function DefaultInfoCard({ color, icon, title, description, value }) {
  return (
    <Card>
      <SuiBox p={2} mx={3} display="flex" justifyContent="center">
        <SuiBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          backgroundColor={color}
          color="white"
          width="4rem"
          height="4rem"
          boxShadow="regular"
          borderRadius="lg"
          backgroundGradient
        >
          <Icon fontSize="medium">{icon}</Icon>
        </SuiBox>
      </SuiBox>
      <SuiBox pb={2} px={2} textAlign="center" lineHeight={1}>
        <SuiTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SuiTypography>
        {description && (
          <SuiTypography variant="caption" textColor="text" fontWeight="regular">
            {description}
          </SuiTypography>
        )}
        {description && !value ? null : <Divider />}
        {value && (
          <SuiTypography variant="h5" fontWeight="medium">
            {value}
          </SuiTypography>
        )}
      </SuiBox>
    </Card>
  );
}

// Setting default values for the props of DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  value: "",
  description: "",
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DefaultInfoCard;
