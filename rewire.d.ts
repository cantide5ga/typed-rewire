declare namespace Rewire {
    function rewire(file: string): {
        __get__(fn: string): () => any;
        __set__(variable: string, mock: any): void;
        __set__(variables: { [variable: string]: any }): void
        __with__(variables: { [variable: string]: any }): () => any
    }
}

export = Rewire;


