import React from "react";

type Props = {
  onSortChange: (sortOption: string) => void;
};

const SortingComponent: React.FC<Props> = ({ onSortChange }) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="sorting-component">
      <select className="sort-select" onChange={handleSortChange}>
        <option value="firstName">Sort by First Name</option>
        <option value="lastName">Sort by Last Name</option>
        <option value="birthDate">Sort by Birth Date</option>
      </select>
    </div>
  );
};

export default SortingComponent;
