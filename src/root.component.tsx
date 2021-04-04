import {
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const generateClassName = createGenerateClassName({
  seed: "mftest-menu",
});

export default function Root(props) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter basename="/">
        <div style={{ display: "" }}>
          <List
            subheader={<ListSubheader component="div">main menu</ListSubheader>}
          >
            <ListItem button component={Link} to="/Home" key="Home">
              <ListItemIcon>
                <Icon className="fa fa-home"></Icon>
              </ListItemIcon>
              <ListItemText primary="Home"></ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/Welcome" key="Welcome">
              <ListItemIcon>
                <Icon className="fa fa-star"></Icon>
              </ListItemIcon>
              <ListItemText primary="Welcome"></ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/About" key="About">
              <ListItemIcon>
                <Icon className="fa fa-question"></Icon>
              </ListItemIcon>
              <ListItemText primary="About"></ListItemText>
            </ListItem>
          </List>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
}
