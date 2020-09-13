import React from 'react';

import {
  ThemeProvider,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from '@material-ui/core';
import { AccountCircle, Apps, MoreVert, VideoCall } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

import { theme, useStyles } from '../../assets/styles/styles';
import YoutubeLogo from '../../assets/images/Youtube.png';

const TopBar: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar color="inherit" className={classes.AppBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.icons}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <img src={YoutubeLogo} alt="Youtube" className={classes.logo} />

          <div className={classes.grow} />

          <IconButton edge="start" className={classes.icons}>
            <VideoCall />
          </IconButton>

          <IconButton edge="start" className={classes.icons}>
            <Apps />
          </IconButton>

          <IconButton edge="start" className={classes.icons}>
            <MoreVert />
          </IconButton>

          <Button
            startIcon={<AccountCircle />}
            variant="outlined"
            color="secondary"
          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default TopBar;
