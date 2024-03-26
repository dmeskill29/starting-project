import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
      <Link href="/about">About</Link>
      <Link href="/community">Community</Link>
      <Link href="/meals">Meals</Link>
      <Link href="/meals/share">Share</Link>
    </div>
  );
}
