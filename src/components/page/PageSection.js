import React from 'react';
import $ from 'jquery';

class PageSection extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed:this.getCollapsed(),
      useShowMoreFunctionality:this.getCollapsed()
    }
  }

  getCollapsed = () => {
    if(React.Children.count(this.props.children) > 1) {
      return ($(window).width() < 992)
    } else {
      return false;
    }
  }

  toggleReadMore = (event) => {
    this.setState({
      collapsed:this.state.collapsed ? false : true
    })
  }

  render() {

    const buttonContents = this.state.collapsed ? "Show More" : "Show Less";
    let readButton;

    if(this.state.useShowMoreFunctionality) {
      readButton = (
        <button className="btn btn-link history-section-button history-section-button-bold" onClick={this.toggleReadMore}>{buttonContents}</button>
      )
    }

    const children = React.Children.toArray(this.props.children)

    let extraContents;

    if(!this.state.collapsed) {
      extraContents = children[1];
    }

    return (
      <div>
        {children[0]}
        {extraContents}
        <div className="float-left">
            {readButton}
        </div>
      </div>
    )
  }


}

export default PageSection
