export interface User {
  name: string;
  age: number;
  country: string;
  address: Address;
  admin: false;
}

interface Address {
  street: string;
  number: number;
  zip: string;
}
