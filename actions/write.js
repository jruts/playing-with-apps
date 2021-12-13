async function write(client, id, value) {
  const item = await client.$(`id:${id}`);
  await item.waitForDisplayed({ timeout: 20000 })
  return await item.setValue(value)
}

module.exports = write;