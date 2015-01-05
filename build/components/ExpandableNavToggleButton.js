'use strict';

var React = require('react/addons');

var assign = require('lodash.assign'),
    joinClasses = require('../utils/joinClasses');

var ExpandableNavToggleButton = React.createClass({displayName: "ExpandableNavToggleButton",
  propTypes: {
    small: React.PropTypes.element,
    full: React.PropTypes.element,
    smallStyle: React.PropTypes.object,
    fullStyle: React.PropTypes.object,
    smallClass: React.PropTypes.string,
    fullClass: React.PropTypes.string
  },
  getDefaultProps:function() {
    return {
      small: React.createElement("span", {className: "glyphicon glyphicon-chevron-right"}),
      full: React.createElement("span", {className: "glyphicon glyphicon-chevron-left"}),
      smallStyle: {top: 5, left: 55},
      fullStyle: {top: 5, left: 245}
    };
  },
  render:function() {
    return (
      React.createElement("div", null, 
        this.renderToggleButton()
      )
    );
  },
  renderToggleButton:function() {
    var toggleButton, style, classes;

    var sharedStyle = {
      position: 'fixed',
    };

    if (this.props.expanded) {
      toggleButton = this.props.full;
      style = assign(this.props.fullStyle, sharedStyle);
      classes = this.props.fullClass;
    } else {
      toggleButton = this.props.small;
      style = assign(this.props.smallStyle, sharedStyle);
      classes = this.props.smallClass;
    }

    return React.addons.cloneWithProps(toggleButton, {
      ref: toggleButton.ref,
      className: joinClasses(this.props.className, classes),
      style: style,
      onClick: this.props.handleToggle
    });
  }
});

module.exports = ExpandableNavToggleButton;