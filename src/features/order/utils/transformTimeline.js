export const transformTimeline = (timeline) => {
  if (!timeline || timeline.length === 0) return [];

  // INFO: If the order is cancelled, don't show pending intermediate steps
  const isOrderCancelled = timeline.some((t) => t.status === "CANCELLED");

  const filteredTimeline = timeline.filter((item) => {
    return !(isOrderCancelled && item.status === "PENDING");
  });

  return filteredTimeline.map((item, index, arr) => {
    const hasNextOfSameType = arr.slice(index + 1).some((t) => t.type === item.type);

    const isCompleted = item.status !== "PENDING" || hasNextOfSameType;
    const isActive = item.status === "PENDING" && !hasNextOfSameType;

    return {
      ...item,
      isCompleted,
      isActive,
    };
  });
};
