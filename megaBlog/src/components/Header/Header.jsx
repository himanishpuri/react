import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
	// const authStatus = useSelector((state) => state.auth.status);
	const navigate = useNavigate();

	const navItems = [
		{
			name: "Home",
			slug: "/",
			active: true,
		},
		{
			name: "Login",
			slug: "/login",
			active: !true,
		},
		{
			name: "Signup",
			slug: "/signup",
			active: !true,
		},
		{
			name: "All Posts",
			slug: "/all-posts",
			active: true,
		},
		{
			name: "Add Post",
			slug: "/add-post",
			active: true,
		},
	];

	return (
		<header className="py-3 shadow bg-gray-500">
			<Container>
				<nav className="flex">
					<div className="mr-4">
						<Link to="/">
							<Logo width="70px" />
						</Link>
					</div>
					<ul className="flex ml-auto">
						{navItems.map((val) =>
							val.active ? (
								<li key={val.name}>
									<button
										onClick={() => navigate(val.slug)}
										className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
									>
										{val.name}
									</button>
								</li>
							) : null,
						)}
						{true && (
							<li>
								<LogoutBtn />
							</li>
						)}
					</ul>
				</nav>
			</Container>
		</header>
	);
}

export default Header;
