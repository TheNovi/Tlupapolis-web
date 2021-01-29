export interface Paragraph {
  name: string;
  points: Array<string>;
}

export interface Section {
  name: string;
  paragraphs: Array<Paragraph>;
}
