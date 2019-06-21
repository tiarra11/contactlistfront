import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
export class Demo extends React.Component {
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								<form>
									<div className="form-group">
										<label htmlFor="exampleInputEmail1">Email address</label>
										<input
											type="email"
											className="form-control"
											name="username"
											id="username"
											aria-describedby="emailHelp"
											placeholder="Enter email"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="exampleInputEmail1">username</label>
										<input
											type="email"
											className="form-control"
											name="email"
											id="username"
											email
											aria-describedby="uemailelp"
											placeholder="Enter username"
										/>
									</div>
								</form>
								<button
									onClick={() =>
										actions.addPerson(
											document.querySelector("[name=username]").value,
											document.querySelector("[name=email]").value
										)
									}
									className="btn btn-primary">
									Add Person
								</button>
							</div>
						);
					}}
				</Context.Consumer>
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.person.map((item, index) => {
								return (
									<li key={index} className="list-group-item d-flex justify-content-between">
										<Link to={"/single/" + index}>
											<span>Username: {item.username}</span>
										</Link>
										<p>{item.username}</p>
										<p>email: {item.email}</p>
										<button
											onClick={() =>
												actions.addPerson(
													document.querySelector("[name=username]").value,
													document.querySelector("[name=email]").value
												)
											}
											className="btn btn-primary">
											Add Person
										</button>
									</li>
								);
							});
						}}
					</Context.Consumer>
				</ul>
				<br />
			</div>
		);
	}
}
