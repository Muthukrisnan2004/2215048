export default function validateUrl(url) {
  const pattern = new RegExp("^(https?:\\/\\/)?([\\w.-]+)\\.([a-z.]{2,6})([\\/\\w .-]*)*\\/?$");
  return pattern.test(url);
}
