import { PropsWithChildren } from "react";
import "./List.scss";

type ListProps = PropsWithChildren & {};

function List({ children }: ListProps) {
  return <ul className="list">{children}</ul>;
}

export default List;
