import Account from "./Account";

const Accounts = (props) => {
	return (
		<main>
			<div className="element-main">
				{props.accounts.map((element) => {
					return <Account account={element} key={element.name} />;
				})}
			</div>
		</main>
	);
};

export default Accounts;
