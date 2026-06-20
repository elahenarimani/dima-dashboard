import { BarChart3, CheckSquare, ShoppingBag } from "lucide-react";

const features = [
    {
        title: "Dashboard",
        description: "Real-time display of key metrics, progress charts, and system status at a glance for more accurate decision-making.",
        icon: BarChart3,
        badge: "Analytics"
    },
    {
        title: "Order Management",
        description: "An integrated system for tracking, filtering, and managing customer order statuses with quick access.",
        icon: ShoppingBag,
        badge: "Sales & Finance"
    },
    {
        title: "Todo List",
        description: "A simple and efficient tool for daily planning, task prioritization, and tracking ongoing tasks.",
        icon: CheckSquare,
        badge: "Productivity"
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Main Project Modules</h2>
                <p className="text-slate-600 max-w-xl mx-auto">
                   This platform consists of three core modules that work seamlessly together.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {features.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-white/70  p-8 rounded-2xl border border-slate-200/60  hover:shadow-sm hover:border-indigo-200 md:hover:scale-[1.01] transition-all duration-200 flex flex-col justify-between"                        >
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50/50 px-2.5 py-1 rounded-md">
                                    {item.badge}
                                </span>
                                <h3 className="text-xl font-bold text-slate-800 mt-4 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                            </div>

                            <div className="mt-8 pt-4 border-t border-slate-100">
                                <span className="text-xs font-medium text-slate-400"> Ready for deployment</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}