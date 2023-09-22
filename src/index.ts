import Blockchain, { createGenesisBlock } from "./models/Blockchain";

const mohsenBlockchain: Blockchain = new Blockchain([createGenesisBlock()]);
mohsenBlockchain.createNewBlock("Thomas gives 10 coins to Mohsen.");
mohsenBlockchain.createNewBlock("Ali gives 134 coins to Alex.");
mohsenBlockchain.createNewBlock("Sarah gives 56 coins to John.");
console.log(mohsenBlockchain.chain);
