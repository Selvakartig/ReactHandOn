import React from "react";

const ListItem = React.memo(({ item }) => {
  console.log(`Rendering Item ${item.id}`);

  return (
    <li>
      {item.id} - {item.name}
    </li>
  );
});

export default ListItem;