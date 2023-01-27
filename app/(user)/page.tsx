import { previewData } from 'next/headers';

export default function HomePage() {
  if (previewData()) return <div>Preview mode</div>;
  return <div>Not in preview mode</div>;
}
