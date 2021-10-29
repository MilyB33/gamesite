import {
  Card,
  SkeletonImage,
  SkeletonText,
  SkeletonLink,
} from './GridCard.styles';
const SkeletonGridCard = () => {
  return (
    <Card>
      <SkeletonImage />
      <SkeletonText />
      <SkeletonText isSecond />

      <SkeletonLink />
    </Card>
  );
};

export default SkeletonGridCard;
