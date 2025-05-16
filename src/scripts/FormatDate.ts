// t.Date() => 2025/01/01
export function datePath(date:Date) {
    const date_path: String = [year_path(date), month_path(date), day_path(date)].join("/");
    return date_path;
};

export const year_path = (date: Date) =>  date.getFullYear().toString();
export const month_path = (date: Date) =>  (date.getMonth() + 1).toString().padStart(2, "0");
export const day_path = (date: Date) =>  date.getDate().toString().padStart(2, "0");

