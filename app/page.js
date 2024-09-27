import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p><Link href = "../week-2/" className="underline">Week 2 assignment</Link></p>
      <p><Link href = "../week-3/" className="underline">Week 3 assignment</Link></p>
    </main>
  );
}
