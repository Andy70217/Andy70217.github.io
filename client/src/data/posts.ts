import type { Post } from "@/types/post";
import contentData from "./content.json";

// 從生成的 content.json 讀取筆記資料
// 筆記內容由 content/notes/ 資料夾中的 YAML 檔案管理
// 修改筆記時，請編輯 content/notes/ 中的 YAML 檔案，然後執行 npm run content:generate
const content = contentData as { notes: Post[]; images: any[]; videos: any[] };

export const posts: Post[] = content.notes || [];
