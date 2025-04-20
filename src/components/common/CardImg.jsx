import { cn } from '@/utils/cn';

/**
 * 카드에서 사용하는 이미지 컴포넌트입니다.
 *
 * - 전달받은 이미지(src, title)를 표시합니다.
 * - children이 존재할 경우, ::before 가상 요소를 통해 어두운 배경 그라디언트를 오버레이합니다.
 * - children에는 버튼 등 오버레이 요소를 absolute 위치로 감싸서 전달할 수 있습니다.
 *
 * @param {Object} props
 * @param {string} props.src - 이미지의 URL
 * @param {string} props.title - 이미지의 alt 텍스트 (접근성 및 SEO용)
 * @param {React.ReactNode} [props.children] - 이미지 위에 오버레이될 콘텐츠 (선택)
 *
 * @example
 * <CardImg
 *   src={'~'}
 *   title={'민지 2025 첫 광고'}
 * >
 *   <div className='absolute bottom-[1rem] left-1/2 z-10 -translate-x-1/2'>
 *     <Button onClick={() => console.log('후원 클릭')} />
 *   </div>
 * </CardImg>
 */

const CardImg = ({ src, title, children }) => {
  const wrapperClassName = cn(
    'relative aspect-[1/1] w-full overflow-hidden rounded-2xl',
    children &&
      "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[3] before:bg-[linear-gradient(0deg,_rgb(2,0,14)_0%,_rgba(2,0,14,0)_80%)]",
  );

  return (
    <div className={wrapperClassName}>
      <img src={src} alt={title} className='w-full object-contain' />
      {children && children}
    </div>
  );
};

export default CardImg;
