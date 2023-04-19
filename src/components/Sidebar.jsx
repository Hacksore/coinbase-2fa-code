import React, { useEffect, useState } from "react";

const SidebarItem = ({ children }) => <div className="sidebar-item">{children}</div>

// TODO Q5
const Sidebar = (props) => {
  const [sortedLines, setSortedLines] = useState([]);

  useEffect(() => {
    const count = props.items.count;

    const copy = {...props.items};
    delete copy["count"];

    const sortedKeys = Object.keys(copy).sort().splice(0, Math.max(0, count));
    setSortedLines(sortedKeys.map(key => copy[key]));

  }, [props.items]);

  console.log(sortedLines)

  return (
    <div className="sidebar" data-testid="sidebar">
      { sortedLines.map((item, idx) => <SidebarItem key={idx}>{item}</SidebarItem> ) }
    </div>
  );
};

export default Sidebar;
