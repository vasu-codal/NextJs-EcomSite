export function setProductsToLocal(Key: string, CartProductArray: any) {
  const arrayString = JSON?.stringify(CartProductArray);
  localStorage?.setItem(Key, arrayString);
}

export function getProductsFromLocal(Key: string) {
  const arrayString = localStorage?.getItem(Key);
  return arrayString ? JSON.parse(arrayString) : null;
}
