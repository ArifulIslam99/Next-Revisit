import Link from "next/link";

export default function Product() {
    return <h1><Link href={'/products/1'}>Product Details of page 1</Link></h1>
}