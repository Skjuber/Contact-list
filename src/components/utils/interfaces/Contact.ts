interface Account {
  Id: string;
  Name: string;
}

export default interface Contact {
  Id: string;
  FirstName: string;
  LastName: string;
  BirthDate: string;
  Email: string;
  Account: Account | null;
  isBookmarked: boolean;
}
