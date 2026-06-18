export const transformTimeline = (timeline) => {
  if (!timeline || timeline.length === 0) return [];

  // INFO: If the order is cancelled, don't show pending intermediate steps
  const isOrderCancelled = timeline.some((t) => t.status === "CANCELLED");

  const filteredTimeline = timeline.filter((item) => {
    return !(isOrderCancelled && item.status === "PENDING");
  });

  return filteredTimeline.map((item, index, arr) => {
    const hasNextOfSameType = arr.slice(index + 1).some((t) => t.type === item.type);

    const isFailed = item.status === "FAILED";
    const isCancelled = item.status === "CANCELLED";
    const isCompleted = (item.status !== "PENDING" && !isFailed && !isCancelled) || hasNextOfSameType;
    const isActive = item.status === "PENDING" && !hasNextOfSameType;

    let label = item.label;
    if (!label) {
      if (item.type === "PAYMENT" && item.status === "FAILED") {
        label = "Payment failed";
      } else if (item.type === "ORDER" && item.status === "CANCELLED") {
        label = "Order cancelled";
      } else {
        label = item.status;
      }
    }

    return {
      ...item,
      label,
      isCompleted,
      isActive,
      isFailed,
      isCancelled,
    };
  });
};
