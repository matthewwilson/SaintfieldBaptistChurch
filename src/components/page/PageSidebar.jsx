import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PageSidebar.css';

class PageSidebar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentSection: this.getCurrentSection(props),
      collapsed: true
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname || prevProps.children !== this.props.children) {
      const currentSection = this.getCurrentSection(this.props);
      if (currentSection !== this.state.currentSection) {
        this.setState({ currentSection });
      }
    }
  }

  getCurrentSection = (props) => {
    let currentSection = 0;
    const sections = React.Children.toArray(props.children);
    for (let i = 0; i < sections.length; i++) {
      if (props.location.pathname === sections[i].props.url) {
        currentSection = i;
        break;
      }
    }
    return currentSection;
  }

  componentDidMount() {
    const newSection = this.getNewSection(this.state.currentSection);
    const title = this.getTitle(newSection);
    const bannerImageUrl = newSection.props.bannerImageUrl;
    const bannerMobilePosition = newSection.props.bannerMobilePosition;
    const description = newSection.props.description;
    this.props.onSectionChange(bannerImageUrl, title.toUpperCase(), bannerMobilePosition, description);
  }

  sectionLinkClicked = (event) => {
    const newSection = this.getNewSection(event.target.dataset.index);
    this.changeSection(newSection);
    this.setState({
      currentSection: event.target.dataset.index,
      collapsed: true
    });
  }

  changeSection = (newSection) => {
    const title = this.getTitle(newSection);
    const bannerImageUrl = newSection.props.bannerImageUrl;
    const bannerMobilePosition = newSection.props.bannerMobilePosition;
    const description = newSection.props.description;

    this.props.navigate(newSection.props.url);
    this.props.onSectionChange(bannerImageUrl, title.toUpperCase(), bannerMobilePosition, description);
  }

  getNewSection = (index) => React.Children.toArray(this.props.children)[index]

  getTitle = (section) => {
    let title = section.props.linkTitle;
    if (section.props.bannerTitle) {
      title = section.props.bannerTitle;
    }
    return title;
  }

  toggleMobileMenu = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  renderMobileMenu(links) {

    const collapsed = this.state.collapsed;

    const buttonContents = collapsed ? '+' : '-';

    const toggleButton = (
      <button className="btn btn-link btn-page-sidebar-link btn-page-sidebar-mobile-toggle" onClick={this.toggleMobileMenu} aria-label={collapsed ? 'Show menu' : 'Hide menu'}>{buttonContents}</button>
    );

    if (collapsed) {
      return (
        <div className="col-md-3 d-lg-none d-xl-none page-sidebar-wrapper-mobile">
          <div className="row">
            <div className="offset-10 col-2">
              {toggleButton}
            </div>
          </div>
        </div>
      );
    }

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
    );
  }


  render() {
    const sections = React.Children.toArray(this.props.children);
    const links = sections.map((section, index) => {

      let classes = '';

      if (this.state.currentSection && this.state.currentSection.toString() === index.toString()) {
        classes = 'btn-page-sidebar-link-active';
      }

      return (
        <li key={index}>
          <button className={`btn btn-link btn-page-sidebar-link ${classes}`} onClick={this.sectionLinkClicked} data-index={index}>
            {section.props.linkTitle}
          </button>
        </li>
      );
    });

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
            {sections[this.state.currentSection]}
          </div>
        </div>
      </div>
    );
  }
}

const PageSidebarWithRouter = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  return <PageSidebar {...props} location={location} navigate={navigate} />;
};

export default PageSidebarWithRouter;
