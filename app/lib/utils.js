const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";


export async function getTubeData() {
    const res = await fetch(`${baseUrl}/api/tube-status`);

    if (!res.ok) {
        throw new Error("Failed to fetch tube status");
    }

    return res.json();
}