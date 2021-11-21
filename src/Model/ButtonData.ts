export interface ButtonData {
  value: string;
  symbol: string;
  type:
    | 'value'
    | 'function'
    | 'clear'
    | 'clearAll'
    | 'equal'
    | 'delete'
    | 'memory'
    | 'empty'
    | 'answer';
}
