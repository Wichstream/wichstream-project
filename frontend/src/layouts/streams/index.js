// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Custom styles for the Tables
import styles from "layouts/streams/styles";

// Data
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Images
import stream1 from "assets/images/streams/disneyplus.jpg";
import stream2 from "assets/images/streams/starplus.jpg";
import stream3 from "assets/images/streams/hbomax.jpg";
import stream4 from "assets/images/streams/amazonPrimeVideo.jpg";
import stream5 from "assets/images/streams/appleTvPlus.jpg";
import stream6 from "assets/images/streams/globoPlay.jpg";
import stream7 from "assets/images/streams/netflix.jpg";
import stream8 from "assets/images/streams/telecinePlay.jpg";

function Streams() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={6}>
          <Card>
            <SuiBox p={2}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={stream1}
                    label=""
                    title="disney+"
                    description="O serviço Disney+ é comercializado por The Walt Disney Company (Brasil) Ltda."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "info",
                      label: "conteúdos",
                    }}
                    authors={[]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={stream2}
                    label=""
                    title="star+"
                    description="The Star+ service is marketed by The Walt Disney Company (Brazil) Ltda."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "info",
                      label: "conteúdos",
                    }}
                    authors={[]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={stream3}
                    label=""
                    title="hbo max"
                    description="WarnerMedia Direct Latin America, LLC. HBO Max é usado sob licença."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "info",
                      label: "conteúdos",
                    }}
                    authors={[]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={stream4}
                    label=""
                    title="Amazon Prime Video"
                    description="Prime Video, é um serviço de vídeo sob demanda pela Amazon."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "info",
                      label: "conteúdos",
                    }}
                    authors={[]}
                  />
                </Grid>
              </Grid>
            </SuiBox>
          </Card>
        </SuiBox>
        <SuiBox mb={6}>
          <Card>
            <SuiBox p={2}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={stream5}
                    label=""
                    title="Apple TV+"
                    description="O Apple TV+ é um serviço de streaming dentro do app Apple TV."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "info",
                      label: "conteúdos",
                    }}
                    authors={[]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={stream6}
                    label=""
                    title="Globo Play"
                    description="Globoplay é uma plataforma de streaming, desenvolvida e operada pela Globo."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "info",
                      label: "conteúdos",
                    }}
                    authors={[]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={stream7}
                    label=""
                    title="Netflix"
                    description="Netflix é uma provedora global de filmes e séries de televisão via streaming."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "info",
                      label: "conteúdos",
                    }}
                    authors={[]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={stream8}
                    label=""
                    title="Telecine Play"
                    description="Líder e referência em filmes, o Telecine leva a magia do cinema para perto de você."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "info",
                      label: "conteúdos",
                    }}
                    authors={[]}
                  />
                </Grid>
              </Grid>
            </SuiBox>
          </Card>
        </SuiBox>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Streams;
