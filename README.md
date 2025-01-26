# Test_Cypto
การ Run project

npm init -y
npm install express

เปลี่ยน package.json 

{
  "name": "crypto_test",
  "version": "1.0.0",
  "main": "app.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.21.2"
  }
}

Run npm start

ใช้ Postman ยิง API 

User APIs

Get users = Get http://localhost:3000/users 


Create User = Post http://localhost:3000/users/create 
Body raw 
{
  "username": "a1",
  "email": "a1@example.com",
  "password": "password123"
}

Wallet APIs

Get wallets  = Get http://localhost:3000/wallets

Create Wallet = Post http://localhost:3000/wallets/create
Body raw 
{
  "userId": 1,
  "cryptoCode": "XRP",
  "balance": 100
}

Order APIs

Create Order = Post http://localhost:3000/orders/create
Body raw 
{
  "userId": 1,
  "cryptoCode": "BTC",
  "fiatCode": "USD",
  "orderType": "buy",
  "amount": 0.1
}

Transaction APIs

Create Transaction = Post http://localhost:3000/transactions/create
Body raw 
{
  "orderId": 1,
  "senderWalletId": 1,
  "receiverWalletId": 2,
  "cryptoAmount": 0.1,
  "fiatAmount": 5000,
  "type": "buy"
}


