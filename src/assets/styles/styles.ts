import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#0d47a1',
    },
  },
});

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  AppBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  icons: {
    marginRight: theme.spacing(2),
  },
  logo: {
    height: 25,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: 'none',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  listItemText: {
    fontSize: 14,
  },
  subheader: {
    textTransform: 'uppercase',
  },
}));
