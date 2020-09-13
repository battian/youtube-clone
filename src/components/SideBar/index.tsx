import React from 'react';

import {
  ThemeProvider,
  Toolbar,
  Button,
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
  Box,
  Typography,
  Hidden,
  ListSubheader,
} from '@material-ui/core';
import {
  AccountCircle,
  Home,
  Whatshot,
  Subscriptions,
  VideoLibrary,
  History,
  AddCircle,
} from '@material-ui/icons';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { theme, useStyles } from '../../assets/styles/styles';

const AppBarComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Hidden mdDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <Box mb={3}>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <ListItemIcon>
                      <Home style={{ color: '#f44336' }} />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Home'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <ListItemIcon>
                      <Whatshot />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Trending'}
                  />
                </ListItem>
              </Box>

              <Divider />

              <Box mt={3}>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <ListItemIcon>
                      <Subscriptions />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Subscriptions'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <ListItemIcon>
                      <VideoLibrary />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Library'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <ListItemIcon>
                      <History />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'History'}
                  />
                </ListItem>
              </Box>
            </List>
            <Divider />

            <Box p={6}>
              <Typography variant="body2">
                Sign in to like videos, comment, and subscribe.
              </Typography>
              <Box mt={3}>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<AccountCircle />}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
            <Divider />

            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  className={classes.subheader}
                >
                  Best Of Youtube
                </ListSubheader>
              }
            >
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Music'}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Sports'}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Gaming'}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Movies'}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'News'}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Live'}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Learning'}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Spotlight'}
                />
              </ListItem>
            </List>
            <Divider />
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Browse channels'}
              />
            </ListItem>
            <Divider />
          </div>
        </Drawer>
      </Hidden>
    </ThemeProvider>
  );
};

export default AppBarComponent;
