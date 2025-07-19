import "./app.css";
import "./index.css";
import groupPicture from "/group.webp";
import logo from "/logo-new.png";

export default function App() {
	return (
		<main className='p-12 text-white bg-black [&>*]:pb-10'>
			<div className='bg-mint-500'>...</div>
			{/* CONCEPT SECTION */}
			<section className='flex flex-row align-middle justify-evenly'>
				<div>
					<h1 className='text-5xl font-medium bg-rose_pink'>CONCEPT</h1>
					<p className=''>
						Landing page for a Queer Street Basketball tournament.
					</p>
				</div>

				<div>
					<h1 className='text-5xl font-semibold '>MAIN ELEMENTS</h1>
					<ul className='list-disc list-inside '>
						<li>Date, time, location</li>
						<li>Registration Form</li>
						<li>Volounteering Form</li>
						<li>Info about the tournament</li>
						<li>Info about QSB</li>
						<li>Fundraising</li>
					</ul>
				</div>
			</section>
			{/* FONT PREVIEW SECTION */}
			<section className='flex flex-col gap-6'>
				<div>
					<h1 className='text-5xl font-semibold text-center'>HEADERS-HERO</h1>

					<div>
						<h1 className='text-4xl font-hagridItalic'>
							{" "}
							OSLO QUEER STREET BASKETBALL
						</h1>
						<p className='text-lg '>font: Hagrid Text Extrabold Italic</p>
					</div>
					<h1 className='text-4xl font-hagridRegular'>
						OSLO QUEER STREET BASKETBALL
					</h1>
					<p className='text-lg '>font: Hagrid Text Extrabold</p>

					<h1 className='text-4xl font-allstar'>
						OSLO QUEER STREET BASKETBALL
					</h1>
					<p className='text-lg '>font: All Star Resort</p>
				</div>
			</section>

			<section className=''>
				<h2 className='text-3xl '>Color Palette</h2>
				<div className='grid grid-cols-2 gap-4  md:grid-cols-5 h-[30vw]'>
					{/* Rose Pink */}
					<div className='flex flex-col items-center justify-center h-full p-4 text-black bg-rosePink'>
						<h1 className='text-2xl font-bold'>--color-rosePink</h1>
						<p className='text-sm'>#FF66C4</p>
					</div>

					{/* Picton Blue */}
					<div className='flex flex-col items-center justify-center h-full p-4 text-black bg-pictonBlue'>
						<h1 className='text-2xl font-bold'>--color-pictonBlue</h1>
						<p className='text-sm'>#38B6FF</p>
					</div>

					{/* Mustard */}
					<div className='flex flex-col items-center justify-center h-full p-4 text-black bg-mustard'>
						<h1 className='text-2xl font-bold'>--color-mustard</h1>
						<p className='text-sm'>#FFDE59</p>
					</div>

					{/* Black */}
					<div className='flex flex-col items-center justify-center h-full p-4 text-white bg-black'>
						<h1 className='text-2xl font-bold'>--color-black</h1>
						<p className='text-sm'>#040303</p>
					</div>

					{/* Indigo */}
					<div className='flex flex-col items-center justify-center h-full p-4 text-white bg-indigo'>
						<h1 className='text-2xl font-bold'>--color-indigo</h1>
						<p className='text-sm'>#540D6E</p>
					</div>
				</div>
			</section>
			<section>
				<nav class='flex flex-wrap items-center justify-between p-3 bg-teal-200/20'>
					<img
						src='https://tailwindflex.com/public/favicon.ico'
						class='h-10 w-10'
						alt=''
					/>
					<div class='flex md:hidden'>
						<button id='hamburger'>
							<img
								class='toggle block'
								src='https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png'
								width='48'
								height='48'
							/>
							<img
								class='toggle hidden'
								src='https://img.icons8.com/fluent-systems-regular/2x/close-window.png'
								width='48'
								height='48'
							/>
						</button>
					</div>
					<div class='toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-teal-900 md:border-none'>
						<a
							href='#'
							class='block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none'>
							Home
						</a>
						<a
							href='#'
							class='block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none'>
							Products
						</a>
						<a
							href='#'
							class='block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none'>
							Pricing
						</a>
						<a
							href='#'
							class='block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none'>
							Contact
						</a>
					</div>
					<a
						href='#'
						class='toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-teal-900 hover:bg-teal-500 text-white md:rounded'>
						Create Account
					</a>
				</nav>
			</section>
			<section>
				<h1>Pictures</h1>
				<div className='flex flex-row'>
					<img
						src={groupPicture}
						alt='Group'
						className='mx-auto shadow-lg w-max h-100'
					/>
					<img
						src={logo}
						alt='QSB logo'
						className='mx-auto shadow-lg w-100 h-100 rounded-xl '
					/>
				</div>
			</section>
			{/* <h1 className='m-4 text-4xl font-hagridAltItalic'>
					QUEER STREET BASKETBALL
				</h1>
				<p className='m-4 text-lg '>font: Hagrid Italic</p> */}

			{/* <h1 className='m-4 text-4xl font-royalacid'>QUEER STREET BASKETBALL</h1>
				<p className='m-4 text-lg '>font: Royalacid</p>

				<h1 className='m-4 text-4xl font-royalacidOutline'>
					QUEER STREET BASKETBALL
				</h1>
				<p className='m-4 text-lg '>font: Royalacid Outline</p> */}
			{/* <h1 className='m-4 text-4xl font-neon'>QUEER STREET BASKETBALL</h1>
				<p className='m-4 text-lg '>font: Neon</p> */}
		</main>
	);
}
