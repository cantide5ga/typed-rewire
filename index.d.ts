declare namespace rewire {
    interface Rewire {
        __get__(fn: string): () => any;
        __set__(variable: string, mock: any): void;
        __set__(variables: { [variable: string]: any }): void
        __with__(variables: { [variable: string]: any }): () => any
    }    
}

declare function rewire<T>(file: string): T & rewire.Rewire;
   
export = rewire;



