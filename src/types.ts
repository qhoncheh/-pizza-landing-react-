export type pizzaDataTypes = {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  pic: string;
  soldOut: boolean;
  desc: string;
  className?: string;
};

export type SectionTitleProps = {
  text: string;
  textColor?: string;
  borderColor?: string;
  className?: string;
};

export type PizzaProp = {
  pic: string;
  name: string;
  desc: string;
  price: number;
  className?: string;
};
