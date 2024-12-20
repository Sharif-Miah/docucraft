import html from 'remark-html';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';

const postsDirectory = path.join(process.cwd(), 'docs');

export function getDocuments() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace('.md', '');

    const fullPath = path.join(postsDirectory, fileName);

    const filecontents = fs.readFileSync(fullPath, 'utf-8');

    const matterRessult = matter(filecontents);

    return {
      id,
      ...matterRessult.data,
    };
  });

  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  });
}

export async function getDocumentContent(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  const matterResult = matter(fileContents);

  const processContent = await remark().use(html).process(matterResult.content);

  const contentHtml = processContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
