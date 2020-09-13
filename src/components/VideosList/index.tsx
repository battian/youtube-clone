import React from 'react';

import {
  Box,
  Grid,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { theme } from '../../assets/styles/styles';

import videos from '../../videos.json';

const VideosList: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box p={4}>
        <Toolbar />

        <Grid container spacing={4}>
          {videos.map((item) => (
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box key={item.id}>
                <img
                  style={{ width: '100%' }}
                  alt={item.title}
                  src={item.thumb}
                />
                <Box>
                  <Typography
                    style={{ fontWeight: 600 }}
                    gutterBottom
                    variant="body1"
                    color="textPrimary"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    display="block"
                    variant="body2"
                    color="textSecondary"
                  >
                    {item.channel}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {`${item.views} • ${item.date}`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default VideosList;
