import Link from "next/link";

export default async function PostPage({ params }) {
    const { id } = params;

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            next: { revalidate: 60 },
            cache: "default",
        });

        if (!res.ok) throw new Error("Post no encontrado");

        const post = await res.json();

        return (
            <main className="post-wrapper">
                <article className="post-content">
                    <h1 className="post-title">{post.title}</h1>
                    <p className="post-body">{post.body}</p>
                    <Link href="/posts" className="post-link">← Volver a los posteos</Link>
                </article>
            </main>
        );
    } catch {
        return (
            <main className="post-wrapper">
                <article className="post-content">
                    <h1 className="post-title text-red-500">📭 Post no encontrado</h1>
                    <Link href="/posts" className="post-link">← Volver a los posteos</Link>
                </article>
            </main>
        );
    }
}