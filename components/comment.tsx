"use client";
import { useState } from 'react';

export default function CommentSection() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <main className='flex flex-col items-center justify-center'>
      <div className='w-[85%] border-dotted border-black border-2 p-8 md:p-4 flex flex-col items-center'>
        <h2 className='text-center text-xl font-semibold mb-4'>Comments</h2>
        <hr className='w-full border-t-2 border-black mb-4' />

        <ul className='list-disc list-inside mb-4 w-full'>
          {comments.map((comment, index) => (
            <li key={index} className='mb-2'>{comment}</li>
          ))}
        </ul>

        <div className='flex w-full items-center justify-center space-x-2'>
          <input
            className='flex-grow border rounded px-3 py-2'
            type="text"
            placeholder="Add a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className='bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition-colors'
            onClick={handleAddComment}
          >
            Add Comment
          </button>
        </div>
      </div>
    </main>
  );
}


