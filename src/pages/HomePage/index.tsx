import React from 'react';
import TopBar from '../../components/TopBar';
import SideBar from '../../components/SideBar';
import VideosList from '../../components/VideosList';

import { useStyles } from '../../assets/styles/styles';
import { Box } from '@material-ui/core';

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      <Box display="flex">
        <SideBar />
        <VideosList />
      </Box>
    </div>
  );
};

export default HomePage;
