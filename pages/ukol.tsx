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
					className="flex flex-col md:flex-row md:justify-start items-end w-11/12 font-montserrat-alternates font-bold text-white mx-auto mb-10 md:mb-24"
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
				
				<div className="w-full md:w-11/12 flex p-10 md:p-24 bg-wedgewood-500 rounded-tlbr-half mx-auto overflow-hidden relative">
					<div className="w-full lg:w-2/5 font-montserrat text-white">
						<h3 className="font-montserrat-alternates text-left text-4xl sm:text-6xl text-white mb-5 md:mb-7 leading-6">
							<span className="font-sheenline-script text-black text-5xl sm:text-8xl">
								co je
							</span>
							<br />
							Pohybotéka
						</h3>

						<hr className="w-7 border-1 mb-8 md:mb-10" />
						
						<p className="mb-6">
							Cvičební videa, rady a návody pro zdraví celého těla a Jolanou Novotnou a dalšími specialistkami.
						</p>
						<p className="mb-6">
							V pohybotéce najdete online lekce, které vás vedou k
							sobě. Mým záměrem není, abyste cviky kopírovaly a
							dělaly, co říkám. Mým záměrem je, abyste samy sobě
							naslouchaly a vycházely z toho, co vám vaše tělo
							říká. Jen vás provázím a dávám podněty k všímavosti, prozkoumávání a k výběru.
						</p>
						<p className="mb-8 md:mb-16">
							{" "}
							Vytvářím pro vás prostor a dopřávám vám čas se na sebe naladit a získat z vašeho těla ty pravé zprávy, které přináší klid, pohodu a zdraví do vašeho těla i mysli.{" "}
						</p>
					</div>
					<div className="w-3/5 h-full relative hidden lg:block">
						<Flower
							className="absolute left-20 top-12"
							fill="#2b4863"
						/>
					</div>
				</div>
			</header>


			<main className="w-full">
				<div className="font-montserrat w-full md:w-11/12 mx-auto mb-8 sm:mb-20">
					<h2 className="font-montserrat text-left text-4xl sm:text-6xl text-black mb-4 sm:mb-8 ml-6 sm:ml-24">
						Co je{" "}
						<span className="font-sheenline-script text-6xl sm:text-8xl">
							obsahem
						</span>
						<br />
						Pohybotéky
					</h2>

					<hr className=" w-7 border-black mb-8 md:mb-10 ml-6 sm:ml-24" />

					<div className="felx flex-col mx-6 sm:mx-24">
						<div className="w-full md:w-2/3 lg:w-1/2 ">
							<p className="mb-3">
								40 cvičebních videí, ve kterých vedu k funkčnosti a ideálního propojení pánevního dna s HSS
							</p>
							<p className="mb-3">
								20 krátkých 5 minutových videí pro zacvičení se během dne
							</p>
							<p className="mb-3">
								1,5 h přednáška Pánevní dno jako nové + cvičební lekce pro zdravé a funkční pánevní dno, ketré jsem pro vás natočila
							</p>
							<p className="mb-3">
								1,5 h přednáška Jizvy a souvisloti v těle s fyzioterapeutkou Silvií Krčmovou
							</p>
							<p className="mb-10">
								a další rozhovory
							</p>
						</div>
						
							
						<div className="relative flex flex-col md:flex-row text-sm">
							<div className=" w-full md:w-1/2    mr-0 md:mr-8  mb-10 md:mb-0 ">
								<p className="mb-3">
								Mým záměrem je,natáčet další lekce, takové, které spolu cvičíme v tělocvičně, ale kratší, nebo i výukové, abyste si mohli každý denn zacvičit i když budete mít méně času. Budete si moci osvěžit základy, případně se víc věnovat nějaké své oblíbenné části těla. Více o projektu zde: VIZE online lekcí.
								</p>
								<p className="mb-3">
								Pokud budete chtít pokračovat a prodlužovat si možnosti využívat dál neomezeně veškerý obsah v dalším období, jednoduše si objednáte znovu.
								</p>

								<p>Lekce tvořím s láskou, úsměvem a radostí</p>

								
									
								
							</div>
							<div className="w-full md:w-1/2   ">
								<p className="mb-3">Zasložla jsem pohybotéku proto, abych přinesla pohyb  vlastním tělem poznání o tobě. <br/>
								Do některých lekcí vkládám témata k zamyšlení nad danou částí těla, kterou zrovna pohybujeme.
								</p>

								<p>
									Protože pohyb je život a změna je pohyb. Nebo Život je pohyb a pohyb je změna ?
								</p>
							</div>
						</div>
					</div>
				</div>


				<div className="bg-dust-storm-500 w-full mx-auto mb-14 sm:mb-25 py-16">

					<div className=" font-montserrat md:w-11/12 mx-auto relative ">

						<h2 className="font-montserrat-alternates text-3xl sm:text-4xl lg:text-5xl  text-white  mb-4 sm:mb-8  ml-6 sm:ml-24 leading-8">
							Jak to bude v 
							<br/>
							lekcích vypadat
						</h2>

						<hr className=" w-7 border-white mb-8 md:mb-10 ml-6 sm:ml-24" />
						
						<div className="flex flex-col md:flex-row mx-6 pb-16 sm:mx-24">
							<p className="w-full md:w-1/2 md:mr-8  mb-10 md:mb-0">
								Především budeme cvičit, pohybovat se. 
								Budeme se spolu potkávat na ZOOMu. Každá lekce bude sestavena z jednoduchých cviků, které na závěr každé lekce připojíme do chůze a vy tím získáte okamžitou zkušenost, kterou vložíte do každé své procházky.
								<br/>
								<br/>
								Každou lekci hned budete moci začlenit do každodenní praxe ať už jen při přecházení po bytě, po schodech nebo venku při procházkách.
							</p>

							<p className="w-full md:w-1/2 mb-10 flex flex-col items-end">
								Tím budete ze získaných informací dělat nový zvyk, který se stane vaší součástí a časem i vaší přirozeností. Opakováním se z toho stane automatizmus, který se bude dít sám. 
								A to miluju, jemně, zlehka, smysluplně se o sebe starat, tak aby mi to zabralo co nejméně času a navíc to byla zábava. Miluju chůzi a procházky.
								<span className="absolute bottom-0 right-0 text-center border-2 border-white uppercase text-white text-lg lg:text-xl font-medium mr-6 sm:mr-24 py-1 px-2 sm:px-6 mt-12  rounded-tl-xl rounded-br-xl">
									<a href="">shlédnout lekci zdarma</a> 
								</span>
							</p>
							
						</div>
					</div>
				</div>
			</main>









			<footer className="flex flex-col items-center">
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
