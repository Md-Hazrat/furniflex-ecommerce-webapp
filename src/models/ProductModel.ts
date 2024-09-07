export type Product =  {
    id: number
    name: string
    offerPercent: number;
    slug: string
    image: string
    banner?: string
    price: number
    brand: string
    description: string
    category: string
    rating: number
    numReviews: number
    countInStock: number
    color?: []
    sizes?: []
}