import React from "react";
import {Icon} from "../../icon/index.js";
import * as helpers from "../../helpers.js";

//Import styles
import "./style.scss";

//Group component base class
let baseClass = "neutrine-group";

//Group container
export function Group (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass
    });
}

//Main group container
export function GroupRow (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-row"
    });
}

//Group item component
export function GroupColumn (props) {
    //Extract item component props
    let newProps = helpers.filterProps(props, ["visibleOnlyOnHover", "className", "primary", "secondary"]);
    //Initialize the class list
    let classList = [baseClass + "-column"];
    if (props.visibleOnlyOnHover === true) {
        classList.push(baseClass + "-column--visible-only-on-hover");
    }
    //Check for primary column
    if (props.primary === true) {
        classList.push(baseClass + "-column--primary");
    }
    //Check for secondary column
    else if (props.secondary === true) {
        classList.push(baseClass + "-column--secondary");
    }
    //Add classlist to new props
    newProps.className = helpers.classNames(classList, props.className);
    //Return the new component
    return React.createElement("div", newProps, props.children);
}

//Column default props
GroupColumn.defaultProps = {
    "visibleOnlyOnHover": false,
    "primary": false,
    "secondary": false
};

//Group title
export function GroupTitle (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-title"
    });
}

//Group description
export function GroupDescription (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-description"
    });
}

//Group text
export function GroupText (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-text"
    });
}

//Group icon
export function GroupIcon (props) {
    return null;
}

//Group action
export function GroupAction (props) {
    return null;
}

//Group label
export function GroupLabel (props) {
    let classList = [baseClass + "-label"];
    //Check the label color
    if (typeof props.color === "string") {
        classList.push(baseClass + "-label--" + props.color);
    }
    //Build the new label props
    let labelProps = {
        "className": classList.join(" ")
    };
    //Return the label element
    return React.createElement("span", labelProps, props.text);
}

//Label props
GroupLabel.defaultProps = {
    "color": "primary",
    "text": ""
};
