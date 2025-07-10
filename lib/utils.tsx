import { useEffect, useState, useRef } from 'react';

// Helper function để lấy color class từ color name
export const getColorClass = (color: string) => {
  const colorMap: { [key: string]: string } = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
    cyan: 'bg-cyan-500',
    indigo: 'bg-indigo-500',
    orange: 'bg-orange-500',
  };
  return colorMap[color] || 'bg-gray-500';
};

// Component để hiển thị tech stack thông minh
export const TechStackDisplay = ({ technologies }: { technologies: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleTechs, setVisibleTechs] = useState<string[]>([]);
  const [hiddenCount, setHiddenCount] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;

    // Ước tính chiều rộng của mỗi tech tag (padding + text + margin)
    const avgTechWidth = 70; // px
    const plusTextWidth = 30; // px cho "+X"

    const maxTechsWithoutPlus = Math.floor(containerWidth / avgTechWidth);
    const maxTechsWithPlus = Math.floor(
      (containerWidth - plusTextWidth) / avgTechWidth
    );

    if (technologies.length <= maxTechsWithoutPlus) {
      setVisibleTechs(technologies);
      setHiddenCount(0);
    } else {
      setVisibleTechs(technologies.slice(0, maxTechsWithPlus));
      setHiddenCount(technologies.length - maxTechsWithPlus);
    }
  }, [technologies]);

  return (
    <div ref={containerRef} className="flex flex-wrap gap-2 mb-4">
      {visibleTechs.map(tech => (
        <span
          key={tech}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0"
        >
          {tech}
        </span>
      ))}
      {hiddenCount > 0 && (
        <span className="text-gray-500 text-xs py-1 flex-shrink-0">
          +{hiddenCount}
        </span>
      )}
    </div>
  );
}; 