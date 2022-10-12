// @mui material components
import { makeStyles } from "@mui/styles";

// Images
import curved1 from "assets/images/curved-images/curved1.jpg";

export default makeStyles(({ palette, functions }) => {
  const { linearGradient, rgba, pxToRem } = functions;
  const { gradients } = palette;

  return {
    mediaPlayer: {
      backgroundImage: `${linearGradient(
        rgba(gradients.dark.main, 0.85),
        rgba(gradients.dark.state, 0.85)
      )}, url(${curved1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },

    mediaPlayer_button: {
      width: pxToRem(46),
      height: pxToRem(46),
      minWidth: pxToRem(46),
      minHeight: pxToRem(46),
      marginRight: pxToRem(8),
    },
  };
});
