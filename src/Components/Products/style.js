import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbak: {
     height:'1.25rem',
     background:'#111'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginTop: theme.spacing(4)
  },
  root: {
    flexGrow: 1,
  },
}));