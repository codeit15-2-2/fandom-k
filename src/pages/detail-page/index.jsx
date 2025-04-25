import { useLocation, useParams } from 'react-router-dom';

export default function DetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const item = location.state?.item;
  console.log('데이터 확인', item);
  console.log('아이디 확인', id);

  return <div>Detail</div>;
}
