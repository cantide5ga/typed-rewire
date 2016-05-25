//declare namespace Rewire {
    declare function rewire<T>(file: string): T & {
        __get__(fn: string): () => any;
        __set__(variable: string, mock: any): void;
        __set__(variables: { [variable: string]: any }): void
        __with__(variables: { [variable: string]: any }): () => any
    }
    
    export = rewire;
//}

//export = Rewire;


