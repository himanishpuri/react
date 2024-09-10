import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./components/AuthLayout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import AllPosts from "./pages/AllPost.jsx";
import AddPost from "./pages/AddPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Post from "./pages/Post.jsx";
import { Header } from "./components/index.js";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Header />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: (
					<AuthLayout authentication={false}>
						<Login />
					</AuthLayout>
				),
			},
			{
				path: "/signup",
				element: (
					<AuthLayout authentication={false}>
						<SignUp />
					</AuthLayout>
				),
			},
			{
				path: "/all-posts",
				element: (
					<AuthLayout authentication>
						{" "}
						<AllPosts />
					</AuthLayout>
				),
			},
			{
				path: "/add-post",
				element: (
					<AuthLayout authentication>
						{" "}
						<AddPost />
					</AuthLayout>
				),
			},
			{
				path: "/edit-post/:slug",
				element: (
					<AuthLayout authentication>
						{" "}
						<EditPost />
					</AuthLayout>
				),
			},
			{
				path: "/post/:slug",
				element: <Post />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
