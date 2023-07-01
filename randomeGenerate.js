function generateRandomAlphanumeric(length) {
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}
var randomAlphanumeric = generateRandomAlphanumeric(60); // 10文字のランダムな英数字を生成
console.log(randomAlphanumeric);
