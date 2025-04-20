/**
 * 카드에서 사용하는 이미지 컴포넌트입니다.
 *
 * - 전달받은 이미지(src, title)를 표시합니다.
 * - `children`이 존재할 경우, 이미지 위에 그라디언트 오버레이를 추가합니다.
 * - 오버레이할 콘텐츠(children)는 외부에서 absolute 포지션을 포함한 형태로 전달해야 합니다.
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
  return (
    <div className='relative aspect-[1/1] w-full overflow-hidden rounded-2xl'>
      <img src={src} alt={title} className='w-full object-contain' />
      {children && (
        <>
          <div className='absolute bottom-0 z-[1] h-24 w-full bg-gradient-to-t from-black/100 to-transparent' />
          {children}
        </>
      )}
    </div>
  );
};

export default CardImg;
