export function setProductsToLocal(Key: string, CartProductArray: any) {
  const arrayString = JSON?.stringify(CartProductArray);
  localStorage?.setItem(Key, arrayString);
}

export function getProductsFromLocal(Key: string) {
  const arrayString = localStorage?.getItem(Key);
  if (arrayString) {
    return JSON.parse(arrayString);
  } else {
    // If no data found for the provided key, return null or handle accordingly
    return null;
  }

  //   return arrayString ? JSON.parse(arrayString) : null;
}
