/* Defines the line entity */
export interface ILine {
  id: number;
  number: string;
  destination: string;
  text_color: string;
  color: string;
  mode: string;
  stops?: any[];
}
