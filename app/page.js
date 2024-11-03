import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p><Link href = "../week-2/" className="underline">Week 2 assignment</Link></p>
      <p><Link href = "../week-3/" className="underline">Week 3 assignment</Link></p>
      <p><Link href = "../week-4/" className="underline">Week 4 assignment</Link></p>
      <p><Link href = "../week-5/" className="underline">Week 5 assignment</Link></p>
      <p><Link href = "../week-6/" className="underline">Week 6 assignment</Link></p>
      <p><Link href = "../week-7/" className="underline">Week 7 assignment</Link></p>
      <p><Link href = "../week-8/" className="underline">Week 8 assignment</Link></p>
    </main>
  );
}
