import { cn } from '@libs/cn';

// 색상별 클래스 매핑
const COLOR_CLASSES = {
  'orange-600': 'border-l-teal-800',
  'teal-600': 'border-l-yellow-300',
  'brand-2': 'border-l-blue-400',
  'blue-400': 'border-l-green-400',
  'teal-500': 'border-l-brand-1',
  'brand-1': 'border-l-teal-500',
};

const Triangle = ({ color }) => {
  // 매핑된 클래스 찾거나 기본값 사용
  const borderClass = COLOR_CLASSES[color] || 'border-l-brand-2';

  return (
    <div
      className={cn(
        '-mr-8 h-0 w-0 border-20 border-solid border-transparent',
        borderClass,
      )}
    />
  );
};

const TrianglePattern = ({ color }) => {
  return (
    <div className='flex'>
      {Array.from({ length: 5 }).map((_, i) => (
        <Triangle key={`triangle-${i}`} color={color} />
      ))}
    </div>
  );
};

export default TrianglePattern;
