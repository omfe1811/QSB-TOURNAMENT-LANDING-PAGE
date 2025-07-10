import "./app.css";
import "./index.css";
import groupPicture from "/group.webp";

export default function App() {
	return (
		<main className='min-h-screen p-6 bg-darkestPurple text-lightPink '>
			{/* FONT PREVIEW SECTION */}
			<section className='leading-unified'>
				<h1 className='m-5 text-5xl '>HEADERS-HERO</h1>
				<h1 className='m-4 text-4xl font-hagridItalic'>
					QUEER STREET BASKETBALL
				</h1>
				<p className='m-4 text-lg '>font: Hagrid Text Extrabold Italic</p>

				<h1 className='m-4 text-4xl font-hagridRegular'>
					QUEER STREET BASKETBALL
				</h1>
				<p className='m-4 text-lg '>font: Hagrid Text Extrabold</p>

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

				<h1 className='m-4 text-4xl font-allstar'>QUEER STREET BASKETBALL</h1>
				<p className='m-4 text-lg '>font: All Star Resort</p>

				{/* <h1 className='m-4 text-4xl font-neon'>QUEER STREET BASKETBALL</h1>
				<p className='m-4 text-lg '>font: Neon</p> */}
			</section>
			r{/* CONCEPT SECTION */}
			<section className='mb-12'>
				<h2 className='mb-2 text-3xl font-medium'>CONCEPT</h2>
				<p className='mb-6'>
					Landing page for a Queer Street Basketball tournament.
				</p>

				<h2 className='mb-2 text-3xl font-semibold'>MAIN ELEMENTS</h2>
				<ul className='mb-8 space-y-1 list-disc list-inside'>
					<li>Date, time, location</li>
					<li>Registration Form</li>
					<li>Info about the tournament</li>
					<li>Info about QSB</li>
					<li>Fundraising</li>
				</ul>
			</section>
			{/* COLOR PALETTE SECTION */}
			<section className='mb-12 '>
				<h2 className='mb-6 text-3xl'>Color Palette</h2>
				<div className='grid grid-cols-2 gap-4 mb-8 md:grid-cols-5 h-[30vw]'>
					<div className='flex flex-col items-center justify-center h-full p-4 bg-lightPink text-darkestPurple'>
						<h1 className='text-2xl font-bold'>--light-pink</h1>
						<p className='text-sm'>#FFE5EA</p>
					</div>
					<div className='flex flex-col items-center justify-center h-full p-4 text-white bg-darkPurple'>
						<h1 className='text-2xl font-bold'>--dark-purple</h1>
						<p className='text-sm'>#32146a</p>
					</div>
					<div className='flex flex-col items-center justify-center h-full p-4 text-white bg-magenta'>
						<h1 className='text-2xl font-bold'>--magenta</h1>
						<p className='text-sm'>#C45AB3</p>
					</div>
					<div className='flex flex-col items-center justify-center h-full p-4 text-white bg-vibrantOrange'>
						<h1 className='text-2xl font-bold'>--vibrant-orange</h1>
						<p className='text-sm'>#F75C03</p>
					</div>
					<div className='flex flex-col items-center justify-center h-full p-4 bg-teaGreen text-darkestPurple'>
						<h1 className='text-2xl font-bold'>--tea-green</h1>
						<p className='text-sm'>#D0E3C4</p>
					</div>
				</div>
			</section>
			<section>
				<h1>Pictures</h1>
				<img
					src={groupPicture}
					alt='Group'
					className='mx-auto shadow-lg w-100 rounded-xl'
				/>
			</section>
		</main>
	);
}
