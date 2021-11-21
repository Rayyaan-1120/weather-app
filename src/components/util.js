import { useDispatch } from "react-redux"
import { pushdata } from "../features/weatherdata"

export const Getdata = async (query) => {
    const dispatch = useDispatch()


  const key = '2369b60cfbbf472d92a192549210910'

    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${query}&aqi=no`)
    dispatch(pushdata(await data.json()))
    
}
