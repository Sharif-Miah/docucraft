import ContentDisplay from '@/app/components/ContentDisplay';

const ContentPage = ({ params: { contentId } }) => {
  return (
    <div>
      <ContentDisplay id={contentId}/>
    </div>
  );
};

export default ContentPage;
