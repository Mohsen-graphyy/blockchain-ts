import calculateHash from "../modules";
import Block from "./Block";

export default class Blockchain {
  constructor(public chain: Block[]) {}

  createNewBlock(data: string): void {
    const newBlock: Block = this.constructNewBlock(data);

    if (this.isValidNewBlock(newBlock, this.getLastBlock())) {
      this.chain.push(newBlock);
    } else {
      throw new Error("this block can't join to the chain");
    }
  }

  private constructNewBlock(data: string): Block {
    const index: number = this.chain.length + 1;
    const timestamp: string = new Date().toISOString();
    const previousHash: string = this.getLastBlockHash();
    const hash: string = calculateHash(index, previousHash, timestamp, data);

    return new Block(index, timestamp, data, previousHash, hash);
  }

  private getLastBlockHash(): string {
    return this.getLastBlock().hash;
  }

  private getLastBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  private isValidNewBlock(newBlock: Block, previousBlock: Block): boolean {
    const isIndexValid = previousBlock.index + 1 === newBlock.index;
    const isPreviousHashValid = previousBlock.hash === newBlock.previousHash;
    const isHashValid =
      calculateHash(
        newBlock.index,
        newBlock.previousHash,
        newBlock.timestamp,
        newBlock.data
      ) === newBlock.hash;

    return isIndexValid && isPreviousHashValid && isHashValid;
  }
}

export function createGenesisBlock(): Block {
  const index = 1;
  const previousHash = "";
  const timestamp = new Date().toISOString();
  const data = "WE GONNA DESTROY ALL GOVERMENTS :)";
  const genesisBlockHash: string = calculateHash(
    index,
    previousHash,
    timestamp,
    data
  );

  return new Block(index, timestamp, data, previousHash, genesisBlockHash);
}
