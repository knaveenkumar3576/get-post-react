import React,{Component} from 'react'

import Wrap from './Wrap';
import { withStyles, createStyles } from '@material-ui/styles';
import { Switch, Route } from 'react-router-dom'

import AppHeader from '../components/AppHeader';
import Users from '../containers/Users';
import Posts from '../containers/Posts';

const styles = createStyles({
    layout: {
        margin: '10px',
        padding: '10px'
    },
});

class Layout extends Component {
    render() {
        return (
            <Wrap>
                <AppHeader />
                <Switch>
                    <Route path='/posts/:id' component={Posts}/>
                    <Route path='/' component={Users}/>
                </Switch>
            </Wrap>
        );
    }
 }


 export default withStyles(styles)(Layout); 