import { useContext } from "react";
import { UserContext } from "./UserContext";

function Email() {

    const { user } = useContext(UserContext);

    console.log("Email Render");

    return (
        <h2>
            {user.email}
        </h2>
    );
}

export default Email;