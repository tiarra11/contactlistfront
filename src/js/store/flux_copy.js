const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			person: []
		},
		actions: {
			addPerson: (username, email) => {
				const store = getStore();
				fetch("https://3000-ad9de871-db62-4719-a2f9-96de00c96e3f.ws-us0.gitpod.io/person", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						username: username,
						email: email
					})

				}).then(getDataUpdated => {
					fetch("https://3000-ad9de871-db62-4719-a2f9-96de00c96e3f.ws-us0.gitpod.io/person")
						.then(response => response.json())
						.then(data => {
							store.person = data;
							setStore({ store });
						});
				});
			},

                deleteperson: (id) => {
                    const store = getStore();
				fetch("https://3000-ad9de871-db62-4719-a2f9-96de00c96e3f.ws-us0.gitpod.io/person", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						username: username,
						email: email
					}),
                }). then(getDataUpdated => {
					fetch("https://3000-ad9de871-db62-4719-a2f9-96de00c96e3f.ws-us0.gitpod.io/person")
						.then(response => response.json())
						.then(data => {
							store.person = data;
							setStore({ store });
						});
                }




		}
	};
};
export default getState;
