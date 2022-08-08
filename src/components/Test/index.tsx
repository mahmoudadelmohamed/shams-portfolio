import React from "react";
import { useDB } from "../../hooks/useDB";

export const Test: React.FC = () => {
  const db = useDB();
  return (
    <div>
      Hello, from Test CP
    </div>
  )
}