

function InfoButtons(props) {
  return (
    <>
      <div className='my-4'>
                <button className='border border-gray-400 rounded-xl text-zomato-400 flex flex-wrap items-center px-3 py-2 items-center gap-1 md:text-xl'>{props.icon}<span className="text-black font-light">{props.title}</span></button>
            </div>
    </>
  )
}

export default InfoButtons