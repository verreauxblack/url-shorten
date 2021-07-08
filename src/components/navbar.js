const navbar = () => {
    return (
        <nav className="navBar">
            <div className="logo">
                <h1>Shortly</h1>
            </div>
            <ul className="outerList">
                <li className="items">
                    <ul className="innerList1">
                        <li className="innerItems">
                            Features
                        </li>
                        <li className="innerItems">
                            Pricing
                        </li>
                        <li className="innerItems">
                            Resources
                        </li>
                    </ul>
                </li>
                <li className="items">
                    <ul className="innerList2">
                        <li className="innerItems">
                            Login
                        </li>
                        <li className="innerItems button">
                            Sign Up
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default navbar
