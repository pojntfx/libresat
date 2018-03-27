import Link from "next/link";

export const BlogPostPreview = ({ title, date, authors, link, intro }) => (
  <div>
    <aside>
      <Link href={`/blog/${link}`}>
        <h2>{title}</h2>
      </Link>
      <div>
        {date} by {authors}
      </div>
    </aside>
    <div>
      {intro}
      <Link href={`/blog/${link}`}>
        <a>Read more</a>
      </Link>
    </div>
  </div>
);
