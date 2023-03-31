import React from "react";
import { Cell } from "../Redux/index";
import CodeCell from "./code-cell";
import TextEditor from "./text-editor";
import ActionBar from "./action-bar";
import "../styles/cell-list-item.css";

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === "code")
    child = 
      <React.Fragment>
        <div className="action-bar-wrapper">
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </React.Fragment>
    ;
  else
    child = 
      <React.Fragment>
        <TextEditor cell={cell} /> <ActionBar id={cell.id} />
      </React.Fragment>
    ;
  return <div className="cell-list-item">{child}</div>;
};

export default CellListItem;
