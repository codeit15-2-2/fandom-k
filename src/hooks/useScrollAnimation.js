import { useScroll, useTransform } from 'motion/react';

/**
 * 스크롤 위치에 따라 y 이동과 opacity 변화를 계산하는 커스텀 훅입니다.
 *
 * @param {React.RefObject<HTMLElement>} containerRef - 스크롤을 감지할 컨테이너 요소의 ref입니다. 설정하지 않으면 브라우저 전체 스크롤을 기준으로 합니다.
 * @param {React.RefObject<HTMLElement>} targetRef - 스크롤 애니메이션을 적용할 대상 요소의 ref입니다.
 * @param {[string, string]} yRange - 스크롤 이동에 따라 y축으로 변환할 값 범위입니다. 예: ['-100px', '0px']
 * @param {boolean} [enableOpacity=false] - opacity 애니메이션을 적용할지 여부입니다.
 * @param {[number, number]} [opacityInputRange=[0, 200]] - 스크롤 px 기준으로 opacity 변화를 시작하고 끝낼 구간입니다. 예: [0, 200]
 * @param {[number, number]} [opacityOutputRange=[0, 1]] - opacity가 변하는 출력 범위입니다. 예: [0, 1]
 */
const useScrollAnimation = (
  containerRef = undefined,
  targetRef,
  yRange,
  enableOpacity = false,
  opacityInputRange = [0, 200],
  opacityOutputRange = [0, 1],
) => {
  const { scrollY } = useScroll({
    container: containerRef,
    target: targetRef,
    offset: ['start end', 'start start'],
  });

  const y = useTransform(scrollY, [0, 1000], yRange);
  const opacity = enableOpacity
    ? useTransform(scrollY, opacityInputRange, opacityOutputRange)
    : undefined;

  return { y, opacity };
};

export default useScrollAnimation;
