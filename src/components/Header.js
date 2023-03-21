import React from 'react'

import PropsTypes from "prop-types";
import Button from "./Button";

const Header = ({title, onAdd ,showAddTask}) => {

  return (
    <>
      <header className="header">
        <h1>{title}</h1>
        <Button text={showAddTask ? 'Close' : 'Add'} color={showAddTask ? "red" : 'blue'} onClick={onAdd} />
      </header>
    </>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropsTypes.string,
  // title : PropsTypes.string.isRequired
};
export default Header;
