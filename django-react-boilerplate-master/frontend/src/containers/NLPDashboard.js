import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Container.css"
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    Label,
    Menu,
    Segment,
    Step,
    Table,
} from 'semantic-ui-react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { usermove_nlp } from "../store/actions/user";
import Category from "./Category"
import WorkBoard from "./WorkBoard";
class NlpDashboard extends Component {

    move_to_nlpprocessing = e => {
        var titleid = e.target.id;
        var categoryid = e.currentTarget.value;
        var page = "nlpprocessing";
        this.props.move_nlp(page, titleid, categoryid);
    }

    render() {
        const { page, titleid, categoryid } = this.props;
        return (
            <div>
                <div className="row" style={{ height: 50 }}></div>
                <div className="row" style={{ height: 80 }}>
                    <div className="col-md-2 picsidemenubar">
                        <img src="embecia.png" alt="" width="80%" style={{ margintop: -14 }} />
                    </div>
                    <div className="col-md-10" style={{ backgroundColor: "white" }}></div>
                </div>

                <div className="row">
                    <div className="col-md-2 sidemenubar">
                        <Category />
                    </div>
                    <div className="col-md-10">
                        <WorkBoard />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        page: state.user.page,
        titleid: state.user.titleid,
        categoryid: state.user.categoryid
    };
};

const mapDispatchToProps = dispatch => {
    return {
        move_nlp: (page, titleid, categoryid) => dispatch(usermove_nlp(page, titleid, categoryid))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NlpDashboard);