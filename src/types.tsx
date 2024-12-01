export type Goods = {
    id: number,
    vendorСode: string,
    inStock: number,
    title: string,
    description: string,
    imgUrl: string,
    stars: number,
    sizes: number[],
    price: number,
    oldPrice: number,
    gender: string,
    color: string,
    compound: string,
    country: string,
};

export type Params = {
    gender?: string,
    sizes?: number[],
    minPrice?: number,
    maxPrice?: number,
    page?: number;
};

export type Team = {
    id: number,
    imgUrl: string,
    name: string,
    role: string,
};

export type Cart = {
    id: number,
    title: string,
    price: number,
    imgUrl: string,
};

export type Form = {
    phone: string,
    name: string,
};

export type FormCart = {
    phone: string,
    name: string,
    email: string,
};