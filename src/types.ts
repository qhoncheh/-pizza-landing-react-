export type pizzaDataTypes =  {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}

export type SectionTitleProps = {
  text: string;
  textColor?: string;     
  borderColor?: string;    
  className?: string;     
}

export type PizzaProp = {
  pic: string;
  name: string;
  desc: string;
  price: number;
  className: string 
};