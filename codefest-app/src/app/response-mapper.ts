import { Block } from "./block";

export class ResponseMapper {

    static mapBlock(data: any): Block {
        const myBlock: Block = new Block();
        
        return myBlock;
    }
}