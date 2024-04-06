import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const baseUrl = "https://api.coinranking.com"
const headerContent = {
    'X-RapidAPI-Key': 'ce9027053fmshc9bf5e9da25f32ap1ee8eajsnc89e27aa7fec',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const createRequest = (url) => ({ url, headers: headerContent })


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptosApi: builder.query({
            query: (count) => createRequest(`/v2/coins?limit=${count}`)
        }),
        getCryptoDetail: builder.query({
            query: ({ uuid, timeperiod }) => createRequest(`/v2/coin/${uuid}?timePeriod=${timeperiod}`)
        }),
        getCoinPriceHistory: builder.query({
            query: ({ uuid, timeperiod })=> createRequest(`https://api.coinranking.com/v2/coin/${uuid}/history?timePeriod=${timeperiod}`)
        })
    })

})

export const {
    useGetCryptosApiQuery,
    useGetCryptoDetailQuery,
    useGetCoinPriceHistoryQuery
} = cryptoApi