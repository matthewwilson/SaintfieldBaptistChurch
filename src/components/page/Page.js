import React from 'react';
import './Page.css'

const Page = (props) => {
  return (
    <div className="page">
       {props.children}
    </div>
  )
}

export default Page;
