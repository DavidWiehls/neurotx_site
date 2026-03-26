/** Public R2 development URL; object keys follow `assets/...` in the bucket. */
export const R2_BASE_URL = 'https://pub-742ce4a3a0dc44c29d8903927e64ad48.r2.dev';

/**
 * Full URL for a file under the repo `assets/` folder.
 * @param path - e.g. `brand/wechat-qr.jpg` or `assets/brand/wechat-qr.jpg`
 */
export function r2AssetUrl(path: string): string {
  const trimmed = path.replace(/^\/+/, '');
  const relative = trimmed.startsWith('assets/') ? trimmed.slice('assets/'.length) : trimmed;
  return `${R2_BASE_URL}/assets/${relative}`;
}
