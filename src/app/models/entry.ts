export interface Entry {
  entryID: number;
  userID: number;
  categoryID: number;
  title: string;
  body: string;
  dateCreated: Date;
  dateLastUpdated: Date;
}

export interface Entrywithuser extends Entry {
  fname: string;
  lname: string;
}
