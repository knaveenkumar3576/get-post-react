import React, {Fragment} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Post = (props) => {
    return (
        <Fragment key={props.id}>
            <ListItem button>
                <ListItemText primary={props.title} secondary={props.body} />
            </ListItem>
        </Fragment>
    );
}

export default Post;
