import React from 'react';
import Badge from './Badge';
import Authors from './Authors';
import ReactMarkdown from 'react-markdown';

function Article({ date, title, content, author, version }) {
  return (
    <article className="md:flex">
      <h2 className="content-date h-full mt-1 mr-10 text-sm text-gray-500">
        <a href={`#${date}`}>{date}</a>
      </h2>
      <div className="content-block ml-2"> {/* Added margin-left */}
        <div className="feed-border"></div>
        <div className="feed-dot"></div>
        <span className="mr-2"> {/* Added margin-right */}
        <Badge label={`v ${version}`} className="absolute -top-6 right-0 md:static mb-4" />
        </span>
        {title && <h1 className="text-xl sm:text-3xl font-bold mt-3 mb-4">{title}</h1>}
        <div className="max-w-screen-md">
            {content && <ReactMarkdown>{content}</ReactMarkdown>}
        </div>
        {author && <Authors author={author} />}
      </div>
    </article>
  );
}

export default Article;
