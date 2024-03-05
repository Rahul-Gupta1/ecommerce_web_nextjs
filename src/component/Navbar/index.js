'use client'


export default function Navbar(){
    return (
        <>
        <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-grey-200">
            <div  className="max-w-screen-x1 flex flex-wrap items-center justify-between mx-auto p-4">
               <div className="flex items-center cursor-pointer">
                <span className="slef-center text-2xl font-semibold whitespace-nowrap">
                    Ecommerce
                </span>
            </div>
            <div className = "flex md:order-2 gap-2">
            </div>
            </div>
            </nav>
        </>
    )
}