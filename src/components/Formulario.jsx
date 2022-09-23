import "../styles/Header.css"
import { useState,useEffect } from "react"
import axios from "axios"

const Formulario = () => {

  const[ InputValue, setInputValue] = useState("")
  const [IP, setIp] = useState("")

/* ipEData es una variable para el DOM */
  const [ipData, setIpData] = useState({
query: "190.79.83.21",
location:{
  status: "success",
  countryCode: "VE",
  regionName: "Miranda",
  city: "Caracas",
  lat: 10.4966,
  lon: -66.8446,
  offset: -14400,
  isp: "CANTV Servicios, Venezuela"
}
});

  useEffect(() =>{
    const consultarApi = async () =>{

      const consulta = await axios(
        `http://ip-api.com/json/${IP}?fields=status,message,countryCode,regionName,city,lat,lon,offset,isp,query`
      );

      console.log(consulta.data)

      setIpData(consulta.data)
      setIpData({
        query: consulta.data.query,
        location: {
          countryCode: consulta.data.countryCode,
          regionName: consulta.data.regionName,
          city: consulta.data.city,
          lat: consulta.data.lat,
          lon: consulta.data.lng,
          offset: consulta.data.offset,
        },
        isp: consulta.data.isp,
      });
    }
    consultarApi();
  },[IP])
  
  function isObjEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }

    return true;
  }

  const handleInputTexto = (e) =>{
    setInputValue(e.target.value)
  }
  const handleBuscar = (e) =>{
    e.preventDefault();
    setIp(InputValue)
    /* console.log(InputValue) */
  }
  return (        
<>

<header className='h-auto  w-screen p-2 imagenFondo'>
  <h1 className='text-3xl mt-10 text-center uppercase text-white'> 
  Rastreador de Direciones IP</h1>

  <div className='col-sm-12 mb-4'>
  <form>
      <div className='flex justify-center items-center mt-2 pt'> 
        <label for="seach" className=''></label>
        <input className='rounded-l-lg w-1/2 h-12' placeholder="Ingrese una direcion IP o dominio " 
        value={InputValue} onChange={handleInputTexto} type="text"></input>

        <input className='rounded-r-lg w-10 h-12 text-white cursor-pointer bg-black' 
        type="submit" onClick={handleBuscar} value='>'></input>
      </div>
  </form>

  <div className="flex  mt-10 justify-center">
  <div className="bg-white flex flex-col md:flex-row w-auto px-14 justify-center rounded-lg">
        <div className="m-2 text-center">
          <div><p>IP ADDRESS</p></div>
          <div>{isObjEmpty(ipData) ? "-- --" : <p>{ipData.query}</p>}</div>
        </div>

        <div className="m-2 text-center">
          <div><p>LOCATION</p></div>
          <div>{isObjEmpty(ipData) ? (
                "-- --"
              ) : (
                <p>{`${ipData.location.city}, ${ipData.location.regionName}, ${ipData.location.countryCode}`}</p>
              )}</div>
        </div>

        <div className="m-2 text-center">
          <div><p>TIMEZONE</p></div>
          <div> {isObjEmpty(ipData) ? (
                "-- --"
              ) : (
                <p>{`UTC ${ipData.location.offset}`}</p>
              )}</div>
        </div>

        <div className="m-2 text-center">
          <div><p>ISP</p></div>
          <div> {isObjEmpty(ipData) ? "-- --" : <p>{ipData.isp}</p>}</div>
        </div>  
  </div>
  </div>
</div>

</header>

</>     
  )
}

export default Formulario
