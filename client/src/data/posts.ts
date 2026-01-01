import type { Post } from "@/types/post";

// TODO: 將此處的 mock 數據替換為實際的文章內容
// 建議未來可以改用 YAML 檔案管理，類似於 20125YU.github.io 的做法
export const posts: Post[] = [
  {
    id: "1",
    title: "探索人工智慧的未來",
    slug: "exploring-ai-future",
    excerpt: "人工智慧正在改變我們的世界，從自動駕駛到醫療診斷，AI 技術無處不在。本文將深入探討 AI 的發展趨勢和未來展望。",
    content: "# 探索人工智慧的未來\n\n人工智慧正在改變我們的世界，從自動駕駛到醫療診斷，AI 技術無處不在。\n\n## AI 的應用領域\n\n- 自動駕駛\n- 醫療診斷\n- 自然語言處理\n- 圖像識別\n\n## 未來展望\n\nAI 技術將持續發展，為人類帶來更多便利。",
    category: "人工智慧",
    imageUrl: "/attached_assets/generated_images/AI_technology_blog_post_fc4254ac.png",
    readTime: "5 分鐘",
    publishedAt: "2024-11-07T00:00:00Z",
  },
  {
    id: "2",
    title: "程式設計的最佳實踐",
    slug: "coding-best-practices",
    excerpt: "良好的程式設計習慣不僅能提高代碼質量，還能讓團隊協作更加順暢。讓我們一起學習一些實用的程式設計最佳實踐。",
    content: "# 程式設計的最佳實踐\n\n良好的程式設計習慣不僅能提高代碼質量，還能讓團隊協作更加順暢。\n\n## 程式碼規範\n\n- 使用有意義的變數名稱\n- 保持函數簡潔\n- 添加適當的註解\n\n## 版本控制\n\n使用 Git 進行版本控制是現代開發的標準做法。",
    category: "程式設計",
    imageUrl: "/attached_assets/generated_images/Coding_workspace_blog_post_b1f6bae7.png",
    readTime: "8 分鐘",
    publishedAt: "2024-11-05T00:00:00Z",
  },
  {
    id: "3",
    title: "網路安全的重要性",
    slug: "cybersecurity-importance",
    excerpt: "在數位時代，網路安全變得越來越重要。了解基本的網路安全知識，保護個人和企業的資料安全。",
    content: "# 網路安全的重要性\n\n在數位時代，網路安全變得越來越重要。\n\n## 常見威脅\n\n- 釣魚攻擊\n- 惡意軟體\n- 資料外洩\n\n## 防護措施\n\n- 使用強密碼\n- 定期更新軟體\n- 啟用雙因素認證",
    category: "網路安全",
    imageUrl: "/attached_assets/generated_images/Cybersecurity_blog_post_79100a2a.png",
    readTime: "6 分鐘",
    publishedAt: "2024-11-03T00:00:00Z",
  },
];
