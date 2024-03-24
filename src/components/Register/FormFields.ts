interface Fields {
  name: "username" | "email" | "password" | "linkedIn";
  type?: String;
  label: String;
  description?: String;
  placeholder?: String;
  required: boolean;
}

export const fields: Fields[] = [
  {
    name: "username",
    label: "Username",
    description: "This name won't be public",
    placeholder: "ex: Joe Doe",
    required: true,
  },
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
  {
    name: "linkedIn",
    label: "LinkedIn",
    placeholder: "Linkedin Profile URL",
    required: true,
  },
];
