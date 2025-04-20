import logo from '@pages/landing-page/assets/logo-stroked.svg';
import SecurityCut from '@pages/landing-page/components/chart/SecurityCut';
import TrianglePattern from '@pages/landing-page/components/chart/Triangle';

const WristBand = ({ idol, color, rotate, zIndex, translates }) => {
  const { image, name } = idol;
  const nameTokens = name.split(' ');
  const memberName = nameTokens.pop();
  const groupName = nameTokens.join(' ');
  return (
    <div
      className={`relative flex w-[80rem] bg-white ${rotate} ${zIndex} ${translates}`}
    >
      {/* 절취선 섹션 */}
      <div className='flex flex-[0.8] items-center justify-center'>
        <SecurityCut color={color} />
      </div>

      {/* 콘텐츠 섹션 */}
      <div className={`flex flex-4 items-center gap-8 p-4 bg-${color} `}>
        {/* 랭킹 */}
        <div className='font-Hakgyoansim text-6xl text-white'>01</div>
        {/* 삼각형 패턴 */}
        <div className='flex'>
          <TrianglePattern color={color} />
        </div>
        {/* 그룹 + 이름 */}
        <div className='flex flex-1 items-center justify-center text-white'>
          <p className='font-Hakgyoansim text-[3.2rem]'>
            {groupName} {memberName}
          </p>
          <p className='font-Hakgyoansim text-4xl'></p>
        </div>
        {/* 아이돌 이미지 */}
        <img src={image} className='h-25 w-25 rounded-full object-cover' />
      </div>

      {/* 로고 섹션 */}
      <div className='flex flex-[0.7]'>
        <img src={logo} alt='손목띠 로고' className='-rotate-45' />
      </div>
    </div>
  );
};

export default WristBand;
