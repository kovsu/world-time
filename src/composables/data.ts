import timezoneRaw from "timezones.json";

// 处理 Timezone 数据
export const timezone = timezoneRaw.flatMap((item) => {
  return item.utc.map((u) => {
    return {
      name: u,
      offset: item.offset,
      isdst: item.isdst,
    };
  });
});
