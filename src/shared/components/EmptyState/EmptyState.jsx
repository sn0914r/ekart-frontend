import * as S from "./EmptyState.styles";

const EmptyState = ({
  watermark = "EMPTY",
  title = "Your Cart is Empty",
  description = "Looks like you haven't added any items yet.",
  actionText = "Start Shopping",
  actionLink = "/",
}) => {
  return (
    <S.EmptyStateWrapper>
      <S.ErrorCode>{watermark}</S.ErrorCode>
      <S.Content>
        <S.Message>{title}</S.Message>
        <S.Description>{description}</S.Description>
        <S.BackBtn to={actionLink}>{actionText}</S.BackBtn>
      </S.Content>
    </S.EmptyStateWrapper>
  );
};

export default EmptyState;
