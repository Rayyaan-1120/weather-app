import React,{useEffect} from 'react'
import {query,pushdata} from '../features/weatherdata'
import { useDispatch,useSelector } from 'react-redux'

function Navigate() {

    const dispatch = useDispatch()
  const textquery = useSelector((state) => state.data.query);


    useEffect(() => {
        const success = async (pos) => {

            try{
                const {latitude,longitude} = pos.coords
                const inidata = await fetch(`https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${latitude}%2C${longitude}&language=en`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "trueway-geocoding.p.rapidapi.com",
                        "x-rapidapi-key": "64c4036202msh870da0a9f12f511p16c876jsnd5ace2d8bbe6"
                    }
                })
                const maindata = await inidata.json()
                dispatch(query(maindata.results[0].locality))
                const key = '2369b60cfbbf472d92a192549210910'

                const getdata = async (query) => {
                    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${query}&aqi=no`)
                    dispatch(pushdata(await data.json()))
                }
                if(textquery){
                   return getdata(textquery)
                }
           
            }
            catch(err){
                console.log(err)
            }
    
        }
    
        const error = () => {
            alert('cannot access your position')
        }
    
        navigator.geolocation.getCurrentPosition(success,error)
    
    },[])

    
    return null
}

export default Navigate
