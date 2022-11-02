// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Billing page components
import Transaction from "layouts/conteudos/components/Transaction";

function Transactions() {
  return (
      <Card className="h-100">
        <SuiBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pt={3}
          px={2}
        >
          <SuiTypography
            variant="h6"
            fontWeight="medium"
            textTransform="capitalize"
          >
            Conteúdos
          </SuiTypography>
          <SuiBox display="flex" alignItems="flex-start">
            <SuiBox color="text" mr={0.5} lineHeight={0}>
              <Icon color="inherit" fontSize="small">
                date_range
              </Icon>
            </SuiBox>
            <SuiTypography
              variant="button"
              textColor="text"
              fontWeight="regular"
            >
              31 - 6 Novembro 2022
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <SuiBox pt={3} pb={2} px={2}>
          <SuiBox mb={2}>
            <SuiTypography
              variant="caption"
              textColor="text"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Lançamentos
            </SuiTypography>
          </SuiBox>
          <SuiBox
            component="ul"
            display="flex"
            flexDirection="column"
            p={0}
            m={0}
            customClass="no-list-style"
          >
            <Transaction
              color="error"
              icon="arrow_downward"
              name="Netflix"
              description="Acampamento Intergaláctico - 27 March 2020"
              value="- 2.500"
            />
            <Transaction
              color="success"
              icon="arrow_upward"
              name="Apple TV"
              description="On The Rocks - 27 March 2020"
              value="+ 2.000"
            />
          </SuiBox>
          <SuiBox mt={1} mb={2}>
            <SuiTypography
              variant="caption"
              textColor="text"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Fora de Lançamentos
            </SuiTypography>
          </SuiBox>
          <SuiBox
            component="ul"
            display="flex"
            flexDirection="column"
            p={0}
            m={0}
            customClass="no-list-style"
          >
            <Transaction
              color="success"
              icon="arrow_upward"
              name="HBO Max"
              description="Tom & Jerry: O Filme (HBO) - 26 March 2020"
              value="+ 750"
            />
            <Transaction
              color="success"
              icon="arrow_upward"
              name="HBO Max"
              description="Lego Batman: O Filme - 26 March 2020"
              value="+ 1000"
            />
            <Transaction
              color="success"
              icon="arrow_upward"
              name="Amazon Prime Video"
              description="A Hora do Desespero - 26 March 2020"
              value="+ 2.500"
            />
            <Transaction
              color="error"
              icon="arrow_downward"
              name="Amazon Prime Video"
              description="Borrego – Saia do Caminho - 26 March 2020"
              value="- 2.000"
            />
          </SuiBox>
        </SuiBox>
      </Card>
  );
}

export default Transactions;
