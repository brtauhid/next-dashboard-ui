import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* Search Bar */}
      <div className="hidden md:flex">
        <Image src="/public/search.png" alt="" className="bg-red-700" width={14} height={14}/>
        <input type="text" placeholder="Search" />
      </div>

      {/* Icons & User */}
      <div className="">
        <div className="">
          <Image src="/public/message.png" width={20} height={20} alt=""/>
        </div>
      </div>
    </div>

    
  )
}

export default Navbar