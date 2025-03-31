import BlogHomePage from "@/components/Home/home";
import Pricing from "@/components/Home/pricing";
import BlogPreview from "@/components/Home/BlogPreview";

export default function Home() {
  return (
    <div>
      <BlogHomePage />
      <BlogPreview />
      <Pricing />
    </div>
  );
}
