// palindromeFunctions.ts

export function isPalindrome(str: string): boolean {
  // Menghapus whitespace dan mengubah ke huruf kecil
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  // Membalikkan string
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  // Mengecek apakah string asli dan yang dibalik sama
  return str === reversed;
}
