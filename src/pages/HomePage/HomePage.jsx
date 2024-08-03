import useAuth from "../../hooks/useAuth";

export default function HomePage() {
    const auth = useAuth();
    return (
        <>
            {auth.user ? (
                <>
                    <p>Email:{auth.user.email}</p>
                    <p>Role:{auth.user.role}</p>
                    <p>
                        isActivated: {auth.user.isActivated ? "true" : "false"}
                    </p>
                </>
            ) : "UnAuthorized"}
        </>
    );
}
