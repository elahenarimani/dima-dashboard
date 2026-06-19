import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50  antialiased" dir="ltr">
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent -z-10 pointer-events-none" />
        <Hero />
        <Features />
      </main>
      <footer className="border-t border-slate-200/60 bg-white/60 backdrop-blur-md py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm font-medium text-slate-500">
           CoreApp Management Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
}