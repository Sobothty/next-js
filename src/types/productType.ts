export type ProductType = {
    id : number;
    title : string;
    slug : string;
    description : string;
    category : string;
    image_url : string;
    price : number;
}

export type Param = {
  params: {
    id: string;
  };
};