"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, timestamp, data, previousHash, hash) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = hash;
    }
}
exports.default = Block;
