import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {fetchEmployees} from "../../actions/employeesAction";
import {changePage} from "../../actions/employeesAction";

import Pagination from '../../components/Pagination';
import './index.css';

class Table extends Component {
    state = {
        empls: [],
        countOfRows: 0
    };

    render() {
        let {empls, count} = this.state;
        if (this.props.rows) {
            empls = this.props.rows;
            count = this.props.count;
        }
        return (

            <Fragment>

                <table>
                    <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>State</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        empls.map((empls) => {
                            return (
                                <tr key={empls.empID}>
                                    <td>{empls.empID}</td>
                                    <td>{empls.empName}</td>
                                    <td>{empls.dpName}</td>
                                    <td>{empls.empActive ? "Activated" : "Deactivated"}</td>
                                    <td>
                                        <Link to={`${this.props.location.pathname}/${empls.empID}`}>Edit</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                < Pagination chngePage={this.props.chngePage} count={count}
                             page={this.props.page} limits={this.props.limits}/>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        rows: state.employeesReducer.rows,
        count: state.employeesReducer.count,
        page: state.employeesReducer.page,
        limits: state.employeesReducer.limits
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        chngePage: function (page, limit) {
            dispatch(changePage(page, limit));
            const offset = (page - 1) * limit;
            dispatch(fetchEmployees(offset, limit))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Table)