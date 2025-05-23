interface CreateUser {
  name: string;
  age: number;
  isAdmin: boolean;
}

interface User {
  name: string;
  age: number;
}

function createUser({ name, age }: User): CreateUser {
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser({ name: "Alice", age: 30 });

// Завдання:

// Типізуйте функцію повністю: параметри і повернення функції.
