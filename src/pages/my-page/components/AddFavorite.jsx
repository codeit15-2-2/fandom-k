import AvatarProfile from '@components/favorites/AvatarProfile';
import { useState } from 'react';

const AddFavorite = ({ idol, setIdol, setFavorite }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handleAddFavorites = () => {
    const selectedIdols = idol.filter((idol) => selectedIds.includes(idol.id));
    setFavorite((prev) => [...prev, ...selectedIdols]);
    setIdol((prev) => prev.filter((idol) => !selectedIds.includes(idol.id)));
    setSelectedIds([]);
  };

  return (
    <div className='flex flex-wrap gap-6'>
      {idol.map((item) => (
        <AvatarProfile
          key={item.id}
          id={item.id}
          src={item.imageUrl}
          name={item.name}
          group={item.group}
          size='l'
          selectedIds={selectedIds}
          onItemClick={toggleSelect}
        />
      ))}
      <button
        onClick={handleAddFavorites}
        className='mt-6 rounded bg-white px-4 py-2 text-black'
      >
        추가하기
      </button>
    </div>
  );
};

export default AddFavorite;
