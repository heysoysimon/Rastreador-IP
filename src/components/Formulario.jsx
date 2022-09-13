import "../styles/Header.css"

const Formulario = () => {
  return (        
<>

<header className='h-auto  w-screen p-2 imagenFondo'>
  <h1 className='text-3xl mt-10 text-center uppercase text-white'> 
  Rastreador de Direciones IP</h1>

  <div className='col-sm-12 mb-4'>
  <form>
      <div className='flex justify-center items-center mt-2 pt'> 
        <label for="seach" className=''></label>
        <input className='rounded-l-lg w-1/2 h-12' type="seach"></input>
        <input className='rounded-r-lg w-10 h-12 text-white bg-black' 
        type="submit" value='>'></input>
      </div>
  </form>

  <div className="flex  mt-10 justify-center">
  <div className="bg-white flex flex-col md:flex-row w-auto px-14 justify-center rounded-lg">
        <div className="m-2 text-center">
          <div><p>IP ADDRESS</p></div>
          <div><p>190.79.83.21</p></div>
        </div>

        <div className="m-2 text-center">
          <div><p>LOCATION</p></div>
          <div><p>Distrito Capital, VE</p></div>
        </div>

        <div className="m-2 text-center">
          <div><p>TIMEZONE</p></div>
          <div>UTC -04:00</div>
        </div>

        <div className="m-2 text-center">
          <div><p>ISP</p></div>
          <div><p>CANTV Servicios, Venezuela</p></div>
        </div>  
  </div>
  </div>
</div>

</header>

</>     
  )
}

export default Formulario
