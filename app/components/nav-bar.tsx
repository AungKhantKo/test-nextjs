import Link from "next/link";

export default function NavBar(){
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">Index</Link>
                    <Link href="/home">Home</Link>
                </li>
            </ul>
        </div>
    )
}