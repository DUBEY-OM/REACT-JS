import {useEffect,UseState} from "react"
function usecurrencyinfo(curr){
    const [data,setdata]=UseState({})
    useEffect(()=>{fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=setdata(res[currency]))
        console.log(data)

    },[currency])
    console.log(data);
    return data
}
export default usecurrencyinfo()