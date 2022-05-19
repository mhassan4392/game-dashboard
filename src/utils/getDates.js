import { format } from "date-fns";
const getDates = () => {
  let i = 1;
  const dates = Array.from({ length: 14 }).map(() => {
    let d = new Date();
    let t = d;
    let a = i;
    i++;
    if (i == 14) {
      i = 0;
    }
    d.setDate(d.getDate() + a);
    return format(d, "yyyy-MM-dd");
  });

  return dates;
};

export default getDates;
