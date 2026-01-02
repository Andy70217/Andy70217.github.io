# 內容管理說明

這個資料夾用於管理部落格的所有內容，使用 YAML 格式儲存。

## 資料夾結構

- `notes/` - 筆記文章，每個 YAML 檔案對應一篇筆記
- `images/` - 圖片管理，使用單一 `images.yaml` 檔案
- `videos/` - 影片管理，使用單一 `videos.yaml` 檔案

## 筆記格式

在 `notes/` 資料夾中建立 YAML 檔案，例如 `exploring-ai-future.yaml`：

```yaml
id: "1"
title: "文章標題"
excerpt: "文章摘要"
content: |
  # 文章標題
  
  文章內容可以使用 **Markdown** 語法撰寫。
  
  - 支援列表
  - 支援**粗體**和*斜體*
  - 支援程式碼區塊
  
  ```javascript
  console.log("Hello, World!");
  ```
category: "分類名稱"
imageUrl: "/attached_assets/generated_images/image.png"
readTime: "5 分鐘"
publishedAt: "2024-11-07T00:00:00Z"
```

**重要**：
- **檔案名稱就是 URL slug**：檔案名稱（不含副檔名）會自動用作文章 URL（例如：`exploring-ai-future.yaml` → `/blog/exploring-ai-future`）
- 檔案名稱必須是唯一的，建議使用英文和連字號（例如：`my-article-title.yaml`）
- 圖片路徑必須以 `/attached_assets/` 開頭，圖片檔案應放在 `client/public/attached_assets/` 資料夾中
- `content` 欄位支援完整的 Markdown 語法

## 圖片管理

編輯 `images/images.yaml`：

```yaml
images:
  - id: "1"
    title: "圖片名稱"
    url: "/attached_assets/generated_images/image.png"
    description: "圖片描述"
```

**重要**：圖片路徑必須以 `/attached_assets/` 開頭，圖片檔案應放在 `client/public/attached_assets/` 資料夾中。

## 影片管理

編輯 `videos/videos.yaml`：

```yaml
videos:
  - id: "1"
    title: "影片名稱"
    url: "https://example.com/video1"
    description: "影片描述"
    thumbnail: "/attached_assets/generated_images/thumbnail.png"
```

## 生成內容

每次修改 YAML 檔案後，執行以下命令重新生成內容：

```bash
npm run content:generate
```

或者在開發時，內容會自動生成：

```bash
npm run dev
```

或者在建置時，內容會自動生成：

```bash
npm run build
```

## Markdown 支援

所有 `content` 欄位都支援完整的 Markdown 語法：

- 標題（# ## ###）
- **粗體** 和 *斜體*
- 列表（有序和無序）
- 程式碼區塊和行內程式碼
- 引用
- 連結和圖片
- 表格（透過 GFM 擴展）

## 注意事項

1. **檔案名稱就是 URL**：檔案名稱（不含 `.yaml` 或 `.yml` 副檔名）會自動成為文章的 URL slug
2. 檔案名稱必須是唯一的，建議使用英文和連字號（例如：`my-article-title.yaml`）
3. 圖片檔案必須放在 `client/public/attached_assets/` 資料夾中
4. YAML 檔案中的圖片路徑必須以 `/attached_assets/` 開頭
5. 每次修改內容後記得執行 `npm run content:generate` 或重新啟動開發伺服器

