let guestIdCounter = 0;
export type Guest = {
  id: number;
  name: string;
  age: number;
  isChild: boolean;
  extraInfo: string;
};
export function createNewGuest(): Guest {
  return {
    id: guestIdCounter++,
    name: "",
    age: 1,
    isChild: false,
    extraInfo: "",
  };
}
