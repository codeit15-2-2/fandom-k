import AvatarProfile from '@components/favorites/AvatarProfile';
import { useState } from 'react';
import useWindowSize from '@hooks/useWindowSize';

const AddFavorite = ({ idol, setIdol, setFavorite }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const width = useWindowSize();
  const avatarSize = width < 768 ? 'm' : 'l'; //아바타 프로필 기기별 size 적용

  //선택
  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  //선택한 아이돌들을 favorite에 추가하는 로직
  const handleAddFavorites = () => {
    const selectedIdols = idol.filter((idol) => selectedIds.includes(idol.id));
    setFavorite((prev) => [...prev, ...selectedIdols]);
    setIdol((prev) => prev.filter((idol) => !selectedIds.includes(idol.id)));
    setSelectedIds([]);
  };

  const displayIdols = idol.slice(0, 16);

  return (
    <div>
      <div className='min-h-[260px]'>
        {displayIdols.length > 0 ? (
          <div className='grid grid-cols-4 gap-x-6 gap-y-10 md:grid-cols-6 lg:grid-cols-8'>
            {displayIdols.map((item) => (
              <div key={item.id} className='flex flex-col items-center'>
                <AvatarProfile
                  id={item.id}
                  src={item.imageUrl}
                  name={item.name}
                  group={item.group}
                  size={avatarSize}
                  selectedIds={selectedIds}
                  onItemClick={handleSelect}
                />
              </div>
            ))}
          </div>
        ) : (
          // 전부 추가했을경우에 뜸(더이상 데이터가없을때)
          <div className='flex h-[240px] items-center justify-center text-[2.4rem] text-gray-400'>
            더 이상 추가할 수 있는 아이돌이 없습니다.
          </div>
        )}
      </div>

      <div className='mt-10 flex justify-center'>
        <button
          onClick={handleAddFavorites}
          className='flex items-center gap-2 rounded-full bg-red-400 px-30 py-10 text-[2.4rem] text-white transition hover:bg-red-500'
          disabled={selectedIds.length === 0}
        >
          <span>추가하기</span>
        </button>
      </div>
    </div>
  );
};

export default AddFavorite;
