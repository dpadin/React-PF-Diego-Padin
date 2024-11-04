import CartWidget from "../CartWidget/CartWidget";

export default function () {
    return (

        <div className="NavBarContainer">

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Tienda Online</a>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Phones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tablets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Laptops</a>
                        </li>
                        
                        <CartWidget ammount="2"/>
                    </ul>

                </div>
            </div>

        </nav>
        </div>

    )
}