import { StrictMode } from "react";
import Link from "next/link";
export default function Home() {
    return (
        <StrictMode>
            <Link href="./todo/">TODOページへ</Link>
        </StrictMode>
    );
}
