import { users } from "../seed/mockData.js";

export const getUsers = (req, res) => {
  res.status(200).json(users);
};

export const createUser = (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const id = users.length + 1;
  const passwordHash = Buffer.from(password).toString("base64");
  const newUser = { id, username, email, passwordHash };

  users.push(newUser);
  res.status(201).json({ message: "User created successfully", user: newUser });
};
