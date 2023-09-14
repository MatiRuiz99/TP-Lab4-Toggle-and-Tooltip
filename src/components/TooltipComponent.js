import React from "react";

// Tooltip con HOC
const withTooltip = (WrappedComponent, tooltipText) => {
  return class WithTooltip extends React.Component {
    state = {
      isHovered: false,
    };

    handleMouseEnter = () => {
      this.setState({ isHovered: true });
    };

    handleMouseLeave = () => {
      this.setState({ isHovered: false });
    };

    render() {
      return (
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <WrappedComponent {...this.props} />
          {this.state.isHovered && <div>{tooltipText}</div>}
        </div>
      );
    }
  };
};

// Tooltip con Render Props
class TooltipRenderProps extends React.Component {
  state = {
    isHovered: false,
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.renderTooltip(this.state.isHovered)}
        {this.props.children}
      </div>
    );
  }
}

export { withTooltip, TooltipRenderProps };
