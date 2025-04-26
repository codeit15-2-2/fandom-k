import { useState, useEffect } from 'react';
import { useChartPagination } from '@hooks/useChartPagination';
import Modal from '@components/common/Modal';
import VoteIdolList from './VoteIdolList';
import Button from '@components/common/Button';
import { createVote } from '@apis/voteApi';
import useCredit from '@hooks/useCredit';
import VoteModalFooter from './VoteModalFooter';

const VoteModal = ({ voteModal, cursor = 0 }) => {
  const VOTE_CREDIT_AMOUNT = 1000;
  const [gender, setGender] = useState('female');
  const [selectedId, setSelectedId] = useState(null);
  const { credit, handleDonateCredit } = useCredit();

  const {
    chartDataList,
    nextCursor,
    isLoading,
    fetchIdolData,
    resetPagination,
  } = useChartPagination(gender);

  // gender가 바뀌면 초기화 후 첫 페이지 데이터를 재요청
  useEffect(() => {
    resetPagination();
    fetchIdolData(0);
  }, [gender]);

  const handleSelectIdol = (id) => {
    setSelectedId(id);
  };

  // 투표 버튼 클릭 처리
  const handleVote = async () => {
    if (!selectedId) return alert('아이돌을 선택해주세요.');

    try {
      const res = await createVote(selectedId);
      console.log('투표 완료', res);

      handleDonateCredit(VOTE_CREDIT_AMOUNT);
      setSelectedId(null);

      // 투표 성공 후 모달 닫기
      voteModal.close();
    } catch (error) {
      console.log('투표 실패', error.message);
      alert('투표에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
      <Modal
        isOpen={voteModal.isOpen}
        onClose={voteModal.close}
        title={
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className='rounded border border-gray-600 bg-[#181D26] p-2 text-[var(--color-white)]'
          >
            <option value='female'>이달의 여자 아이돌</option>
            <option value='male'>이달의 남자 아이돌</option>
          </select>
        }
      >
        <VoteIdolList
          chartDataList={chartDataList}
          selectedId={selectedId}
          onSelect={handleSelectIdol}
        />
        <Button
          className='w-full' //추가 클래스네임
          color='pink'
          size='m'
          btnType='button'
          onClick={handleVote}
        >
          투표하기
        </Button>
        <VoteModalFooter/>
      </Modal>
    </>
  );
};

export default VoteModal;
