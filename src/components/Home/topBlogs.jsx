// components/TopBlogs.js
import React from 'react';
import { Button } from '../ui/button';
import { blogs } from '@/lib/blogs';
import Link from 'next/link';

const TopBlogs = () => {
    // Get the three blog posts for display
    const topBlogs = blogs.slice(0, 3);

    return (
        <div className='flex flex-col items-center justify-center my-10 mx-4'>
            <div>
                <h1 className='font-bold text-5xl mb-6'>Top Blogs</h1>
            </div>
            <div className="items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
                {topBlogs.map((blog) => (
                    <div key={blog.id} className="bg-card rounded-lg shadow-lg p-6 w-full my-20 transition-transform transform hover:shadow-2xl hover:scale-105">
                        <img src={blog.imageUrl} alt={blog.title} className="rounded-lg mb-4 aspect-video object-cover" />
                        <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                        <p className="text-md mb-4 line-clamp-2">{blog.excerpt}</p>
                        <div className='flex justify-between items-center'>
                            <Button asChild>
                                <Link href={`/blogs/${blog.id}`}>Read More</Link>
                            </Button>
                            <span className="text-muted-foreground">{blog.readTime} read</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopBlogs;