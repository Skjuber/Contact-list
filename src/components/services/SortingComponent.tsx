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
      <option value="firstName">First Name</option>
      <option value="lastName">Last Name</option>
      <option value="birthDate">Birth Date</option>
    </select>
  );
};

export default SortingComponent;
