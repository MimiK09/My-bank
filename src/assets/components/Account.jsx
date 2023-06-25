import Button from "./Button";

const Account = (props) => {
	return (
		<div className="account">
			<div
				className="big-line"
				style={{ backgroundColor: `${props.account.color}` }}
			>
				<p>{props.account.name}</p>
				<p className="amount">{props.account.balance}€</p>
			</div>
			<div className="liste-button">
				<div className="liste-operations">
					{props.account.operations.map((element) => {
						return (
							<div className="line" key={element.date + element.description}>
								<p>{element.date}</p>
								<p>{element.description}</p>
								<p className="amount">{element.amount}€</p>
							</div>
						);
					})}
				</div>
				<Button />
			</div>
		</div>
	);
};

export default Account;
