import { Link, Outlet, useMatch } from 'react-router-dom';

const IdolListTab = () => {
  const boysMatch = useMatch('/boys');
  const girlsMatch = useMatch('/girls');
  return (
    <div class='flex h-full w-1/2 flex-col'>
      <div className='flex w-full justify-between'>
        <div class={`w-1/2 border-2 ${boysMatch ? 'bg-gray-400' : ''}`}>
          <Link to='boys'>Boys</Link>
        </div>
        <div class={`w-1/2 border-2 ${girlsMatch ? 'bg-gray-400' : ''}`}>
          <Link to='girls'>Girls</Link>
        </div>
      </div>
      <div className='grid h-full w-full grid-cols-2 border-2'>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default IdolListTab;
