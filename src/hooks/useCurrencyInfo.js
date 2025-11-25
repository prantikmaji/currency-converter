import { useState, useEffect, useCallback } from "react";

//https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json

function useCurrencyInfo(currency){
    
    const [data, setData] = useState({});

    useEffect(()=>{
        fetch(
          `https://v6.exchangerate-api.com/v6/6fa45eed4d1b54b6e5d379e3/latest/${currency}`
        ).then((res)=> res.json()).then((res)=>{setData(res.conversion_rates);});

        console.log(data);




    },[currency])

    return data;

}

export default useCurrencyInfo;