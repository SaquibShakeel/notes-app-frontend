import { Link } from "react-router-dom";

const Public = () => {
    return (
        <section className="public_section">
            <header className="public_header">
                <h1>Notes App</h1>
            </header>
            <main className="public_main">
                <p>
                    This is a simple notes app. You can create, edit, and delete
                    notes. You can also share notes with other users.
                </p>
                <p>
                    You can also assign tasks to any user as admin or manager role.
                </p>
                <p>
                    <Link to="/login">Login</Link> to your account, or ask the admin to create an account for you (only admin can create new users).
                </p>
            </main>
            <footer className="public_footer">
                <button><Link to="/login">Login</Link></button>
            </footer>
        </section>
    );
}

export default Public;