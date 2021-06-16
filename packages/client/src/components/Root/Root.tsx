import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { navigation } from "./navigation";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbarRoot: {
    paddingLeft: `${theme.spacing(0.5)}px`,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: `${theme.spacing(1.5)}px`,
    },
  },
  menuButton: {
    width: theme.spacing(7),
    marginRight: `${theme.spacing(2.5) + 1}px`,
    [theme.breakpoints.up("sm")]: {
      marginRight: `${theme.spacing(3.5) + 1}px`,
    },
  },
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  menuItemIcon: {
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      minWidth: theme.spacing(9),
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export const Root: React.FC = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles({ open });

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbarRoot}>
          <div className={classes.menuButton}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleMenuClick}
            >
              {open ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>
          </div>
          <Typography variant="h6" noWrap>
            I am playing
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}></div>
        <List>
          {navigation.map((item) => (
            <ListItem
              key={item.name}
              button
              disableGutters
              component={Link}
              to={item.link}
            >
              <ListItemIcon className={classes.menuItemIcon}>
                <item.Icon></item.Icon>
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};
