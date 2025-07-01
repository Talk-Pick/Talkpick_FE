interface LikeButtonProps {
  liked: boolean;
  onToggle: (liked: boolean) => void;
}

const LikeButton = ({ liked, onToggle }: LikeButtonProps) => {
  return (
    <span className="cursor-pointer" onClick={() => onToggle(!liked)}>
      {liked ? (
        <img src="/images/icons/heart_fill.svg" alt="heart" />
      ) : (
        <img src="/images/icons/heart_outline.svg" alt="heart" />
      )}
    </span>
  );
};

export default LikeButton;