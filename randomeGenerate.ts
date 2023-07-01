function generateRandomAlphanumeric(length: number): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

const randomAlphanumeric = generateRandomAlphanumeric(30); // 10文字のランダムな英数字を生成
console.log(randomAlphanumeric);
