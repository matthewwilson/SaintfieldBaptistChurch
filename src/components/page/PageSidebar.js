import React from 'react';
import { withRouter } from "react-router-dom";
import './PageSidebar.css'

class PageSidebar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentSection:this.getCurrentSection(props),
      collapsed:true
    }
  }

  getCurrentSection = (props) => {
    let currentSection = 0;
    for(var i = 0; i < props.children.length; i++) {
      if(props.location.pathname === props.children[i].props.url) {
        currentSection = i;
        break;
      }
    }
    return currentSection;
  }

  componentDidMount() {
    const newSection = this.getNewSection(this.state.currentSection)
    const title = this.getTitle(newSection)
    const bannerImageUrl = newSection.props.bannerImageUrl
    const bannerMobilePosition = newSection.props.bannerMobilePosition
    this.props.onSectionChange(bannerImageUrl, title.toUpperCase(), bannerMobilePosition)
  }

  sectionLinkClicked = (event) => {
   const newSection = this.getNewSection(event.target.dataset.index)
   this.changeSection(newSection);
   this.setState({
     currentSection:event.target.dataset.index,
     collapsed:true
   })
  }

  changeSection = (newSection) => {
    const title = this.getTitle(newSection)
    const bannerImageUrl = newSection.props.bannerImageUrl
    const bannerMobilePosition = newSection.props.bannerMobilePosition

    this.props.history.push(newSection.props.url);
    this.props.onSectionChange(bannerImageUrl, title.toUpperCase(), bannerMobilePosition)
  }

  getNewSection = (index) => {
    return this.props.children[index]
  }

  getTitle = (section) => {
    let title = section.props.linkTitle
    if(section.props.bannerTitle) {
      title = section.props.bannerTitle
    }
    return title;
  }

  toggleMobileMenu = (event) => {
    this.setState({
      collapsed: this.state.collapsed ? false : true
    })
  }

  renderMobileMenu(links) {

    const collapsed = this.state.collapsed;

    const buttonContents = collapsed ? "+" : "-"

    const toggleButton = (
      <button className="btn btn-link btn-page-sidebar-link btn-page-sidebar-mobile-toggle" onClick={this.toggleMobileMenu}>{buttonContents}</button>
    )

    if(collapsed) {
      return (
        <div className="col-md-3 d-lg-none d-xl-none page-sidebar-wrapper-mobile">
          <div className="row">
            <div className="offset-10 col-2">
              {toggleButton}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="col-md-3 d-lg-none d-xl-none page-sidebar-wrapper-mobile">
          <div className="row">
            <div className="col-10">
              <ul className="page-sidebar-menu-list">
                {links}
              </ul>
            </div>
            <div className="col-2">
              {toggleButton}
            </div>
          </div>
        </div>
      )
    }
  }


  render() {
    const links = this.props.children.map((section, index) => {

      let classes = "";

      if(this.state.currentSection && this.state.currentSection.toString() === index.toString()) {
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

    const mobileMenu = this.renderMobileMenu(links);

    return (
      <div className="page-sidebar-wrapper">
        <div className="row">
          <div className="col-md-3 d-none d-sm-none d-md-none d-lg-block">
            <ul className="page-sidebar-menu-list">
              {links}
            </ul>
          </div>
          {mobileMenu}
          <div className="col-md-9 page-sidebar-section">
              {this.props.children[this.state.currentSection]}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PageSidebar);
