import { Clock, Check, Circle, CircleDot } from "lucide-react";
import * as C from "../Common.styles";
import * as S from "./OrderTimeline.styles";
import { transformTimeline } from "../../../../utils/transformTimeline";

const OrderTimeline = ({ timeline, formatDate }) => {
  if (!timeline || timeline.length === 0) return null;

  const transformedTimeline = transformTimeline(timeline);

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
        {transformedTimeline.map((item, index) => {
          return (
            <S.TimelineItem key={index}>
              <S.IconContainer completed={item.isCompleted} active={item.isActive}>
                {item.isCompleted ? <Check /> : item.isActive ? <CircleDot /> : <Circle />}
              </S.IconContainer>
              <S.ItemContent completed={item.isCompleted} active={item.isActive}>
                <S.ItemLabel completed={item.isCompleted} active={item.isActive}>{item.label}</S.ItemLabel>
                <S.ItemDate>
                  {item.isCompleted
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
