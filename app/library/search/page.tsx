import { Suspense } from 'react';
import SearchResults from './SearchResults';

export const metadata = { title: '搜索 · 古籍原典库' };

export default function SearchPage() {
  return <Suspense fallback={<p>正在加载古籍搜索…</p>}><SearchResults /></Suspense>;
}
