export default class Block {
  constructor(
    public index: number,
    public timestamp: string,
    public data: string,
    public previousHash: string,
    public hash: string
  ) {}
}
