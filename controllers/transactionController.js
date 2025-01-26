import { transactions, orders } from "../seed/mockData.js";

export const createTransaction = (req, res) => {
  const {
    orderId,
    senderWalletId,
    receiverWalletId,
    cryptoAmount,
    fiatAmount,
    type,
  } = req.body;

  const order = orders.find((o) => o.id === orderId);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  const transactionId = transactions.length + 1;
  const newTransaction = {
    id: transactionId,
    orderId,
    senderWalletId,
    receiverWalletId,
    cryptoAmount,
    fiatAmount,
    type,
    status: "completed",
    createdAt: new Date(),
  };

  transactions.push(newTransaction);
  res.status(201).json({
    message: "Transaction created successfully",
    transaction: newTransaction,
  });
};
