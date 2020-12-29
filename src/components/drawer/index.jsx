import React, { useContext } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import logo from "../../media/logo.png";
import LanguageSelector from "../language-selector";
import LanguageContext from "../../utils/language-context";

import "./styles.css";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: "100%",
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 0,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const DrawerLeft = ({ navLinks }) => {
  const { language, setLanguage } = useContext(LanguageContext);

  const styles = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.root}>
      <CssBaseline />
      <AppBar
        // onBlur={() => setTimeout(handleDrawerClose, 100)}
        className={clsx(styles.appBar, {
          [styles.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(styles.menuButton, open && styles.hide)}
          >
            <MenuIcon fontSize={"large"} />
          </IconButton>
          <Link to={`/${language}/`} className="main-logo">
            <img className="mobile-logo" src={logo} alt="logo" />
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        className={styles.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: styles.drawerPaper,
        }}
      >
        <div className={`${styles.drawerHeader} drawer-header`}>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon fontSize={"large"} />
          </IconButton>
          <Link to={`/${language}/`}>
            <img className="mobile-logo" src={logo} alt="logo" />
          </Link>{" "}
        </div>
        <Divider />
        <List>
          {navLinks.map(({ title, path, icon, classes }, i) => (
            <ListItem button key={i}>
              <ListItemIcon>{icon}</ListItemIcon>
              <Link to={path}>
                <ListItemText primary={title} className={classes} />
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <LanguageSelector language={language} setLanguage={setLanguage} />
      </Drawer>
    </div>
  );
};

export default DrawerLeft;
