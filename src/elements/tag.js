import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/elements/_tag.scss";

//Export tag component 
export default class Tag extends React.Component {
    render() {
        //Clone the tag component props
        let props = getProps(this.props, ["className", "color"]);
        //Initialize the tag class list 
        let classList = ["siimple-tag"];
        //Check the color attribute
        if (typeof this.props.color === "string") {
            classList.push("siimple-tag--" + this.props.color.toLowerCase().trim());
        }
        //Generate the tag classname
        props.className = classNames(classList, this.props.className);
        //Return the tag element
        return React.createElement("div", props, this.props.children);
    }
}

//Tag default props
Tag.defaultProps = {
    color: null,
    style: null
};
