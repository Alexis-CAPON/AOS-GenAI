"use client";
import { useRouter } from "next/navigation"; // Import useRouter from next/router
import Article from "./Article";
import { Hero } from "./Hero";

export default function LandingPage() {
  const router = useRouter();

  const redirectToLogin = () => {
    router.push("/login"); // Use router.push to navigate to the /login route
  };

  return (
    <div className="container mx-auto px-4">
      <Hero />
      <button
        className="absolute top-1 right-1 m-4  bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-6 font-bold rounded-lg"
        onClick={redirectToLogin}
      >
        Login
      </button>
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="flex flex-col items-left space-y-8">
          <Article
            date="01/2024"
            title="AOS - Prototype v0.2 - Release"
            content="This is some **bold text** and *italic text*. Here's a list: 
          - Item 1  
          - Item 2  
          - Item 3  

          \n\n
          You can also include links: [Visit our website](https://example.com)
        
          # Section 1
          This is the content of section 1.
        
          ## Subsection 1.1
          This is a subsection.
        
          # Section 2
          More content for section 2."
            authors={[
              "https://avatars.githubusercontent.com/u/26466596?v=4",
              "1",
            ]}
            version="0.2"
          />

          <Article
            date="01/2024"
            title="AOS - Prototype v0.2 - Dev"
            content="Dev"
            authors={["Alexis Capon"]}
            version="0.1"
          />
        </div>
      </div>
    </div>
  );
}
