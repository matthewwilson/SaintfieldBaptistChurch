import React, { useState } from 'react';

const PageSection = (props) => {
  const hasMultipleChildren = React.Children.count(props.children) > 1;
  const shouldCollapse = hasMultipleChildren && window.innerWidth < 992;

  const [collapsed, setCollapsed] = useState(shouldCollapse);
  const [useShowMoreFunctionality] = useState(shouldCollapse);

  const toggleReadMore = () => {
    setCollapsed(!collapsed);
  }

  const children = React.Children.toArray(props.children);

  let readButton;
  if (useShowMoreFunctionality) {
    const buttonContents = collapsed ? "Show More" : "Show Less";
    readButton = (
      <button className="btn btn-link history-section-button history-section-button-bold" onClick={toggleReadMore}>{buttonContents}</button>
    )
  }

  let extraContents;
  if (!collapsed) {
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

export default PageSection;
