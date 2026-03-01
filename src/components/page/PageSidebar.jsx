import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PageSidebar.css';

const PageSidebar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentSection = () => {
    const sections = React.Children.toArray(props.children);
    for (let i = 0; i < sections.length; i++) {
      if (location.pathname === sections[i].props.url) {
        return i;
      }
    }
    return 0;
  };

  const [currentSection, setCurrentSection] = useState(getCurrentSection);
  const [collapsed, setCollapsed] = useState(true);

  const getTitle = (section) => {
    if (section.props.bannerTitle) {
      return section.props.bannerTitle;
    }
    return section.props.linkTitle;
  };

  const notifySectionChange = (section) => {
    const title = getTitle(section);
    const { bannerImageUrl, bannerMobilePosition, description } = section.props;
    props.onSectionChange(bannerImageUrl, title.toUpperCase(), bannerMobilePosition, description);
  };

  // Notify parent of initial section on mount
  useEffect(() => {
    const sections = React.Children.toArray(props.children);
    notifySectionChange(sections[getCurrentSection()]);
  }, [getCurrentSection, notifySectionChange, props.children]);

  // Update section when URL changes
  useEffect(() => {
    const newSection = getCurrentSection();
    if (newSection !== currentSection) {
      setCurrentSection(newSection);
      const sections = React.Children.toArray(props.children);
      notifySectionChange(sections[newSection]);
    }
  }, [currentSection, getCurrentSection, notifySectionChange, props.children]);

  const sectionLinkClicked = (event) => {
    const index = event.target.dataset.index;
    const sections = React.Children.toArray(props.children);
    const section = sections[index];
    const title = getTitle(section);
    const { bannerImageUrl, bannerMobilePosition, description } = section.props;

    navigate(section.props.url);
    props.onSectionChange(bannerImageUrl, title.toUpperCase(), bannerMobilePosition, description);
    setCurrentSection(index);
    setCollapsed(true);
  };

  const toggleMobileMenu = () => {
    setCollapsed(!collapsed);
  };

  const sections = React.Children.toArray(props.children);
  const links = sections.map((section, index) => {
    let classes = '';
    if (currentSection && currentSection.toString() === index.toString()) {
      classes = 'btn-page-sidebar-link-active';
    }

    return (
      <li key={index}>
        <button
          type="button"
          className={`btn btn-link btn-page-sidebar-link ${classes}`}
          onClick={sectionLinkClicked}
          data-index={index}
        >
          {section.props.linkTitle}
        </button>
      </li>
    );
  });

  const buttonContents = collapsed ? '+' : '-';
  const toggleButton = (
    <button
      type="button"
      className="btn btn-link btn-page-sidebar-link btn-page-sidebar-mobile-toggle"
      onClick={toggleMobileMenu}
      aria-label={collapsed ? 'Show menu' : 'Hide menu'}
    >
      {buttonContents}
    </button>
  );

  let mobileMenu;
  if (collapsed) {
    mobileMenu = (
      <div className="col-md-3 d-lg-none d-xl-none page-sidebar-wrapper-mobile">
        <div className="row">
          <div className="offset-10 col-2">{toggleButton}</div>
        </div>
      </div>
    );
  } else {
    mobileMenu = (
      <div className="col-md-3 d-lg-none d-xl-none page-sidebar-wrapper-mobile">
        <div className="row">
          <div className="col-10">
            <ul className="page-sidebar-menu-list">{links}</ul>
          </div>
          <div className="col-2">{toggleButton}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-sidebar-wrapper">
      <div className="row">
        <div className="col-md-3 d-none d-sm-none d-md-none d-lg-block">
          <ul className="page-sidebar-menu-list">{links}</ul>
        </div>
        {mobileMenu}
        <div className="col-md-9 page-sidebar-section">{sections[currentSection]}</div>
      </div>
    </div>
  );
};

export default PageSidebar;
