import Navigation from '@/components/portfolio/Navigation';

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30">
            <Navigation />
            {children}
        </div>
    );
}
