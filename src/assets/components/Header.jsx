import User from "./User";
import Logo from "./Logo";


const Header = (props) => {
	return (
		<header>
            <div className="element-header">
        <Logo />
        <User userName={props.userName}/>
</div>
		</header>
	);
};

export default Header;