export interface Conference {
  title: String;
  intro: String;
  description: String;
  startDate: Date;
  endDate: Date;
  state: ConferenceState;
  maximumCapacity: Number;
  deadline: Date;
  address: Address;
}

export interface Address {
  description: String;
  street: String;
  postalCode: String;
  village: String;
  country: String;
}

export enum ConferenceState
{
  CREATE_STEP1, CREATE_STEP2, CREATE_STEP3, PUBLISHED, INACTIVE, ARCHIVED
}

