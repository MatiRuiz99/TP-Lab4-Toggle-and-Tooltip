import React, { Component } from "react";

// Toggle con HOC
const withToggle = (WrappedComponent) => {
  return class WithToggle extends Component {
    state = {
      isToggled: false,
    };

    toggle = () => {
      this.setState((prevState) => ({
        isToggled: !prevState.isToggled,
      }));
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          isToggled={this.state.isToggled}
          toggle={this.toggle}
        />
      );
    }
  };
};

// Toggle con Render Props
class ToggleRenderProps extends Component {
  state = {
    isToggled: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      isToggled: !prevState.isToggled,
    }));
  };

  render() {
    return this.props.children({
      isToggled: this.state.isToggled,
      toggle: this.toggle,
    });
  }
}

export { withToggle, ToggleRenderProps };
