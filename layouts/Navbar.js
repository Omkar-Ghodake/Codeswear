import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.css'
import { GrCart } from 'react-icons/gr'
import CartSideBar from './CartSideBar'

const Navbar = () => {
	const router = useRouter()

	const cartCloseRef = useRef()

	const toggleCartSideBar = () => {
		if (cartCloseRef.current.classList.contains('translate-x-full')) {
			cartCloseRef.current.classList.remove('translate-x-full')
			cartCloseRef.current.classList.add('translate-x-0')
			cartCloseRef.current.classList.add('darken-box-shadow')
		} else if (cartCloseRef.current.classList.contains('translate-x-0')) {
			cartCloseRef.current.classList.add('translate-x-full')
			cartCloseRef.current.classList.remove('translate-x-0')
			cartCloseRef.current.classList.remove('darken-box-shadow')
		}
	}

	useEffect(() => {
		const handleClickOutsideCartSideBar = (event) => {
			if (cartCloseRef.current && !cartCloseRef.current.contains(event.target)) {
				if (cartCloseRef.current.classList.contains('translate-x-0')) {
					cartCloseRef.current.classList.add('translate-x-full')
					cartCloseRef.current.classList.remove('translate-x-0')
					cartCloseRef.current.classList.remove('darken-box-shadow')
				}
			}
		}
		document.addEventListener("mousedown", handleClickOutsideCartSideBar);

		return () => {
			document.removeEventListener("mousedown", handleClickOutsideCartSideBar);
		}
	}, [])


	return (
		<>
			<div className={ `${styles.navbar} flex justify-between flex-col md:flex-row items-center p-4 md:py-5 sticky top-0 bg-white z-50 shadow-lg overflow-x-hidden` }>
				<div className="w-3/4 lg:w-2/3 flex justify-between items-center flex-col md:flex-row">
					<div className="logo cursor-pointer">
						<Link href={ '/' }>
							<img src='/logo_full.webp' width={ 200 } height={ 40 } />
						</Link>
					</div>

					<nav className="nav md:text-lg">
						<ul className="nav-list flex justify-around">
							<Link href={ '/' }>
								<li className={ `${styles.navItem} ${router.pathname === '/' && styles.active} cursor-pointer p-2 md:px-3 lg:px-10` }>Home</li>
							</Link>
							<Link href={ '/tshirts' }>
								<li className={ `${styles.navItem} ${router.pathname === '/tshirts' && styles.active} cursor-pointer p-2 md:px-3 lg:px-10` }>Tshirts</li>
							</Link>
							<Link href={ '/hoodies' }>
								<li className={ `${styles.navItem} ${router.pathname === '/hoodies' && styles.active} cursor-pointer p-2 md:px-3 lg:px-10` }>Hoodies</li>
							</Link>
							<Link href={ '/stickers' }>
								<li className={ `${styles.navItem} ${router.pathname === '/stickers' && styles.active} cursor-pointer p-2 md:px-3 lg:px-10` }>Stickers</li>
							</Link>
							<Link href={ '/mugs' }>
								<li className={ `${styles.navItem} ${router.pathname === '/mugs' && styles.active} cursor-pointer p-2 md:px-3 lg:px-10` }>Mugs</li>
							</Link>
						</ul>
					</nav>
				</div>

				<div className="opts absolute right-0 mx-2">
					<button className="cart text-2xl rounded-full p-2 ease-in duration-200  hover:bg-slate-200" onClick={ toggleCartSideBar }><GrCart /></button>
				</div>

				<div className="cart-sidebar absolute top-0 right-0 w-[80vw] md:w-[70vw] lg:w-[50vw] h-[100vh] bg-white shadow-2xl transition-transform translate-x-full overflow-auto" ref={ cartCloseRef }>
					<CartSideBar toggleCartSideBar={ toggleCartSideBar } />
				</div>
			</div>
		</>
	)
}

export default Navbar