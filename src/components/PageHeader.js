import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
      flexGrow: 1,
    },
  };

  
const PageHeader = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              {props.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
}


export default withStyles(styles)(PageHeader);