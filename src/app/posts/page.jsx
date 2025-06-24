import Link from 'next/link';

export default async function PostsPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: { revalidate: 60 },
        cache: "default",
    });
    const posts = await res.json();

    return (
        <div className="posts-list-container">
            <h1 className="posts-list-title">📋 Publicaciones recientes</h1>
            <ul className="posts-list-style">
                {posts.slice(0, 15).map((post) => (
                    <li key={post.id} className="post-list-item">
                        <Link href={`/posts/${post.id}`} className="post-list-link">
                            <span className="post-id">#{post.id.toString().padStart(3, '0')}</span>
                            <h2 className="post-list-title">{post.title}</h2>
                            <svg
                                className="post-arrow-icon"
                                viewBox="0 0 16 16"
                                fill="#00ffff"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M8 6L8 2L10 2L16 8L10 14L8 14L8 10L0 10L0 6L8 6Z" />
                            </svg>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}