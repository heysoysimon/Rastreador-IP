import "../styles/Header.css"

const Formulario = () => {
  return (
    <div>

      <div className='h-50 w-screen p-2 imagenFondo'>
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
    </div>

      <div className="col-sm-12">
        <div className="flex justify-center items-center mt-2 pt flex-wrap">

        <div> info</div>
        <div> info</div>
        <div> info</div>
        <div> info</div>

        </div>
      </div>

      </div>      
    </div>
  )
}

export default Formulario
