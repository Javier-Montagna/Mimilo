export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    titleDescription: string;
    shortDescription: string;
    longDescription: string;
    starRating: number;
    coverImageUrl: string;
    colors: string[];
    sizes: string[];
    features: string[];
    comments: string[];
    images: string[];
}