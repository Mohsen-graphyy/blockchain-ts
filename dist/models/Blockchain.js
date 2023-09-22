"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGenesisBlock = void 0;
const modules_1 = __importDefault(require("../modules"));
const Block_1 = __importDefault(require("./Block"));
class Blockchain {
    constructor(chain) {
        this.chain = chain;
    }
    createNewBlock(data) {
        const newBlock = this.constructNewBlock(data);
        if (this.isValidNewBlock(newBlock, this.getLastBlock())) {
            this.chain.push(newBlock);
        }
        else {
            throw new Error("this block can't join to the chain");
        }
    }
    constructNewBlock(data) {
        const index = this.chain.length + 1;
        const timestamp = new Date().toISOString();
        const previousHash = this.getLastBlockHash();
        const hash = (0, modules_1.default)(index, previousHash, timestamp, data);
        return new Block_1.default(index, timestamp, data, previousHash, hash);
    }
    getLastBlockHash() {
        return this.getLastBlock().hash;
    }
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }
    isValidNewBlock(newBlock, previousBlock) {
        const isIndexValid = previousBlock.index + 1 === newBlock.index;
        const isPreviousHashValid = previousBlock.hash === newBlock.previousHash;
        const isHashValid = (0, modules_1.default)(newBlock.index, newBlock.previousHash, newBlock.timestamp, newBlock.data) === newBlock.hash;
        return isIndexValid && isPreviousHashValid && isHashValid;
    }
}
exports.default = Blockchain;
function createGenesisBlock() {
    const index = 1;
    const previousHash = "";
    const timestamp = new Date().toISOString();
    const data = "WE GONNA DESTROY ALL GOVERMENTS :)";
    const genesisBlockHash = (0, modules_1.default)(index, previousHash, timestamp, data);
    return new Block_1.default(index, timestamp, data, previousHash, genesisBlockHash);
}
exports.createGenesisBlock = createGenesisBlock;
