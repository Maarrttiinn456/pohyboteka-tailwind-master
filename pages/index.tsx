import Head from "next/head"
import Image from "next/image"
import { useEffect } from "react"
import Flower from "../public/images/flower.svg"
import Leaf from "../public/images/leaf.svg"
import Burger from "../public/images/burger.svg"

const toggleNavigaton = () => {
	const nav = document.getElementById("navigation")
	if (nav.classList.contains("hidden")) {
		nav.classList.remove("hidden")
		nav.classList.add("flex")
	} else {
		nav.classList.remove("flex")
		nav.classList.add("hidden")
	}
}

export default function Homepage() {
	const resizeHandle = () => {
		const nav = document.getElementById("navigation")
		const burgerButton = document.getElementById("burgerButton")
		if (window.getComputedStyle(burgerButton).display === "none") {
			if (!nav.classList.contains("flex")) toggleNavigaton()
		} else {
			if (!nav.classList.contains("hidden")) toggleNavigaton()
		}
	}

	useEffect(() => {
		const burgerButton = document.getElementById("burgerButton")
		if (window.getComputedStyle(burgerButton).display !== "none")
			toggleNavigaton()
		window.addEventListener("resize", resizeHandle)
		return () => window.removeEventListener("resize", resizeHandle)
	})

	return (
		<div className="">
			<Head>
				<title>Pohybotéka</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="pt-4 mb-16 relative">
				<div className="w-full h-4/5 -z-1 absolute">
					<Image
						className=" -z-1"
						alt="Flowers in hand"
						src="/images/bg_flowers.jpg"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<a
					className="block p-5 hover:underline md:hidden"
					onClick={toggleNavigaton}
					id="burgerButton"
				>
					<Burger className="ml-auto" fill="white" />
				</a>
				<nav
					id="navigation"
					className="flex flex-col md:flex-row md:justify-start items-end w-11/12 font-montserrat-alternates font-bold text-white mx-auto mb-10 md:mb-48"
				>
					<a
						className="inline-block p-5 md:p-10 hover:underline"
						href=""
					>
						co je Pohybotéka
					</a>
					<a
						className="inline-block p-5 md:p-10 hover:underline"
						href=""
					>
						lektoři
					</a>
					<a
						className="inline-block p-5 md:p-10 hover:underline"
						href=""
					>
						reference
					</a>
					<a
						className="inline-block p-5 md:p-10 md:ml-auto hover:underline"
						href=""
					>
						přihlásit se
					</a>
				</nav>

				<div className="text-center mb-24">
					<h1 className="inline-block font-montserrat-alternates font-semibold text-right text-vw sm:text-5xl md:text-7xl xl:text-9xl text-white">
						Mějme se{" "}
						<span className="inline-block font-sheenline-script font-medium text-2vw sm:text-7xl md:text-8xl xl:text-10xl">
							skvěle
						</span>
						<br />
						ve svém těle!
					</h1>
				</div>
				<div className="w-full md:w-11/12 flex p-10 md:p-24 bg-dust-storm-500 rounded-tlbr-half mx-auto overflow-hidden relative">
					<div className="w-full lg:w-2/5 font-montserrat">
						<h3 className="font-montserrat-alternates text-left text-4xl sm:text-6xl text-white mb-8 md:mb-16 leading-6">
							<span className="font-sheenline-script text-old-pink-darker text-5xl sm:text-8xl">
								co je
							</span>
							<br />
							Pohybotéka
						</h3>
						<p className="mb-6">
							Cvičební videa, přednášky, rady a návody pro zdraví
							celého těla s Jolanou Novotnou a dalšími odborníky.
						</p>
						<p className="mb-6">
							V pohybotéce najdete online lekce, které vás vedou k
							sobě. Mým záměrem není, abyste cviky kopírovaly a
							dělaly, co říkám. Mým záměrem je, abyste samy sobě
							naslouchaly a vycházely z toho, co vám vaše tělo
							říká.
						</p>
						<p className="mb-8 md:mb-16">
							{" "}
							Já vás budu jen provázet, navádět, pobízet,
							zvědomovat. Poskytnu vám časový prostor a nabídnu
							pohyb pro to, abyste se se sebou spojily, a tak daly
							svému tělu možnost vám vypravovat, sdělovat,
							navádět.{" "}
						</p>
						<a href="">
							<p className="text-4xl">
								<span className="font-sheenline-script font-normal text-5xl sm:text-6xl text-white hover:underline">
									více o pohybotéce
								</span>
								<span className=" ml-10 font-manrope text-old-pink-darker text-4xl">
									→
								</span>
							</p>
						</a>
					</div>
					<div className="w-3/5 h-full relative hidden lg:block">
						<Flower
							className="absolute left-20 top-12"
							fill="#B48788"
						/>
					</div>
				</div>
			</header>
			<main className="w-full">
				<div className="w-full md:w-11/12 mx-auto mb-16 sm:mb-32">
					<h2 className="font-montserrat-alternates text-left text-5xl sm:text-7xl text-black mb-4 sm:mb-8 ml-6 sm:ml-24">
						lekce{" "}
						<span className="font-sheenline-script text-6xl sm:text-8xl">
							zdarma
						</span>
					</h2>
					<div className="flex flex-col lg:flex-row w-full">
						<div className="lg:w-25vw flex-shrink-0 bg-wedgewood-500 p-18 lg:mr-6 relative">
							<a href="">
								<Image
									className="opacity-40"
									src="/images/b128c90bb0f70e1d9a1cf97894b58865.png"
									alt="Chill"
									layout="fill"
									objectFit="cover"
								/>

								<div className="w-full h-full flex justify-center items-center">
									<div className=" w-2/4 lg:w-3/4">
										<Image
											className="opacity-70 hover:opacity-100"
											src="/images/0e5418669751abfff3fd3fcbe2ea82c8.png"
											alt="Play button"
											layout="responsive"
											width={1}
											height={1}
										/>
									</div>
								</div>
							</a>
						</div>
						<div className="flex-grow bg-wedgewood-500 font-montserrat text-white px-8 py-10 md:px-12 md:py-10">
							<p className="text-xl font-bold mb-2">
								Příští online hodina zdarma
							</p>
							<h3 className="text-4xl font-bold mb-12">
								čtvrtek 31. prosince od 18:00
							</h3>
							<p className="text-xl font-bold">
								Silné tělo, klidná mysl, dokonalá imunita
							</p>
							<p className="text-xl font-bold">
								– Wim Hof metoda v praxi{" "}
							</p>
							<p className="text-xl mb-12">Hana Moravčíková</p>
							<div className="grid w-full sm:grid-cols-2 items-center">
								<p className="text-sm ml-auto mb-4 sm:ml-0 sm:mb-0">
									Nechce se vám čekat? Zakupte kurz a sledujte
									hned!
								</p>
								<a
									href=""
									className="inline-block ml-auto py-2 px-4 text-xl font-bold uppercase border-4 border-white rounded-tl-3xl rounded-br-3xl text-center hover:bg-white hover:text-wedgewood-500"
								>
									shlédnout hned
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="w-11/12 mx-auto mb-16">
					<h2 className="font-sheenline-script text-6xl sm:text-8xl text-black mb-4 sm:mb-8 ml-6 sm:ml-24">
						videokurzy
					</h2>
					<p className="font-montserrat w-2/3 ml-6 sm:ml-24 mb-20">
						V našem těle se vše hýbe, ale jen tehdy, když mu dáme
						příležitost, podnět, když své tělo vzbudíme, vystoupíme
						ze zajetých zvyků, ze svých zvyků, změníme se a tím
						vykročíte na novou cestu, která vede do nového
						zdravějšího cíle.
						<br />
						Začněte hned v pohodlí svého domova.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
						<div className="bg-gradient-to-b from-wedgewood-500 to-wedgewood-700 text-white p-8 font-montserrat flex flex-col items-end justify-between">
							<div className="inline-block flex justify-end">
								<p className="font-sheenline-script text-left font-light text-4xl mb-10 lowercase">
									Přednáška
								</p>
							</div>
							<h3 className="self-start text-xl font-bold mb-4 font-montserrat-alternates">
								Pánevní dno jako nové 3x3
							</h3>
							<p className="self-start mb-10">
								1,5 h přednáška plná praktických rad, informací,
								souvislostí i podnětů, jak se o své pánevní dno
								starat.
							</p>
							<div className="text-right">
								<p className="text-xl font-semibold mb-2 font-montserrat-alternates">
									200 Kč / 1 měsíc
								</p>
								<a
									href=""
									className="inline-block py-2 px-10 text-xl font-bold uppercase border-4 border-white rounded-tl-2xl rounded-br-2xl text-center hover:bg-white hover:text-wedgewood-700"
								>
									Zakoupit kurz
								</a>
							</div>
						</div>
						<div className="relative hidden md:block">
							<Image
								src="/images/da875d19ebc81d897f7708fe1bc73713.png"
								alt=""
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className="bg-gradient-to-b from-oriental-pink-500 to-oriental-pink-700 text-white p-8 font-montserrat flex flex-col items-end justify-between">
							<div className="inline-block flex justify-end">
								<p className="font-sheenline-script text-left font-light text-4xl mb-10 lowercase">
									Pohybová <br />
									lekce
								</p>
							</div>

							<h3 className="self-start text-xl font-bold mb-4 font-montserrat-alternates">
								Pánevní dno
							</h3>
							<p className="self-start mb-10">
								Cvičební videolekce pro skvělé fungování
								pánevního dna pro začátečníky.
							</p>
							<div className="text-right">
								<p className="text-xl font-semibold mb-2 font-montserrat-alternates">
									150 Kč / 1 měsíc
								</p>
								<a
									href=""
									className="inline-block py-2 px-10 text-xl font-bold uppercase border-4 border-white rounded-tl-2xl rounded-br-2xl text-center hover:bg-white hover:text-oriental-pink-700"
								>
									Zakoupit kurz
								</a>
							</div>
						</div>
						<div className="relative hidden md:block">
							<Image
								src="/images/454b725f0552cde167e18ee0e12f989a.png"
								alt=""
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className="bg-gradient-to-b from-moon-mist-500 to-moon-mist-700 text-white p-8 font-montserrat flex flex-col items-end justify-between">
							<div className="inline-block flex flex-wrap justify-end mb-10 ">
								<p className="font-sheenline-script text-left text-4xl lowercase">
									Přednáška
								</p>
								<p className="font-montserrat text-left text-3xl mx-12 lowercase">
									+
								</p>
								<p className="font-sheenline-script text-left text-4xl lowercase">
									Pohybová <br />
									lekce
								</p>
							</div>

							<h3 className="self-start text-xl font-bold mb-4 font-montserrat-alternates">
								Přednáška pánevní dno jako nové + pohybová lekce
								pánevní dno
							</h3>
							<p className="self-start mb-10"></p>
							<div className="text-right">
								<p className="text-xl font-semibold mb-2 font-montserrat-alternates">
									300 Kč / 1 měsíc
								</p>
								<a
									href=""
									className="inline-block py-2 px-10 text-xl font-bold uppercase border-4 border-white rounded-tl-2xl rounded-br-2xl text-center hover:bg-white hover:text-moon-mist-700"
								>
									Zakoupit kurz
								</a>
							</div>
						</div>
						<div className="bg-gradient-to-b from-wedgewood-500 to-wedgewood-700 text-white p-8 font-montserrat flex flex-col items-end justify-between">
							<div className="inline-block flex justify-end">
								<p className="font-sheenline-script text-left text-4xl mb-10 lowercase">
									Přednáška
								</p>
							</div>

							<h3 className="self-start text-xl font-bold mb-4 font-montserrat-alternates">
								Celulitida – mýty a fakta ukrytá v tkáních
								našeho těla
							</h3>
							<p className="self-start mb-10"></p>
							<p className="font-montserrat-alternates text-xl mb-10">
								Bc. Silvie Krčmová
							</p>
							<div className="text-right">
								<p className="text-xl font-semibold mb-2 font-montserrat-alternates">
									150 Kč / 1 měsíc
								</p>
								<a
									href=""
									className="inline-block py-2 px-10 text-xl font-bold uppercase border-4 border-white rounded-tl-2xl rounded-br-2xl text-center hover:bg-white hover:text-wedgewood-700"
								>
									Zakoupit kurz
								</a>
							</div>
						</div>
					</div>
					<a href="" className="text-center mb-20">
						<p className="text-4xl text-black">
							<span className="font-sheenline-script font-normal  text-5xl md:text-6xl hover:underline">
								další kurzy
							</span>
							<span className="ml-5 md:ml-10 font-manrope text text-4xl">
								→
							</span>
						</p>
					</a>
				</div>
				<div className="bg-dust-storm-500 w-full overflow-hidden relative mb-20">
					<div className="relative z-10">
						<h2 className="absolute top-8 sm:top-12 md:top-12 xl:top-20 left-8 sm:left-20 font-montserrat-alternates text-3xl sm:text-4xl lg:text-5xl text-white w-1/3">
							reference
						</h2>
						<div className="flex justify-center items-center inline-block py-20 px-6 lg:p-0">
							<p className="quotation block">„</p>
							<p className="font-montserrat text-base md:text-lg xl:text-xl w-auto md:w-1/3 text-light mx-8">
								Moc Ti děkuji za cvičení, které jsi pro nás
								udělala. Hned po cvičení se mi zlepšila nálada.
								Moc mi to pomohlo, jsem ráda, že můžu cvičit
								doma..... Míla
							</p>
							<p className="quotation block">“</p>
						</div>
					</div>
					<div className="h-full w-1/4 absolute right-20 md:right-80 top-0 md:top-48">
						<Leaf fill="#c7b0b1" />
					</div>
				</div>
			</main>
			<footer className="flex flex-col items-center">
				<div className="w-full md:w-3/5 py-12 px-6 md:py-12 md:px-24 bg-wedgewood-500 rounded-tlbr-small overflow-hidden text-white relative mb-10 lg:mb-28">
					<div className="relative z-10">
						<h3 className="font-montserrat-alternates text-left text-3xl md:text-4xl mb-1">
							Přihlaste se k odběru novinek <br />a videolekcí
							zdarma.
						</h3>
						<p className="font-montserrat font-semibold mb-6">
							Na e-maily se můžete těšit zpravidla 1x měsíčně.
						</p>
						<form className="font-montserrat">
							<input
								type="email"
								placeholder="váš email"
								className="w-full lg:w-1/2 py-1 pl-10 text-xl lowercase text-black bg-white border-4 border-white rounded-tl-2xl rounded-br-2xl mb-6"
							/>
							<input
								className="block mx-auto md:mx-0 py-2 px-20 text-xl font-bold lowercase bg-transparent border-4 border-white rounded-tl-2xl rounded-br-2xl text-center hover:bg-white hover:text-wedgewood-500 cursor-pointer"
								type="submit"
								value="odeslat"
							/>
						</form>
					</div>

					<div className="h-full w-1/2 absolute -right-28 -top-72 hidden md:block">
						<Leaf fill="#3c5a71" className="" />
					</div>
				</div>
				<div className="w-4/5">
					<div className="flex flex-col lg:flex-row flex-wrap justify-between items-start font-montserrat mb-10 lg:mb-20">
						<div className="flex mb-6 self-center">
							<div>
								<Image
									className=""
									src="/images/logo.svg"
									alt="JN logo"
									width={50}
									height={50}
								/>
							</div>
							<div className="ml-6">
								<Image
									className=""
									src="/images/insta.svg"
									alt="Instagram logo"
									width={50}
									height={50}
								/>
							</div>
							<div className="ml-6">
								<Image
									className=""
									src="/images/FB.svg"
									alt="Facebook logo"
									width={50}
									height={50}
								/>
							</div>
						</div>
						<div className="mb-4">
							<p>Jolana Novotná</p>
							<p>Dukelská 1162</p>
							<p>Nový Bydžov 504 01</p>
						</div>
						<div className="font-semibold mb-4">
							<p>+420 604 782 666</p>
							<p>jolana@pilatesnovotna.cz</p>
						</div>
						<div className="mb-4">
							<p>IČ: 12348210</p>
							<p>číslo účtu: 878642511/0100</p>
						</div>
					</div>
					<p className="font-montserrat mb-20">
						© 2021 Jolana Novotná. Všechna práva vyhrazena.{" "}
					</p>
				</div>
			</footer>
		</div>
	)
}
