import Image from "next/image";
import topgradient from "../public/top-gradient.webp";
import centergradient from "../public/center-gradient.webp";
import desktop from "../public/desktop.webp";
import { ArrowRight } from "lucide-react";

export default function Home() {
	return (
		<div className="flex relative flex-col container mx-auto items-center gap-20">
			<Image
				src={topgradient}
				alt="top-gradient"
				className="absolute opacity-50 translate-y-[-15%]"
			/>
			<div className="rounded-l-full rounded-r-full justify-between flex items-center gap-3 mt-28 border-[1px] px-8 py-2 w-[450px]">
				<span className="text-white">Alpha release is finally here!</span>
				<div className="h-[1.5rem] w-[1px] bg-white" />
				<div className="flex items-center gap-2">
					<button>Read post</button>
					<ArrowRight strokeWidth={1} />
				</div>
			</div>
			<div className="flex flex-col justify-center gap-y-8">
				<h1 className="font-bold text-5xl text-center">
					One Explorer. All your files
				</h1>
				<p className="text-lg text-gray-500 text-center">
					Unify files from all your devices and clouds into a single,
					easy-to-use explorer. Designed for creators, hoarders and the
					painfully disorganized.
				</p>
			</div>
			<div className="flex flex-col gap-16">
				<div className="flex gap-6 justify-center">
					<a className="flex items-center justify-center">
						<div className="w-full rounded-md bg-gradient-to-tr  from-gray-800 via-gray-800 to-gray-400 p-[1px] opacity-80 hover:opacity-100">
							<div className="flex h-full w-full items-center justify-center bg-black back rounded-md  px-4 py-2 gap-x-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
									width="1rem"
									height="1rem"
									fill="currentColor"
								>
									<path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
								</svg>
								<h1 className="text-white text-sm">
									Download for macOS
								</h1>
							</div>
						</div>
					</a>
					<a className="flex  items-center justify-center cursor-pointer opacity-80 hover:opacity-100">
						<div className="w-full rounded-md bg-gradient-to-tr  from-gray-800 via-gray-800 to-gray-400 p-[1px]">
							<div className="flex h-full w-full items-center justify-center bg-black back rounded-md  px-4 py-2 gap-x-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="1em"
									height="1em"
									fill="currentColor"
								>
									<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
								</svg>
								<h1 className="text-white text-sm">Star on Github</h1>
							</div>
						</div>
					</a>
				</div>
				<div className="flex justify-center text-xs  gap-4 items-center ">
					<span className="text-gray-400">Alpha v0.1.2</span>
					<div className="w-[1px] h-[1rem] bg-gray-400" />
					<span className="text-gray-400">macOS 12+</span>
				</div>
				<div className="flex flex-col relative">
					<Image
						src={centergradient}
						alt="center-gradient"
						className="absolute translate-y-[-60%] -z-10"
					/>
					<div className="rounded-2xl border-1">
						<Image
							src={desktop}
							alt="desktop-image"
							className="rounded-2xl shadow-lg shadow-slate-800"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
