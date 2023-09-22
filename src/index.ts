import Blockchain, { createGenesisBlock } from "./models/Blockchain";

const mohsenBlockchain: Blockchain = new Blockchain([createGenesisBlock()]);
const transactions = [
  "Thomas gives 10 coins to Mohsen.",
  "Ali gives 134 coins to Alex.",
  "Sarah gives 56 coins to John.",
];

transactions.forEach((transaction) =>
  mohsenBlockchain.createNewBlock(transaction)
);

console.log(mohsenBlockchain.chain);
