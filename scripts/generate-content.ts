import { readdir, readFile, writeFile, stat } from "fs/promises";
import { resolve } from "path";
import yaml from "js-yaml";

interface ContentData {
  notes: any[];
  images: any[];
  videos: any[];
}

async function generateContent() {
  const contentPath = resolve(process.cwd(), "content");
  const outputPath = resolve(process.cwd(), "client", "src", "data", "content.json");
  const data: ContentData = {
    notes: [],
    images: [],
    videos: [],
  };

  // Load notes
  try {
    const notesDir = resolve(contentPath, "notes");
    const noteFiles = await readdir(notesDir);
    for (const file of noteFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(notesDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const note = yaml.load(content) as any;
          // 從檔案名稱生成 slug（移除副檔名）
          const slug = file.replace(/\.(yaml|yml)$/, "");
          note.slug = slug;
          // 驗證圖片 URL 是否以 /attached_assets/ 開頭
          if (note.imageUrl && !note.imageUrl.startsWith("/attached_assets/")) {
            console.warn(`警告: 筆記 "${note.title}" 的圖片 URL "${note.imageUrl}" 應該以 "/attached_assets/" 開頭`);
          }
          data.notes.push(note);
        }
      }
    }
    // Sort by publishedAt descending
    data.notes.sort((a, b) => {
      try {
        const dateA = new Date(a.publishedAt).getTime();
        const dateB = new Date(b.publishedAt).getTime();
        return dateB - dateA;
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load notes:", error);
  }

  // Load images
  try {
    const imagesFile = resolve(contentPath, "images", "images.yaml");
    const content = await readFile(imagesFile, "utf-8");
    const imagesData = yaml.load(content) as { images: any[] };
    if (imagesData.images) {
      // 驗證每個圖片的 URL
      for (const image of imagesData.images) {
        if (image.url && !image.url.startsWith("/attached_assets/")) {
          console.warn(`警告: 圖片 "${image.title}" 的 URL "${image.url}" 應該以 "/attached_assets/" 開頭`);
        }
      }
      data.images = imagesData.images;
    }
  } catch (error) {
    console.warn("Failed to load images:", error);
  }

  // Load videos
  try {
    const videosFile = resolve(contentPath, "videos", "videos.yaml");
    const content = await readFile(videosFile, "utf-8");
    const videosData = yaml.load(content) as { videos: any[] };
    if (videosData.videos) {
      data.videos = videosData.videos;
    }
  } catch (error) {
    console.warn("Failed to load videos:", error);
  }

  // Write to JSON file
  await writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Content generated successfully: ${outputPath}`);
  console.log(`  - Notes: ${data.notes.length}`);
  console.log(`  - Images: ${data.images.length}`);
  console.log(`  - Videos: ${data.videos.length}`);
}

generateContent().catch(console.error);

