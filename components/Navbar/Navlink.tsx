"use client";

//     This file is part of Cosmic Reach Mod Manager.
//
//    Cosmic Reach Mod Manager is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
//
//    Cosmic Reach Mod Manager is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
//
//   You should have received a copy of the GNU General Public License along with Cosmic Reach Mod Manager. If not, see <https://www.gnu.org/licenses/>.

import { StoreContext } from "@/contexts/StoreContext";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
	classNames?: {
		link: string;
	};
	isDisabled?: boolean;
	tabIndex?: number;
	closeNavMenuOnLinkClick?: boolean;
}

const Navlink = ({ children, href, className }: NavLinkProps) => {
	const pathname = usePathname();
	let isActive = pathname === href;
	if (href === "/") {
		if (pathname === "/") isActive = true;
		else isActive = false;
	}

	return (
		<Link
			href={href}
			className={cn("navlink_text rounded-lg decoration-foreground/80 dark:decoration-foreground_dark/80", className)}
			data-active={isActive}
		>
			{children}
		</Link>
	);
};

export default Navlink;

export function NavMenuLink({
	href,
	children,
	className,
	classNames,
	isDisabled = false,
	tabIndex,
	closeNavMenuOnLinkClick = true,
}: NavLinkProps) {
	const { toggleNavMenu } = useContext(StoreContext);

	const pathname = usePathname();
	let isActive = pathname === href;
	if (href === "/") {
		if (pathname === "/") isActive = true;
		else isActive = false;
	}

	const CloseNavMenu = () => {
		toggleNavMenu(false);
	};

	return (
		<li
			key={`${href}`}
			className={cn("group w-full flex items-center justify-center rounded-lg link_bg_transition", className)}
		>
			<Link
				className={cn("w-full h-full flex items-center justify-center navlink_text", classNames?.link)}
				color={"foreground"}
				href={href}
				data-active={isActive}
				onClick={() => {
					if (closeNavMenuOnLinkClick === true) {
						CloseNavMenu();
					}
				}}
				aria-disabled={isDisabled}
				tabIndex={tabIndex || isDisabled ? -1 : 0}
			>
				{children}
			</Link>
		</li>
	);
}
