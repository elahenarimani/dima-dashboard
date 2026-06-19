import {  ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 text-center bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-5 text-4xl  rounded-2xl  font-medium bg-indigo-50 text-indigo-700 mb-6 px-8">
          Smart Project Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          All your management tools
          <br />
          <span className="text-indigo-600">in one unified platform</span>
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          With our advanced management system, easily monitor your sales status,
          order lists, and daily tasks while improving your team’s productivity
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#features"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-100"
          >
             
            View Project Sections
           <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
