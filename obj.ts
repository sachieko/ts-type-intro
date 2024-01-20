type Tperson = {
  name: string;
  age: number;
  isStudent: boolean;
}

const person: Tperson = {
  name: 'Nobunaga',
  age: 54,
  isStudent: false,
};

const printProperty = (person: Tperson, keys: (keyof Tperson)[]): void => {
  for (let key of keys) {
    console.log(person[key])
  }
};

printProperty(person, ['age','isStudent']);