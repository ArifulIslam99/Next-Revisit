"use client";
import { useRouter } from "next/navigation";
export default function Blog() {
    const router = useRouter();
    const backToProvious = () => {
        router.back();
    }
    return <div>
        <h2>My Blog</h2>

        <button onClick={backToProvious}>Go Back</button>
    </div>
}