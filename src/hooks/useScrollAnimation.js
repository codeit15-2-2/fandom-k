import { useScroll, useTransform } from 'motion/react';

/** 스크롤하면 요소가 나타나는 애니메이션
 * @param {React.RefObject|null|undefined} containerRef - 스크롤 기준이 될 컨테이너의 ref. 생략 시 브라우저 전체 기준.
 * @param {React.RefObject} targetRef - 애니메이션 대상 요소의 ref
 * @param {[string, string]} yRange - Y 위치 변화를 위한 transform 범위 (예: ['-100%', '0%'])
 * @param {[number, number]} [opacityRange=[0, 0.2]] - 스크롤 진행률 기준 opacity 변화 범위
 */
/** 사용법 예시
 * @example
 * const detailTitleRef = useRef(null);
 *
 * const detailTitleAnimation = useScrollAnimation(
 *   scrollAreaRef,
 *   detailTitleRef,
 *   ['-1000%', '0%'],
 * );
 *
 * <motion.div
 *   className='sticky top-0 z-10 w-full'
 *   style={detailTitleAnimation}
 *   ref={detailTitleRef}
 * >
 */
const useScrollAnimation = (
  containerRef = undefined, // 기본 값은 브라우저 화면 전체 영역. 원하는 영역의 ref를 받는다.
  targetRef,
  yRange,
  opacityRange = [0, 0.2],
) => {
  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    offset: ['start end', 'start start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const opacity = useTransform(scrollYProgress, [0, opacityRange[1]], [0, 1]);

  return { y, opacity };
};

export default useScrollAnimation;
