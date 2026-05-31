import { Clock, Check, Circle, CircleDot } from "lucide-react";
import * as C from "../Common.styles";
import * as S from "./OrderTimeline.styles";

const OrderTimeline = ({ timeline, formatDate }) => {
  if (!timeline || timeline.length === 0) return null;

  return (
    <C.ContentCard>
      <C.SectionTitle>
        <C.TitleGroup>
          <C.TitleIcon>
            <Clock size={24} />
          </C.TitleIcon>
          Order Timeline
        </C.TitleGroup>
      </C.SectionTitle>

      <S.TimelineContainer>
        {timeline.map((item, index) => {
          const isCompleted = item.status !== "PENDING";
          const isActive = item.status === "PENDING" && (index === 0 || timeline[index - 1].status !== "PENDING");

          return (
            <S.TimelineItem key={index}>
              <S.IconContainer completed={isCompleted} active={isActive}>
                {isCompleted ? <Check /> : isActive ? <CircleDot /> : <Circle />}
              </S.IconContainer>
              <S.ItemContent completed={isCompleted} active={isActive}>
                <S.ItemLabel completed={isCompleted} active={isActive}>{item.label}</S.ItemLabel>
                <S.ItemDate>
                  {isCompleted
                    ? formatDate
                      ? formatDate(item.at)
                      : item.at
                    : "Pending"}
                </S.ItemDate>
              </S.ItemContent>
            </S.TimelineItem>
          );
        })}
      </S.TimelineContainer>
    </C.ContentCard>
  );
};

export default OrderTimeline;
