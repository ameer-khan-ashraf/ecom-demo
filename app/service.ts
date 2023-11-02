import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 1000
});

export const getProducts = (limit:number=0,skip:number=0,select:string='') => instance.get('/products',{
    params:{
        limit,
        skip,
        select
    }
}).then((res)=>{
    return res.data.products
})

export const getSingleProduct = async (id:number) =>{
    const queryRoute = `products/${id}`
    const response = await instance.get(queryRoute)
    return response.data
}

export const getProductsById = (ids:number[]) =>{
    if(!ids.length){
        return []
    }
    return Promise.all(ids.map(id=>getSingleProduct(id)))
}