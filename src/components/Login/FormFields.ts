interface Fields {
  name: "email" | "password";
  type?: String;
  label: String;
  description?: String;
  placeholder?: String;
  required: boolean;
}

export const fields: Fields[] = [
  {
    name: "email",
    label: "Email",
    placeholder: "ex: joe12doe@gmail.com",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
  },
];
