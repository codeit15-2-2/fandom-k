import { Link, Outlet, useMatch } from 'react-router-dom';

const IdolListTab = () => {
  const boysMatch = useMatch('/boys');
  const girlsMatch = useMatch('/girls');
  return (
    <div class='flex h-screen w-screen flex-col items-center justify-center'>
      <div className='flex w-1/2 justify-between'>
        <div class={`w-1/2 border-2 ${boysMatch ? 'bg-gray-400' : ''}`}>
          <Link to='boys'>Boys</Link>
        </div>
        <div class={`w-1/2 border-2 ${girlsMatch ? 'bg-gray-400' : ''}`}>
          <Link to='girls'>Girls</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default IdolListTab;
