import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Marker = (props) => {

    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" color="inherit">
                Mini-Twitter
            </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Marker