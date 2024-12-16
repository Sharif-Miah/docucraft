import ContentDisplay from '@/app/components/ContentDisplay';

const SubContentPage = ({ params: { subContentId } }) => {
  return (
    <div>
      <ContentDisplay id={subContentId} />
    </div>
  );
};

export default SubContentPage;
