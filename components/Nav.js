
import Link from 'next/link'
import { MenuAlt3Icon } from '@heroicons/react/outline'


function Nav() {

    const links = [{name: "Home",to:"#home"},{name:"Works", to: "#works"},{name: "Skills",to: "#skills"},{name: "About",to: "#about"}]

    return (
        <nav className="bg-black sticky z-50 top-0 flex justify-end pr-10 shadow-lg">
            <ul className=" inline-flex text-white" >
                { links.map((link,index)=> (
                    <li key={index}><Link href={link.to}>
                        <a className="inline-block p-4">{link.name}</a> 
                    </Link>
                </li>)) }
            </ul>
            {/* <MenuAlt3Icon className='h-7 w-7  cursor-pointer hidden md:inline-block mt-4 text-white'/> */}
        </nav>
    )
}

export default Nav
