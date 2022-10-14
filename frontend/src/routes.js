// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import SignOut from "layouts/authentication/sign-out";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: Dashboard,
    noCollapse: true,
    protected: true,
  },
  {
    type: "collapse",
    name: "Streams",
    key: "tables",
    route: "/tables",
    icon: <Office size="12px" />,
    component: Tables,
    noCollapse: true,
    protected: true,
  },
  {
    type: "collapse",
    name: "Conteudos",
    key: "billing",
    route: "/billing",
    icon: <CreditCard size="12px" />,
    component: Billing,
    noCollapse: true,
    protected: true,
  },
  {
    type: "collapse",
    name: "Reviews",
    key: "virtual-reality",
    route: "/virtual-reality",
    icon: <Cube size="12px" />,
    component: VirtualReality,
    noCollapse: true,
    protected: true,
  },
  {
    type: "collapse",
    name: "Indicar",
    key: "rtl",
    route: "/rtl",
    icon: <Settings size="12px" />,
    component: RTL,
    noCollapse: true,
    protected: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Perfil",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: Profile,
    noCollapse: true,
    protected: true,
  },
  {
    type: "none",
    name: "Entrar",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: SignIn,
    noCollapse: true,
  },
  {
    type: "none",
    name: "Cadastro",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: SignUp,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sair",
    key: "sign-out",
    route: "/authentication/sign-out",
    icon: <SpaceShip size="12px" />,
    component: SignOut,
    noCollapse: true,
  },
];

export default routes;
