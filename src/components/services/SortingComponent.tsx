import React from "react";

type Props = {
  onSortChange: (sortOption: string) => void;
};

const SortingComponent: React.FC<Props> = ({ onSortChange }) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value);
  };

  return (
    <select onChange={handleSortChange}>
      <option value="firstName">Sort by First Name</option>
      <option value="lastName">Sort by Last Name</option>
      <option value="birthDate">Sort by Birth Date</option>
    </select>
  );
};

export default SortingComponent;
