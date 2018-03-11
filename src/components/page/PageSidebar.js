import React from 'react';
import './PageSidebar.css'

class PageSidebar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentSection:0
    }
  }

  sectionLinkClicked = (event) => {
    this.setState({
      currentSection:event.target.dataset.index
    })
  }

  render() {
    const links = this.props.children.map((section, index) => {

      let classes = "";

      if(this.state.currentSection === index) {
        classes = "btn-page-sidebar-link-active"
      }

      return (
        <li key={index}>
          <button className={"btn btn-link btn-page-sidebar-link "+classes} onClick={this.sectionLinkClicked} data-index={index}>
            {section.props.linkTitle}
          </button>
        </li>
      )
    })

    return (
      <div className="page-sidebar-wrapper">
        <div className="row">
          <div className="col-md-3">
            <ul className="page-sidebar-menu-list">
              {links}
            </ul>
          </div>
          <div className="col-md-9 page-sidebar-section">
              {this.props.children[this.state.currentSection]}
          </div>
        </div>
      </div>
    )
  }
}

export default PageSidebar;
