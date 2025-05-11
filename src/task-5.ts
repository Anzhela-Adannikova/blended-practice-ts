interface CreateUser {
  name: string;
  age: number;
  isAdmin?: boolean;
}

function createUser({ name, age }: CreateUser) {
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser({ name: "Alice", age: 30 });

// Завдання:

// Типізуйте функцію повністю: параметри і повернення функції.
