/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiBadge from "components/SuiBadge";
import Icon from "@mui/material/Icon";

// Images
import stream1 from "assets/images/streams/disneyplus.jpg";
import stream2 from "assets/images/streams/netflix.jpg";
import stream3 from "assets/images/streams/starplus.jpg";
import stream4 from "assets/images/streams/telecinePlay.jpg";
import stream5 from "assets/images/streams/amazonPrimeVideo.jpg";
import stream6 from "assets/images/streams/appleTvPlus.jpg";
import stream7 from "assets/images/streams/globoPlay.jpg";
import stream8 from "assets/images/streams/hbomax.jpg";


function Author({ image, name, email }) {
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox mr={2}>
        <SuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SuiBox>
      <SuiBox display="flex" flexDirection="column">
        <SuiTypography variant="button" fontWeight="medium">
          {name}
        </SuiTypography>
        <SuiTypography variant="caption" textColor="secondary">
          {email}
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

function Function({ job, org }) {
  return (
    <SuiBox display="flex" flexDirection="column">
      <SuiTypography variant="caption" fontWeight="medium" textColor="text">
        {job}
      </SuiTypography>
      <SuiTypography variant="caption" textColor="secondary">
        {org}
      </SuiTypography>
    </SuiBox>
  );
}

const action = (
  <Icon className="font-bold text-secondary cursor-pointer" fontSize="small">
    more_vert
  </Icon>
);

export default {
  columns: [
    { name: "nome", align: "left" },
    { name: "proprietario", align: "left" },
    { name: "lançamento", align: "center" },
    { name: "conteúdos", align: "center" },
  ],

  rows: [
    {
      nome: <Author image={stream1} name="Disney+" email="" />,
      proprietario: <Function job="The Walt Disney Company" org="" />,
      lançamento: (
        <SuiTypography
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          12/11/2019
        </SuiTypography>
      ),
      conteúdos: action,
    },
    {
      nome: <Author image={stream2} name="Netflix" email="" />,
      proprietario: <Function job="Reed Hastings" org="" />,
      lançamento: (
        <SuiTypography
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          29/08/1997
        </SuiTypography>
      ),
      conteúdos: action,
    },
    {
      nome: <Author image={stream3} name="Star+" email="" />,
      proprietario: <Function job="The Walt Disney Company" org="" />,
      lançamento: (
        <SuiTypography
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          31/08/2021
        </SuiTypography>
      ),
      conteúdos: action,
    },
    {
      nome: <Author image={stream4} name="Telecine Play" email="" />,
      proprietario: <Function job="Joint Venture da Globo" org="" />,
      lançamento: (
        <SuiTypography
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          11/11/1991
        </SuiTypography>
      ),
      conteúdos: action,
    },
    {
      nome: <Author image={stream5} name="Amazon Prime Video" email="" />,
      proprietario: <Function job="Amazon.com" org="" />,
      lançamento: (
        <SuiTypography
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          07/09/2006
        </SuiTypography>
      ),
      conteúdos: action,
    },
    {
      nome: <Author image={stream6} name="Apple TV Plus" email="" />,
      proprietario: <Function job="Apple" org="" />,
      lançamento: (
        <SuiTypography
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          01/11/2019
        </SuiTypography>
      ),
      conteúdos: action,
    },
    {
      nome: <Author image={stream7} name="Globo Play" email="" />,
      proprietario: <Function job="Globo" org="" />,
      lançamento: (
        <SuiTypography
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          03/11/2015
        </SuiTypography>
      ),
      conteúdos: action,
    },
    {
      nome: <Author image={stream8} name="HBO Max" email="" />,
      proprietario: <Function job="Warner Bros" org="" />,
      lançamento: (
        <SuiTypography
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          27/05/2020
        </SuiTypography>
      ),
      conteúdos: action,
    },
  ],
};
