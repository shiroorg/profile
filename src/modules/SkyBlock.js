import React from "react";

class SkyBlock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shadow: Boolean(Math.round(Math.random()))
        }

        this.updateShadow = this.updateShadow.bind(this)
    }

    updateShadow = function () {
        this.setState({
            shadow: (this.state.shadow === true ? false : true)
        });
    }

    render() {
        return (
            <div className="skyblock shadow ts-3" data-type="skyblock" data-shadow={this.props.shadow}>
                <img src={this.props.logo} className="block-logo" alt="logo"/>
            </div>
        );
    }
}

export default SkyBlock;
