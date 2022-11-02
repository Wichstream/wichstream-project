// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/streams/disneyplus.jpg";
import homeDecor2 from "assets/images/streams/starplus.jpg";
import homeDecor3 from "assets/images/streams/hbomax.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <SuiBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ProfileInfoCard
              title="meu perfil"
              description="Estudande de Análise e Desenvolvimento de Sistema, pai, amante de um bom pedal. Sempre
              em busca de aventuras e em busca de bons títulos que acrescentem algo pra vida."
              info={{
                fullName: "Edson Barbosa Junior",
                mobile: "(44) 99930 6523",
                email: "ebjr.tux@gmail.com",
                location: "Brasil",
              }}
              social={[
                {
                  link: "/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "/",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
              action={{ route: "", tooltip: "Editar Perfil" }}
            />
          </Grid>
        </Grid>
      </SuiBox>

      <SuiBox mb={6}>
        <Card>
          <SuiBox pt={2} px={2}>
            <SuiBox mb={0.5}>
              <SuiTypography variant="h6" fontWeight="medium">
                Meus Streams
              </SuiTypography>
            </SuiBox>
            <SuiBox mb={1}></SuiBox>
          </SuiBox>
          <SuiBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor1}
                  label="stream #1"
                  title="disney+"
                  description="O serviço Disney+ é comercializado por The Walt Disney Company (Brasil) Ltda."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "conteúdos",
                  }}
                  authors={[
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor2}
                  label="stream #2"
                  title="star+"
                  description="The Star+ service is marketed by The Walt Disney Company (Brazil) Ltda."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "conteúdos",
                  }}
                  authors={[
                    { image: team3, name: "Ana Luiz" },
                    { image: team4, name: "Juan Arthur" },
                    { image: team1, name: "Edson Enricco" },
                    { image: team2, name: "Rosiane Barbosa" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor3}
                  label="stream #3"
                  title="hbo max"
                  description="WarnerMedia Direct Latin America, LLC. HBO Max é usado sob licença."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "conteúdos",
                  }}
                  authors={[
                    { image: team3, name: "Ana Luiz" },
                    { image: team4, name: "Juan Arthur" },
                    { image: team1, name: "Edson Enricco" },
                    { image: team2, name: "Rosiane Barbosa" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <PlaceholderCard
                  title={{ variant: "h5", text: "Adicionar Stream" }}
                  outlined
                />
              </Grid>
            </Grid>
          </SuiBox>
        </Card>
      </SuiBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
