async function printSource(client) {
  const source = await client.getPageSource();
  return source;
}

module.exports = printSource;