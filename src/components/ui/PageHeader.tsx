interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <div className="text-center max-w-3xl mx-auto mb-20">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
    {subtitle && <p className="text-xl text-gray-400">{subtitle}</p>}
  </div>
);

export default PageHeader;
