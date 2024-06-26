"use client";

//     This file is part of Cosmic Reach Mod Manager.
//
//    Cosmic Reach Mod Manager is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
//
//    Cosmic Reach Mod Manager is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
//
//   You should have received a copy of the GNU General Public License along with Cosmic Reach Mod Manager. If not, see <https://www.gnu.org/licenses/>.

import { title } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function ErrorPage({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="w-full min-h-[100vh] flex flex-col items-center justify-center gap-6">
			<h1 className={`${title()} w-full flex items-center justify-center text-center`}>Uh oh! Something went wrong.</h1>
			<p className="text-xl text-[var(--regular-secondary-text)] max-w-xl flex items-center justify-center text-center">
				Sorry about that. We'll work to get it fixed. In the meantime,
				<br /> you can try refreshing the page.
			</p>
			<Button size="lg" className="mt-4" onClick={reset} aria-label="Retry">
				<p className="px-8 text-xl">Retry</p>
			</Button>
		</div>
	);
}
