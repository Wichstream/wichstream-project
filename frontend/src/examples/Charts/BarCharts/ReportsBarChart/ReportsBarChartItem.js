import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiProgress from "components/SuiProgress";

function ReportsBarChartItem({ color, icon, label, progress }) {
  const { size } = typography;

  return (
    <SuiBox width="100%">
      <SuiBox display="flex" alignItems="center" mb={2}>
        <SuiBox
          backgroundColor={icon.color}
          width="1.25rem"
          height="1.25rem"
          borderRadius="sm"
          color="white"
          fontSize={size.xs}
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="md"
          mr={1}
          backgroundGradient
        >
          <Icon>{icon.component}</Icon>
        </SuiBox>
        <SuiTypography
          variant="caption"
          textTransform="capitalize"
          fontWeight="medium"
          textColor="text"
        >
          {label}
        </SuiTypography>
      </SuiBox>
      <SuiBox mt={1}>
        <SuiTypography variant="h4" fontWeight="bold" textColor={color}>
          {progress.content}
        </SuiTypography>
        <SuiBox width="75%" mt={0.5}>
          <SuiProgress value={progress.percentage} color={color} noLabel />
        </SuiBox>
      </SuiBox>
    </SuiBox>
  );
}

// Setting default values for the props of ReportsBarChartItem
ReportsBarChartItem.defaultProps = {
  color: "dark",
};

// Typechecking props for the ReportsBarChartItem
ReportsBarChartItem.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"])
      .isRequired,
    component: PropTypes.node.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
  progress: PropTypes.shape({
    content: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReportsBarChartItem;
