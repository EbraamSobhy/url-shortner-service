'use client'
import { useState } from "react";
import "./globals.css";

export default function Home() {
    const [url, setUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("");

    async function shortURL(e) {
        e.preventDefault();
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
        if (response.ok) {
            const data = await response.text();
            setShortenedUrl(data);
        }
        else {
            alert("Error shortening URL");
        }
    }
    return (
    <div class="container">
        <main>
            <h1>URL Shortener</h1>
            <form onSubmit={shortURL}>
                <input
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)} 
                />
                <button type="submit">Shorten</button>
            </form>
            {shortenedUrl && (
                <div>
                    <p>Shortened URL:</p>
                    <a href={shortenedUrl} target="_blank" rel="">
                    {shortenedUrl}
                    </a>
                </div>
            )}
        </main>
    </div>
    );
}