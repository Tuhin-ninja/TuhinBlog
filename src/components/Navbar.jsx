import Link from 'next/link';
import { Button } from './ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './theme-btn';


//backdrop-blur is for making glassy effects. 



const Navbar = () => {
    return (
        <nav className="bg-background/50 p-4 sticky top-0 px-8 backdrop-blur z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className=" text-xl font-bold ">
                    TuhinBlog
                </div>
                <div className="hidden md:flex items-center  space-x-4 ">
                    <div className='my-2'>
                        <Link href="/" className=" hover:text-gray-300 mx-2">Home</Link>
                        <Link href="/about" className=" hover:text-gray-300 mx-2">About</Link>
                        <Link href="/blogs" className=" hover:text-gray-300 mx-2">Blogs</Link>
                        <Link href="/contact" className=" hover:text-gray-300 mx-2">Contact</Link>
                    </div>
                    <Button asChild>
                        <Link href="/login">Login</Link>
                    </Button>

                    <Button asChild>
                        <Link href="/signUp">SignUp</Link>
                    </Button>
                    <ModeToggle />

                </div>
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </SheetTrigger>
                        <SheetContent className='bg-gray-900 text-white flex flex-col h-full'>
                            <SheetHeader className='text-center'>
                                <SheetTitle className='font-bold text-xl my-4'>TuhinBlog</SheetTitle>
                                <SheetDescription className='flex flex-col items-center'>
                                    <Link href="/" className="hover:text-gray-300 mx-2">Home</Link>
                                    <Link href="/about" className="hover:text-gray-300 mx-2">About</Link>
                                    <Link href="/blogs" className="hover:text-gray-300 mx-2">Blogs</Link>
                                    <Link href="/contact" className="hover:text-gray-300 mx-2">Contact</Link>
                                    <div className='flex items-center mx-2'>
                                        <Button asChild>
                                            <Link href="/login">Login</Link>
                                        </Button>

                                        <Button asChild>
                                            <Link href="/signUp">SignUp</Link>
                                        </Button>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>

            </div>
        </nav>
    );
};


export default Navbar; 