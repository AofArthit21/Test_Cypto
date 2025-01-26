import { wallets } from "../seed/mockData.js";

export const getWallets = (req, res) => {
  res.status(200).json(wallets);
};

export const createWallet = (req, res) => {
  const { userId, cryptoCode, balance } = req.body;

  if (!userId || !cryptoCode) {
    return res
      .status(400)
      .json({ message: "User ID and Crypto Code are required" });
  }

  const walletExists = wallets.find(
    (wallet) => wallet.userId === userId && wallet.cryptoCode === cryptoCode
  );
  if (walletExists) {
    return res.status(400).json({
      message: "Wallet already exists for this user and cryptocurrency",
    });
  }

  const walletId = wallets.length + 1;

  const newWallet = {
    id: walletId,
    userId,
    cryptoCode,
    balance: balance || 0,
    createdAt: new Date(),
  };

  wallets.push(newWallet);

  res
    .status(201)
    .json({ message: "Wallet created successfully", wallet: newWallet });
};
