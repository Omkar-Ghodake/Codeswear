import React from 'react'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const CartSideBar = ({ toggleCartSideBar }) => {

	return (
		<>
			<div className=''>
				<h1 className='text-2xl p-5'>Shopping Cart</h1>
				<div className="opts absolute top-5 right-0 mx-2">
					<button className="text-2xl rounded-full p-2 ease-in duration-200  hover:bg-slate-200" onClick={ toggleCartSideBar }><AiOutlineClose /></button>
				</div>

				<ol className='list-decimal pl-7 pr-14 text-[18px] md:px-10 md:text-xl'>
					<li className='py-3'>
						<div className="flex items-center">
							<div className='w-2/3'>Tshirt - Wear the Code</div>
							<div className='w-1/3 text-center flex items-center'>
								<span className='mx-3 p-2 rounded-full ease-in duration-200 hover:bg-slate-200 cursor-pointer'><AiOutlineMinus /></span>
								1
								<span className='mx-3 p-2 rounded-full ease-in duration-200 hover:bg-slate-200 cursor-pointer'><AiOutlinePlus /></span>
							</div>
						</div>
					</li>

					<li className='py-3'>
						<div className="flex items-center">
							<div className='w-2/3'>Tshirt - Wear the Code</div>
							<div className='w-1/3 text-center flex items-center'>
								<span className='mx-3 p-2 rounded-full ease-in duration-200 hover:bg-slate-200 cursor-pointer'><AiOutlineMinus /></span>
								1
								<span className='mx-3 p-2 rounded-full ease-in duration-200 hover:bg-slate-200 cursor-pointer'><AiOutlinePlus /></span>
							</div>
						</div>
					</li>

					<li className='py-3'>
						<div className="flex items-center">
							<div className='w-2/3'>Tshirt - Wear the Code</div>
							<div className='w-1/3 text-center flex items-center'>
								<span className='mx-3 p-2 rounded-full ease-in duration-200 hover:bg-slate-200 cursor-pointer'><AiOutlineMinus /></span>
								1
								<span className='mx-3 p-2 rounded-full ease-in duration-200 hover:bg-slate-200 cursor-pointer'><AiOutlinePlus /></span>
							</div>
						</div>
					</li>

					<li className='py-3'>
						<div className="flex items-center">
							<div className='w-2/3'>Tshirt - Wear the Code</div>
							<div className='w-1/3 text-center flex items-center'>
								<span className='mx-3 p-2 rounded-full ease-in duration-200 hover:bg-slate-200 cursor-pointer'><AiOutlineMinus /></span>
								1
								<span className='mx-3 p-2 rounded-full ease-in duration-200 hover:bg-slate-200 cursor-pointer'><AiOutlinePlus /></span>
							</div>
						</div>
					</li>

					<li className='py-3'>
						<div className="flex items-center">
							<div className='w-2/3'>Tshirt - Wear the Code</div>
							<div className='w-1/3 text-center flex items-center'>
								<span className='mx-3 p-2 rounded-full ease-in duration-200 hover:bg-slate-200 cursor-pointer'><AiOutlineMinus /></span>
								1
								<span className='mx-3 p-2 rounded-full ease-in duration-200 hover:bg-slate-200 cursor-pointer'><AiOutlinePlus /></span>
							</div>
						</div>
					</li>

					<li className='py-3'>
						<div className="flex items-center">
							<div className='w-2/3'>Tshirt - Wear the Code</div>
							<div className='w-1/3 text-center flex items-center'>
								<span className='mx-3 p-2 rounded-full ease-in duration-200 hover:bg-slate-200 cursor-pointer'><AiOutlineMinus /></span>
								1
								<span className='mx-3 p-2 rounded-full ease-in duration-200 hover:bg-slate-200 cursor-pointer'><AiOutlinePlus /></span>
							</div>
						</div>
					</li>

					<li className='py-3'>
						<div className="flex items-center">
							<div className='w-2/3'>Tshirt - Wear the Code</div>
							<div className='w-1/3 text-center flex items-center'>
								<span className='mx-3 p-2 rounded-full ease-in duration-200 hover:bg-slate-200 cursor-pointer'><AiOutlineMinus /></span>
								1
								<span className='mx-3 p-2 rounded-full ease-in duration-200 hover:bg-slate-200 cursor-pointer'><AiOutlinePlus /></span>
							</div>
						</div>
					</li>
				</ol>

				<button className="flex mx-auto mb-3 md:my-5 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Checkout</button>
			</div>
		</>
	)
}

export default CartSideBar