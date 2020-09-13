import React, {useState} from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import {FaLinkedin, FaTwitterSquare, FaGithubSquare} from "react-icons/fa";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar color="" dark expand="md">
			<NavbarBrand className="text-white font-weight-bolder" href="/">
				React Google Map
			</NavbarBrand>
			<NavbarToggler onClick={toggle}/>
			<Collapse isOpen={isOpen} navbar>
				<Nav className="ml-auto" navbar>
					<NavItem className="px-3 d-flex justify-content-center align-items-center">
						<NavLink href="https://in.linkedin.com/in/avani-bataviya-500225157"
										 target="_blank" rel="noopener noreferrer"
										 className="text-white font-weight-bolder">
							<FaLinkedin title="LinkedIn" size="1.5rem"/>
						</NavLink>
						<NavLink href="https://twitter.com/avanibataviya"
										 target="_blank" rel="noopener noreferrer"
										 className="text-white font-weight-bolde">
							<FaTwitterSquare title="Twitter" size="1.5rem"/>
						</NavLink>
						<NavLink href="https://github.com/AvaniBataviya"
										 target="_blank" rel="noopener noreferrer"
										 className="text-white font-weight-bolde">
							<FaGithubSquare title="Github" size="1.5rem"/>
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;
