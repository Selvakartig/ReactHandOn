import React from "react";
import ListItem from "./ListItem";

const List = React.memo(({ items }) => {
  console.log("Rendering List");

  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
});

export default List;
