import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>Hello next.js</h1>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
      </ul>
    </div>
  );
}
