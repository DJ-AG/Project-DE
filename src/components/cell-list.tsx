import { useTypedSelector } from "../hooks/use-type-selector";
import CellListItem from "./cell-list-item";

const CellList = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const renderedCells = cells.map((cell) => (
    <CellListItem cell={cell} key={cell.id} />
  ));

  return <div>{renderedCells}</div>;
};

export default CellList;
