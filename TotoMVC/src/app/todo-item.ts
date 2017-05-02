export interface TodoItem {
  id : number;
  text : string;
  done : boolean;
  oldText? : string;
  isEditing? : boolean;
}
