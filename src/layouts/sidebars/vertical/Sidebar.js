import { Button, Nav, NavItem } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Recherche",
    href: "/ui/alerts",
    icon: "bi bi-bell",
  },
  {
    title: "Cotisation",
    href: "/ui/badges",
    icon: "bi bi-patch-check",
  },
  {
    title: "Annonces",
    href: "/ui/buttons",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Profile",
    href: "/ui/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "Déconnexion",
    href: "/ui/grid",
    icon: "bi bi-columns",
  }
];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />

      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link href={navi.href}>
                <a
                  className={
                    location === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </a>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
