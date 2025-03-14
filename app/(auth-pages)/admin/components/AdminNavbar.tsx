"use client";
import UserInfo from "@/app/(auth-pages)/admin/components/UserInfo";
import Image from "next/image";

const AdminNavbar = () => {
	return (
		<header className="bg-gray-600 flex flex-col items-center justify-center py-12">
			<a
				className="flex items-center justify-center relative w-48 h-full"
				href="https://www.sataadiarra.fr/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					className="contrast-150"
					src="/logo/logo.png"
					alt="Logo"
					width={200}
					height={100}
				/>
			</a>
			<h1 className="text-2xl font-bold text-white text-center">
				Interface administratrice
			</h1>
			<UserInfo />
		</header>
	);
};

export default AdminNavbar;
