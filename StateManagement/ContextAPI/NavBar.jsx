import { useContext } from "react";
import { UserContext } from "./UserContext";

function Navbar() {

    const { user } = useContext(UserContext);

    console.log("Navbar Render");

    return (
        <h2>
            Welcome {user.name}
        </h2>
    );
}

export default Navbar;