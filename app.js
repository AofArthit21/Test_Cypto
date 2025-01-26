import express from "express";
import userRoutes from "./routes/userRoutes.js";
import walletRoutes from "./routes/walletRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
const PORT = 3000;

// Middleware for parsing JSON
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/wallets", walletRoutes);
app.use("/transactions", transactionRoutes);
app.use("/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
