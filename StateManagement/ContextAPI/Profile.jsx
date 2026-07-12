import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {

    const { user, setUser } = useContext(UserContext);

    console.log("Profile Render");

    function changeName() {
        setUser({
            ...user,
            name: "Kartig"
        });
    }

    return (
        <button onClick={changeName}>
            Change Name
        </button>
    );
}

export default Profile;