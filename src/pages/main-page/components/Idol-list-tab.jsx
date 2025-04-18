import { Link, Navigate, Outlet, useMatch } from 'react-router-dom';

const IdolListTab = () => {
  const maleMatch = useMatch('/main/male');
  const femaleMatch = useMatch('/main/female');
  const rootMatch = useMatch('/main');

  //처음 진입 시, 자동으로 이달의 여자 아이돌 선택
  if (rootMatch) {
    return <Navigate to='/main/female' replace />;
  }

  return (
    <div class='flex h-full max-w-5/8 flex-col bg-black'>
      <div className='sub-content-text flex h-[4.2rem] w-full items-center justify-between text-white'>
        <div
          class={`flex h-full w-1/2 items-center justify-center ${femaleMatch ? 'border-b border-white bg-white/10' : ''}`}
        >
          <Link to='female'>이달의 여자 아이돌</Link>
        </div>
        <div
          class={`flex h-full w-1/2 items-center justify-center ${maleMatch ? 'border-b border-white bg-white/10' : ''}`}
        >
          <Link to='male'>이달의 남자 아이돌</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default IdolListTab;
