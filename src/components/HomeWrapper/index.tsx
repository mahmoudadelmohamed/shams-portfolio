import React from "react";
import { useDB } from "../../hooks/useDB";
import { Title } from "../Title";

export const HomeWrapper: React.FC = () => {
  const db = useDB();
  return (
    <div>
      <Title 
        title="Hello From Title CP"
      />
    </div>
  )
}