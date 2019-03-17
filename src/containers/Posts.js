import React,{Component, Fragment} from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import * as actionTypes from '../store/actionTypes'
import * as actions from '../store/actions';
import axios from '../HOC/axios-handler'
import Wrap from '../HOC/Wrap'

import PageHeader from '../components/PageHeader'
import Post from '../components/Posts/Post'

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginBottom : 200
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    posts: {
        marginBottom : 200
    },
    text: {
        paddingTop: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing.unit * 2,
    },
    subHeader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
});




class Posts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title : "",
            body : ""
        }
    }

    componentDidMount() {
        if(this.props.loaded === false)  {
            axios.get('/posts')
            .then(response => {
                this.props.initializeState(response.data);
            })   
        }
    }
    
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    onTitleChange = (event) => {
        this.setState({title: event.target.value});
    }

    onBodyChange = (event) =>{
        this.setState({body: event.target.value});
    }

    addPostHandler= (userID) => {
        let totalPost = this.props.posts.length;
        let postobj = {
            "userId": userID,
            "id": totalPost+1,
            "title": this.state.title,
            "body": this.state.body
        }

        this.props.addPost(postobj);
    }


    render () {
        const { classes } = this.props;

        let requiredUserID = this.props.match.params.id;

        let postsCopy  = [...this.props.posts];

        let filteredPosts = postsCopy.filter(function(post, index){
            return post.userId == requiredUserID
        });

        let postItems = filteredPosts.map(post => {
            return (
                <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                />
            )
        });
    
        return (
            <Wrap>

                <Link to="/">Go back to Home(Users)</Link>

                <PageHeader title="Posts" />

                {postItems}            

                <Paper className={classes.root} elevation={1}>
                    
                    <form>

                        <center>
                            <PageHeader title="Add Post(Click + button)" />

                            <TextField
                                id="title"
                                label="title"
                                className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('title')}
                                margin="normal"
                            />
                            
                            <TextField
                                id="body"
                                label="body"
                                className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('body')}
                                margin="normal"
                            />

                            <AppBar color="primary" className={classes.appBar}>
                                <Toolbar className={classes.toolbar}>
                                    <IconButton color="inherit" aria-label="Open drawer" >
                                        <MenuIcon />
                                    </IconButton>
                                    <Fab color="secondary" aria-label="Add" onClick={() => this.addPostHandler(requiredUserID)} className={classes.fabButton}>
                                        <AddIcon />
                                    </Fab>
                                </Toolbar>
                            </AppBar>


                        </center>

                    </form>

                </Paper>

            </Wrap>
        );
    
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts,
        loaded : state.posts_loaded
    };
}
  
const mapDispatchToProps = (dispatch) => {
        return {
            initializeState :(postsList) => dispatch({type: actionTypes.SET_POSTS, posts: postsList}),
            addPost: (post) => dispatch({type: actionTypes.ADD_POST, post: post})
    };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Posts))

// export default Posts;