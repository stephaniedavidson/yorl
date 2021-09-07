import Link from "next/link";

const Nav = () => {
    return (
        <nav>
            <h1>Yorl.org</h1>
            <ul>
                <li>
                    <Link href="/add">Add bookmark</Link>
                </li>
                <li>
                    <Link href="/signout">Sign out</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
