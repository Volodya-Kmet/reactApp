import React, {Component} from 'react';

import './index.css';
import {connect} from "react-redux";

class Table extends Component {
    state = {
        empls:  [],
        countOfRows: 0
    };

    componentDidMount() {
        this.props.getEmployeesList()
        //
        // const empls = this.props.emplsObj.rows;
        // const countOfRows = this.props.emplsObj.countOfRows;
        // console.log(this.props.emplsObj)
        // console.log(empls)
        // console.log(countOfRows)
        // this.setState({empls, countOfRows })


    }

    render() {
        let {empls, countOfRows} = this.state;
        if (this.props.emplsObj.rows){
            empls = this.props.emplsObj.rows
        //    console.log('>>>>',this.props.emplsObj.rows)
        //     this.setState({
        //         empls:  this.props.emplsObj.rows || [],
        //         countOfRows: this.props.emplsObj.countOfRows || 0
        //     })
        }
        return (
            <table>
                <thead>
                <tr>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>State</th>
                </tr>
                </thead>

                <tbody>
                {
                    empls.map((user) => {
                        return (
                            <tr key={user.empID}>
                                <td>{user.empID}</td>
                                <td>{user.empName}</td>
                                <td>{user.dpName}</td>
                                <td>{user.empActive}</td>
                                <td>
                                    <a href={`${this.props.location.pathname}/${user._id}`}>Edit</a>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        emplsObj: state.employeesReducer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEmployeesList: () => {
            dispatch({type: "EMPL_CALL_REQUEST"})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Table)