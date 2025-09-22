import Link from "next/link";

export default function HubLink({ linkText = "Go Back" }) {
    return (
        <Link
            href="/travel"
            className="btn-link mx-auto md:text-xl w-auto text-center"
        >
            {linkText}
        </Link>
    );
}
