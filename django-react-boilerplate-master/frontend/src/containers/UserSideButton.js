import React, { Component } from "react";

class UserSideButton extends Component {
    state = {
        clickhappen: false
    }

    onButtonClick = (e) => {
        this.setState({ clickhappen: !this.state.clickhappen });
    }

    onsubButtonClick = (e) => {
        this.setState({ clickhappen: true })
    }
    render() {
        const sublink = "#" + this.props.id + "Submenu"
        const subid = this.props.id + "Submenu"
        return (
            <li>
                <a href={sublink} data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" onClick={this.onButtonClick}><h4><i className="glyphicon glyphicon-th-list usericon" style={{ fontSize: 10 }}></i>&nbsp;&nbsp;{this.props.name}</h4></a>
                <ul class="collapse list-unstyled" id={subid} onClick={this.onsubButtonClick}>
                    {this.props.items.map((item) =>
                        <li>
                            <a href="#">{item}</a>
                        </li>
                    )}
                </ul>
            </li>
        )
    }
}

export default UserSideButton;