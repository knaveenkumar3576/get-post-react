import React,{Component} from 'react'
import {connect} from 'react-redux';
import ReactTable from "react-table";
import { Link } from 'react-router-dom';
import { withStyles, createStyles } from '@material-ui/core/styles';

import "react-table/react-table.css";
import * as actionTypes from '../store/actionTypes'
// import * as actions from '../store/actions';
import axios from '../HOC/axios-handler'

import Wrap from '../HOC/Wrap'

import PageHeader from '../components/PageHeader'


const styles = createStyles({
    layout: {
        margin: '10px',
        padding: '10px'
    },
});

class Users extends Component {

    componentDidMount() {

        if(this.props.loaded === false)  {
            axios.get('/users')
            .then(response => {
                this.props.initializeState(response.data);
            })    
        }
    }


    render () {

        return (
            <div className={this.props.classes.layout}>
            
                <PageHeader title="Users" />

                <ReactTable 
                    
                    data={this.props.users}
                    columns={[
                            {
                                Header: "ID",
                                id: "id",
                                accessor: "id",
                            },
                            {
                                Header: "Name",
                                id: "name",
                                accessor: "name",
                            },
                            {
                                Header: "Username",
                                id: "username",
                                accessor: "title",
                            },
                            {
                                Header: "E-mail",
                                id: "email",
                                accessor: "email",
                            },
                            {
                                Header: "Phone",
                                id: "phone",
                                accessor: "phone",
                            },
                            {
                                Header: "Website",
                                id: "website",
                                accessor: "website",
                            },
                            {
                                Header: "Actions",
                                id: "posts",
                                Cell : ({ row }) => (<Link to={{ pathname: '/posts/' + row.id }}> {"See posts"} </Link>) 
                            },
                        ]
                    }
                    showPagination={false}
                    className="-striped -highlight"

                    defaultSorted ={[{ // the sorting model for the table
                        id: 'id',
                        desc: false
                    }]}

                    minRows = {0}
                />
            </div>
        );

    }
  
}

const mapStateToProps = (state) => {
    return {
        users : state.users,
        loaded : state.users_loaded
    };
}
  
const mapDispatchToProps = (dispatch) => {
        return {
            initializeState :(usersList) => dispatch({type: actionTypes.SET_USERS, users: usersList})
    };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Users))