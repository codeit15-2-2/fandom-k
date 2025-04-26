import DetailContent from '@pages/detail-page/components/DetailContent';
import DetailTitle from '@pages/detail-page/components/DetailTitle';

const DetailSection = ({ title, subtitle, contents, idol }) => {
  return (
    <div className='relative flex h-fit w-screen justify-center bg-black'>
      <div className='mt-10 mb-40 w-[90vw]'>
        <DetailTitle
          name={`${idol.group} ${idol.name}`}
          title={title}
          location={subtitle}
          size='s'
        />

        <DetailContent contents={contents} />
      </div>
    </div>
  );
};

export default DetailSection;
