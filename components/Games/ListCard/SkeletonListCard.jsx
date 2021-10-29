import {
  Card,
  SkeletonImage,
  SkeletonText,
  SkeletonLink,
} from './ListCard.styles';

const SkeletonListCard = () => {
  return (
    <Card>
      <SkeletonImage />
      <SkeletonText />
      <SkeletonLink />
    </Card>
  );
};

export default SkeletonListCard;
