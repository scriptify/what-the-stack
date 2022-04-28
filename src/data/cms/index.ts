import { Client } from '@notionhq/client';

const pageId = '9583ca3146924e08b4cfde307fe4b816';

export async function getPageData() {
  const notion = new Client({ auth: process.env.NOTION_KEY });

  const pageData = await notion.pages.retrieve({ page_id: pageId });
  return pageData;
}
