import Link from "next/link";


export default function StudentInfo() {
    return (
        <main>
            <p>My Name: Michael Liang</p>
            <Link href="https://github.com/zi-michael-liang/cprg306-assignments/" className = "underline to-blue-400">Link to my Github repo</Link>
        </main>
    )
}