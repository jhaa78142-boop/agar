const PRODUCT_IMAGE_URLS: Record<string, string> = {
  "chandan-natural": "/product-chandan-natural.webp",
  "rose-gold": "/product-rose-gold.webp",
  "chafa-green": "/product-chafa-green.webp",
  // NOTE: black-oudh does not have a unique product image yet
  // TODO: Create /product-black-oudh.webp with dark, premium visual
  // When created, replace this temporary rose-gold fallback
  "black-oudh": "/product-rose-gold.webp",
  "camphor-jasmine": "/product-chafa-green.webp",
};

const FALLBACK_IMAGE = "/product-chandan-natural.webp";

export function getProductImage(productId: string): string {
  return PRODUCT_IMAGE_URLS[productId] || FALLBACK_IMAGE;
}

export { PRODUCT_IMAGE_URLS };
