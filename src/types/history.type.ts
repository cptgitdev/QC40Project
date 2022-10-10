export interface HistoryProps{
    // goBack:()=>void;
    // push:(path:string)=>void;
    (
      to:string,
    ):void;
    (delta:number):void;
}