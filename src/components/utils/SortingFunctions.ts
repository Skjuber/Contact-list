import Contact from "./interfaces/Contact";

export const sortByFirstName = (a: Contact, b: Contact) => {
  if (a.FirstName < b.FirstName) return -1;
  if (a.FirstName > b.FirstName) return 1;
  return 0;
};

export const sortByLastName = (a: Contact, b: Contact) => {
  if (a.LastName < b.LastName) return -1;
  if (a.LastName > b.LastName) return 1;
  return 0;
};

export const sortByBirthDate = (a: Contact, b: Contact) => {
  return new Date(a.BirthDate).getTime() - new Date(b.BirthDate).getTime();
};
