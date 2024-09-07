export interface Product   {
    id: number
    name: string
    offerPercent: number;
    slug: string
    image: string
    banner?: string
    price: number
    brand: string
    description: string
    categoryId: number
    rating: number
    numReviews: number
    countInStock: number
    color?: []
    sizes?: []
}