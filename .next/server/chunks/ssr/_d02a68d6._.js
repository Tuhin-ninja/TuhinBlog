module.exports = {

"[project]/.next-internal/server/app/blogs/[blogId]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/error.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/error.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/blogs/[blogId]/not-found.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/blogs/[blogId]/not-found.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/lib/blogs.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "blogs": (()=>blogs)
});
const blogs = [
    {
        id: "getting-started-with-nextjs",
        title: "Getting Started with Next.js",
        excerpt: "Learn how to build modern web applications with Next.js",
        content: "Next.js is a powerful React framework that enables features such as server-side rendering, static site generation, and more. In this blog post, we'll explore the basics of setting up a Next.js project and understanding its core concepts.\n\nNext.js simplifies the development of React applications by providing a structured framework with built-in features like routing, image optimization, and API routes. It's designed to be both developer-friendly and production-ready, making it an excellent choice for projects of all sizes.\n\nTo get started with Next.js, you'll need to have Node.js installed on your machine. Then, you can create a new project using the following command:\n\n```bash\nnpx create-next-app@latest my-next-app\n```\n\nThis will set up a new Next.js project with all the necessary configurations and dependencies.",
        author: "Tuhin",
        date: "April 1, 2024",
        readTime: "5 min",
        category: "Web Development",
        tags: [
            "Next.js",
            "React",
            "JavaScript"
        ],
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
        tags: [
            "Tailwind CSS",
            "CSS",
            "Web Design"
        ],
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
        tags: [
            "shadcn/ui",
            "Tailwind CSS",
            "React",
            "UI Design"
        ],
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
}}),
"[project]/src/components/ui/badge.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-rsc] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/blogs/CommentsSection.jsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/blogs/CommentsSection.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/blogs/CommentsSection.jsx <module evaluation>", "default");
}}),
"[project]/src/components/blogs/CommentsSection.jsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/blogs/CommentsSection.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/blogs/CommentsSection.jsx", "default");
}}),
"[project]/src/components/blogs/CommentsSection.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blogs$2f$CommentsSection$2e$jsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/blogs/CommentsSection.jsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blogs$2f$CommentsSection$2e$jsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/blogs/CommentsSection.jsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blogs$2f$CommentsSection$2e$jsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/blogs/[blogId]/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BlogPostPage),
    "generateMetadata": (()=>generateMetadata),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blogs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/blogs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-rsc] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-rsc] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blogs$2f$CommentsSection$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blogs/CommentsSection.jsx [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/blogs/BlogReactionWrapper'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
;
async function generateMetadata({ params }) {
    const blog = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blogs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogs"].find((blog)=>blog.id === params.blogId);
    if (!blog) {
        return {
            title: "Blog Not Found | TuhinBlog",
            description: "The blog post you're looking for couldn't be found."
        };
    }
    return {
        title: `${blog.title} | TuhinBlog`,
        description: blog.excerpt
    };
}
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blogs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogs"].map((blog)=>({
            blogId: blog.id
        }));
}
function BlogPostPage({ params }) {
    const blog = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blogs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogs"].find((blog)=>blog.id === params.blogId);
    if (!blog) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "container mx-auto py-12 px-4 max-w-5xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/blogs",
                className: "inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Back to blogs"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold mb-6",
                children: blog.title
            }, void 0, false, {
                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: blog.author
                            }, void 0, false, {
                                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: blog.date
                            }, void 0, false, {
                                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: blog.readTime
                            }, void 0, false, {
                                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-video w-full mb-8 overflow-hidden rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: blog.imageUrl,
                    alt: blog.title,
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prose prose-lg dark:prose-invert max-w-none mb-8",
                children: blog.content.split('\n\n').map((paragraph, index)=>{
                    if (paragraph.startsWith('```') && paragraph.endsWith('```')) {
                        const code = paragraph.slice(paragraph.indexOf('\n') + 1, paragraph.lastIndexOf('```'));
                        const language = paragraph.slice(3, paragraph.indexOf('\n'));
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "bg-muted p-4 rounded-lg overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: code
                            }, void 0, false, {
                                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                                lineNumber: 81,
                                columnNumber: 17
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                            lineNumber: 80,
                            columnNumber: 15
                        }, this);
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: paragraph
                    }, index, false, {
                        fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                        lineNumber: 86,
                        columnNumber: 18
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogReactionWrapper, {
                blogId: blog.id
            }, void 0, false, {
                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium",
                        children: "Tags:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    blog.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "secondary",
                            children: tag
                        }, tag, false, {
                            fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blogs$2f$CommentsSection$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                comments: blog.comments
            }, void 0, false, {
                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-8 mt-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: "More blog posts"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blogs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogs"].filter((b)=>b.id !== blog.id).slice(0, 2).map((relatedBlog)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/blogs/${relatedBlog.id}`,
                                className: "no-underline",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 h-24 flex-shrink-0 rounded-md overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: relatedBlog.imageUrl,
                                                alt: relatedBlog.title,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                                                lineNumber: 115,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                                            lineNumber: 114,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-medium line-clamp-2",
                                                    children: relatedBlog.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                                                    lineNumber: 122,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground line-clamp-2 mt-1",
                                                    children: relatedBlog.excerpt
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                                            lineNumber: 121,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this)
                            }, relatedBlog.id, false, {
                                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blogs/[blogId]/page.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/blogs/[blogId]/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/blogs/[blogId]/page.jsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_d02a68d6._.js.map