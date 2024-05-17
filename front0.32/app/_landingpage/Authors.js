import React from 'react';

function Authors({ authors }) {
  return (
    <div className="flex -space-x-2 relative z-0 overflow-hidden mt-6">
      {authors.map((author, i) => (
        <img
          key={i}
          className="relative inline-block h-8 w-8 rounded-full ring-2 ring-white"
          style={{ zIndex: authors.length - i }}
          src={author.avatar}
          alt=""
        />
      ))}
    </div>
  );
}

export default Authors;
