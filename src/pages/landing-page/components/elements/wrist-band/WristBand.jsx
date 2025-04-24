import logo from '@assets/logos/logo-stroked.svg';
import SecurityCut from '@pages/landing-page/components/elements/wrist-band/SecurityCut';
import TrianglePattern from '@pages/landing-page/components/elements/wrist-band/Triangle';

const WristBand = ({ idol, color, ranking, rotate, zIndex, translates }) => {
  const { image, name } = idol;
  const nameTokens = name.split(' ');
  const memberName = nameTokens.pop();
  const groupName = nameTokens.join(' ');
  const bgColorMap = {
    'orange-600': 'bg-orange-600',
    'teal-600': 'bg-teal-600',
    'brand-2': 'bg-brand-2',
    'blue-400': 'bg-blue-400',
    'teal-500': 'bg-teal-500',
    'brand-1': 'bg-brand-1',
    'sky-400': 'bg-sky-400',
  };
  const bgColor = bgColorMap[color] || '';

  return (
    <div
      className={`w-40rem flex bg-white md:w-[80rem] ${rotate} ${zIndex} ${translates}`}
    >
      {/* 절취선 섹션 */}
      <div className='flex flex-[0.8] items-center justify-center'>
        <SecurityCut color={color} />
      </div>

      {/* 콘텐츠 섹션 */}
      <div
        className={`flex flex-4 items-center gap-6 p-2 md:gap-8 md:p-4 ${bgColor} `}
      >
        {/* 랭킹 */}
        <div className='font-Hakgyoansim text-white md:text-6xl'>{ranking}</div>
        {/* 삼각형 패턴 */}
        <div className='flex'>
          <TrianglePattern color={color} />
        </div>
        {/* 그룹 + 이름 */}
        <div className='flex flex-1 items-center justify-center text-white'>
          <p className='font-Hakgyoansim md:text-[3rem]'>
            {groupName} {memberName}
          </p>
        </div>
        {/* 아이돌 이미지 */}
        <img
          src={image}
          className='h-10 w-10 rounded-full object-cover md:h-25 md:w-25'
        />
      </div>

      {/* 로고 섹션 */}
      <div className='flex flex-[0.7]'>
        <img src={logo} alt='손목띠 로고' className='-rotate-45' />
      </div>
    </div>
  );
};

export default WristBand;
