
import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'


const baseUrl = `https://cryptocurrency-news2.p.rapidapi.com`

const headers = {
    'X-RapidAPI-Key': 'ce9027053fmshc9bf5e9da25f32ap1ee8eajsnc89e27aa7fec',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}


const createRequest = (url) => ({ url, headers: headers })



export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: () => createRequest('/v1/bitcoinist')
        })
    })
})

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi