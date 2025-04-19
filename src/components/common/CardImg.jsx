/**
 * 카드에서 사용하는 이미지 컴포넌트입니다.
 * 'isHover'가 true일 경우, 이미지 하단에 검은색 그라데이션 오버레이가 표시됩니다.
 *
 * @param {Object} props
 * @param {string} props.src - 이미지의 URL
 * @param {string} props.title - 이미지의 alt 텍스트 (접근성 및 SEO용)
 * @param {boolean} [props.isHover=false] - true일 경우 하단 그라데이션 오버레이가 나타납니다
 *
 * @example
 * <CardImg
 *  className='rounded-2xl object-contain'
 *  src={'~'}
 *  alt={'민지 2025 첫 광고'}
 *  isHover={true}
 * />
 */

const CardImg = ({ src, title, isHover }) => {
  return (
    <div>
      <img
        src={src}
        alt={title}
        className='w-full rounded-2xl object-contain'
      />
      {isHover && (
        <div className='absolute bottom-0 z-10 h-24 w-full bg-gradient-to-t from-black/100 to-transparent' />
      )}
    </div>
  );
};

export default CardImg;
