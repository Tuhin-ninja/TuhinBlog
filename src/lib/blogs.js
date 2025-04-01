export const blogs = [
  {
    id: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js",
    content: "Next.js is a powerful React framework that enables features such as server-side rendering, static site generation, and more. In this blog post, we'll explore the basics of setting up a Next.js project and understanding its core concepts.\n\nNext.js simplifies the development of React applications by providing a structured framework with built-in features like routing, image optimization, and API routes. It's designed to be both developer-friendly and production-ready, making it an excellent choice for projects of all sizes.\n\nTo get started with Next.js, you'll need to have Node.js installed on your machine. Then, you can create a new project using the following command:\n\n```bash\nnpx create-next-app@latest my-next-app\n```\n\nThis will set up a new Next.js project with all the necessary configurations and dependencies.",
    author: "Tuhin",
    date: "April 1, 2024",
    readTime: "5 min",
    category: "Web Development",
    tags: ["Next.js", "React", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    comments: [
      {
        id: 1,
        author: "Sarah Johnson",
        avatarUrl: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=random",
        date: "April 3, 2024",
        content: "This is a great introduction to Next.js! I've been wanting to try it out for a while, and this post gave me the push I needed to get started.",
        reactions: {
          like: 5,
          love: 2,
          laugh: 0
        },
        replies: [
          {
            id: 101,
            author: "Tuhin",
            avatarUrl: "https://ui-avatars.com/api/?name=Tuhin&background=random",
            date: "April 3, 2024",
            content: "Thanks, Sarah! I'm glad you found it helpful. Let me know if you have any questions as you dive into Next.js.",
            reactions: {
              like: 2,
              love: 0,
              laugh: 0
            }
          },
          {
            id: 102,
            author: "John Doe",
            avatarUrl: "https://ui-avatars.com/api/?name=John+Doe&background=random",
            date: "April 4, 2024",
            content: "I started using Next.js last month and it's been a game changer for my productivity!",
            reactions: {
              like: 3,
              love: 1,
              laugh: 0
            }
          }
        ]
      },
      {
        id: 2,
        author: "Michael Chen",
        avatarUrl: "https://ui-avatars.com/api/?name=Michael+Chen&background=random",
        date: "April 5, 2024",
        content: "I've been using Next.js for about a year now, and it's completely changed how I build web applications. The built-in routing and image optimization are game-changers!",
        reactions: {
          like: 8,
          love: 3,
          laugh: 1
        },
        replies: []
      }
    ]
  },
  {
    id: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS",
    excerpt: "A comprehensive guide to using Tailwind CSS effectively",
    content: "Tailwind CSS has revolutionized the way developers approach styling in web applications. Instead of writing custom CSS, Tailwind provides a set of utility classes that can be composed to build any design directly in your markup.\n\nOne of the biggest advantages of Tailwind is its utility-first approach. Instead of pre-designed components, Tailwind gives you low-level utility classes that let you build completely custom designs without ever leaving your HTML.\n\nTo start using Tailwind CSS in your project, you'll first need to install it:\n\n```bash\nnpm install -D tailwindcss\nnpx tailwindcss init\n```\n\nThen configure your template paths in tailwind.config.js and add the Tailwind directives to your CSS. From there, you can start using utility classes in your HTML to style your components.",
    author: "Tuhin",
    date: "April 5, 2024",
    readTime: "7 min",
    category: "CSS",
    tags: ["Tailwind CSS", "CSS", "Web Design"],
    imageUrl: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=1000&auto=format&fit=crop",
    comments: [
      {
        id: 1,
        author: "Emily Rodriguez",
        avatarUrl: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=random",
        date: "April 7, 2024",
        content: "Tailwind has completely changed how I approach CSS. The utility-first approach was a bit overwhelming at first, but now I can't imagine working without it!",
        reactions: {
          like: 7,
          love: 4,
          laugh: 0
        },
        replies: [
          {
            id: 101,
            author: "David Kim",
            avatarUrl: "https://ui-avatars.com/api/?name=David+Kim&background=random",
            date: "April 7, 2024",
            content: "I felt the same way! After the initial learning curve, I'm now way more productive with Tailwind than with traditional CSS.",
            reactions: {
              like: 2,
              love: 1,
              laugh: 0
            },
            replies: [
              {
                id: 1001,
                author: "Emily Rodriguez",
                avatarUrl: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=random",
                date: "April 7, 2024",
                content: "Exactly! And the fact that everything is in the HTML makes it so much easier to understand what's going on at a glance.",
                reactions: {
                  like: 1,
                  love: 0,
                  laugh: 0
                }
              }
            ]
          }
        ]
      },
      {
        id: 2,
        author: "David Kim",
        avatarUrl: "https://ui-avatars.com/api/?name=David+Kim&background=random",
        date: "April 8, 2024",
        content: "Great article! One thing I'd add is that the Tailwind plugin ecosystem is also incredibly powerful. I especially love using the typography plugin for blog content.",
        reactions: {
          like: 5,
          love: 1,
          laugh: 0
        },
        replies: []
      },
      {
        id: 3,
        author: "Alex Taylor",
        avatarUrl: "https://ui-avatars.com/api/?name=Alex+Taylor&background=random",
        date: "April 10, 2024",
        content: "I was skeptical about Tailwind at first (all those classes in my HTML?!), but after using it for a few projects, I'm completely sold. The developer experience is amazing.",
        reactions: {
          like: 4,
          love: 2,
          laugh: 1
        },
        replies: []
      }
    ]
  },
  {
    id: "components-with-shadcn-ui",
    title: "Building Beautiful UIs with shadcn/ui",
    excerpt: "How to use shadcn/ui to create accessible and customizable components",
    content: "shadcn/ui is not a traditional component library, but rather a collection of reusable components built with Radix UI and Tailwind CSS. Unlike other UI libraries, shadcn/ui doesn't come as a package you install. Instead, you copy and paste the components you need directly into your project.\n\nThis approach gives you complete control over the components and their styling, allowing you to customize them to fit your design system perfectly. The components are built with accessibility in mind, ensuring that your UI is usable by as many people as possible.\n\nTo get started with shadcn/ui, you can use the CLI to add components to your project:\n\n```bash\nnpx shadcn-ui@latest add button\n```\n\nThis will add the button component to your project, which you can then import and use in your application. You can also customize the component's styling by modifying the Tailwind configuration or the component itself.",
    author: "Tuhin",
    date: "April 10, 2024",
    readTime: "6 min",
    category: "UI Libraries",
    tags: ["shadcn/ui", "Tailwind CSS", "React", "UI Design"],
    imageUrl: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=1000&auto=format&fit=crop",
    comments: [
      {
        id: 1,
        author: "Jamie Wilson",
        avatarUrl: "https://ui-avatars.com/api/?name=Jamie+Wilson&background=random",
        date: "April 12, 2024",
        content: "shadcn/ui has been a game-changer for me. I love how it gives you full control over the components while still providing a great starting point. It's the perfect balance!",
        reactions: {
          like: 9,
          love: 5,
          laugh: 0
        },
        replies: [
          {
            id: 101,
            author: "Tuhin",
            avatarUrl: "https://ui-avatars.com/api/?name=Tuhin&background=random",
            date: "April 12, 2024",
            content: "That's exactly why I love it too! The flexibility it offers is unmatched.",
            reactions: {
              like: 3,
              love: 1,
              laugh: 0
            }
          }
        ]
      },
      {
        id: 2,
        author: "Samantha Lee",
        avatarUrl: "https://ui-avatars.com/api/?name=Samantha+Lee&background=random",
        date: "April 13, 2024",
        content: "I've been using shadcn/ui in a recent project, and the accessibility features are top-notch. It's nice to know that I'm building interfaces that everyone can use without having to become an accessibility expert myself.",
        reactions: {
          like: 6,
          love: 2,
          laugh: 0
        },
        replies: []
      },
      {
        id: 3,
        author: "Chris Martin",
        avatarUrl: "https://ui-avatars.com/api/?name=Chris+Martin&background=random",
        date: "April 15, 2024",
        content: "The copy-paste approach seemed weird to me at first, but now I get it. It really does give you more control, and since each component lives in your codebase, you can modify it however you want without worrying about version conflicts or overriding styles.",
        reactions: {
          like: 7,
          love: 1,
          laugh: 0
        },
        replies: []
      },
      {
        id: 4,
        author: "Pat Johnson",
        avatarUrl: "https://ui-avatars.com/api/?name=Pat+Johnson&background=random",
        date: "April 16, 2024",
        content: "Quick tip for anyone trying shadcn/ui: use the CLI! It makes adding components so much easier than manually copying and pasting from the docs.",
        reactions: {
          like: 5,
          love: 0,
          laugh: 0
        },
        replies: [
          {
            id: 101,
            author: "Chris Martin",
            avatarUrl: "https://ui-avatars.com/api/?name=Chris+Martin&background=random",
            date: "April 16, 2024",
            content: "Great tip! The CLI is definitely the way to go.",
            reactions: {
              like: 2,
              love: 0,
              laugh: 0
            }
          },
          {
            id: 102,
            author: "Jamie Wilson",
            avatarUrl: "https://ui-avatars.com/api/?name=Jamie+Wilson&background=random",
            date: "April 17, 2024",
            content: "And don't forget to check out the configuration options! You can customize a lot more than you might think.",
            reactions: {
              like: 3,
              love: 1,
              laugh: 0
            }
          }
        ]
      }
    ]
  }
]; 