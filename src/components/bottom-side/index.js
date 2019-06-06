import React from "react";

//Component styles
import "./style.scss";
let baseClass = "neutrine-bottom-side";

//Export bottom side component
export class BottomSide extends React.Component {
    constructor(props) {
        super(props);
        //Initial state
        this.state = {
            "collapsed": false
        };
        //Bind methods
        this.handleCollapse = this.handleCollapse.bind(this);
    }
    //Handle side collapse
    handleCollapse() {
        return this.setState({
            "collapsed": !this.state.collapsed
        });
    }
    //Render the title
    renderHeaderTitle() {
        return this.title;
    }
    //Render the header chevron
    renderHeaderChevron() {
        return React.createElement("div", {
            "className": baseClass + "-chevron"
        });
    }
    //Render the bottom side header
    renderHeader() {
        //Build the header props
        let props = {
            "className": baseClass + "-header",
            "onClick": this.handleCollapse
        };
        //Return the header
        return React.createElement("div", props, this.renderHeaderTitle(), this.renderHeaderChevron());
    }
    //Render the body component
    renderBody() {
        //Build the body props
        let props = {
            "className": baseClass + "-body"
        };
        //Return the body component
        return React.createElement("div", props, this.props.children);
    }
    //Render the bottom side component
    render() {
        let classList = [baseClass];
        //Check if component is collapsed
        if (this.state.collapsed === true) {
            classList.push(baseClass + "--collapsed");
        }
        //Return the bottom side component
        return React.createElement("div", {"className": classList.join(" ")}, this.renderHeader(), this.renderBody());
    }
}

//Bottom side component default props
BottomSide.defaultProps = {
    "title": ""
};
