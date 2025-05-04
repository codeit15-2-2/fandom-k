import { useEffect } from 'react';
import { useToast } from '@contexts/ToastContext';
import { createVote } from '@apis/voteApi';
import { useChartContext } from '@contexts/ChartContext';
import Modal from '@components/common/Modal';
import VoteIdolList from './VoteIdolList';
import Button from '@components/common/Button';
import useCredit from '@hooks/useCredit';
import VoteModalFooter from './VoteModalFooter';

const VOTE_CREDIT_AMOUNT = 1000;

const VoteModal = ({ voteModal }) => {
  const { credit, handleDonateCredit } = useCredit();
  const { showLoading, showSuccess, showError, dismiss } = useToast();

  // 모달용 상태와 함수 사용
  const {
    modalGender,
    setModalGender,
    chartDataList,
    selectedId,
    handleSelectIdol,
    fetchIdolData, // 메인 페이지 데이터 갱신용
    fetchModalIdolData,
    resetPagination,
    resetModalPagination,
  } = useChartContext();

  // 투표 버튼 클릭 처리
  const handleVote = async () => {
    if (!selectedId) {
      showError('아이돌을 선택해주세요.');
      return;
    }

    if (credit < VOTE_CREDIT_AMOUNT) {
      showError('크레딧이 부족합니다.');
      return;
    }

    const loadingId = showLoading('투표를 처리 중입니다...');

    try {
      await createVote(selectedId);

      // 선택된 아이돌의 이름 찾기
      const selectedIdol = chartDataList.find((idol) => idol.id === selectedId);
      const idolName = selectedIdol?.name || '선택한 아이돌';

      handleDonateCredit(VOTE_CREDIT_AMOUNT);
      handleSelectIdol(null);

      // 로딩 토스트 제거 후 성공 토스트 표시
      dismiss(loadingId);
      showSuccess(`${idolName}에게 투표가 완료되었습니다!`);

      // 투표 성공 후 모달 닫기
      voteModal.close();

      // 메인 페이지 차트 데이터만 갱신 (모달은 닫히므로 갱신 불필요)
      resetPagination();
      fetchIdolData(0);
    } catch (error) {
      console.log('투표 실패', error.message);
      dismiss(loadingId);
      showError('투표에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleCloseModal = () => {
    voteModal.close();
    handleSelectIdol(null);
  };

  // 모달용 데이터 초기화 및 새로 불러오기
  useEffect(() => {
    if (voteModal.isOpen) {
      resetModalPagination();
      fetchModalIdolData(0);
    }
  }, [voteModal.isOpen]);

  return (
    <Modal
      isOpen={voteModal.isOpen}
      onClose={handleCloseModal}
      title={
        <select
          value={modalGender}
          onChange={(e) => setModalGender(e.target.value)}
          className='rounded border border-gray-600 bg-[#181D26] p-2 text-[var(--color-white)]'
        >
          <option value='female'>이달의 여자 아이돌</option>
          <option value='male'>이달의 남자 아이돌</option>
        </select>
      }
    >
      <VoteIdolList isModal={true} />
      <Button
        className='w-full'
        color='pink'
        size='m'
        btnType='button'
        onClick={handleVote}
      >
        투표하기
      </Button>
      <VoteModalFooter />
    </Modal>
  );
};

export default VoteModal;
