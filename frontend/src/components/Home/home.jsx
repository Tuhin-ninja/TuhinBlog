// components/BlogHomePage.js

const BlogHomePage = () => {
    return (
        <div className="grid grid-cols-2 gap-4 p-4 m-4">
            <div className="container mx-auto">
                <h1 className="text-6xl font-bold mb-10">
                    Welcome to The Greatest Blog, <br />
                    <div className="my-4">
                        <span className="text-white bg-cyan-300 px-2">TuhinBlog!!</span>
                    </div>
                </h1>
                <p>
                    Starting a blog can be a daunting task, 
                    especially if you want to capture the attention of readers. 
                    You need to make a lasting impression, and one powerful way to do that is with an extraordinary custom blog home page design.
                </p>
            </div>
            <div className="flex items-center">
                <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2" alt="bangla"
                    className="rounded-lg h-auto" />
            </div>
        </div>
    );
};

export default BlogHomePage;
