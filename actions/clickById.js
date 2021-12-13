async function clickById(client, id, required = false) {
  try {
    const clickable = await client.$(`id:${id}`);
    await clickable.waitForDisplayed({ timeout: 20000 })
    return clickable.click()
  } catch (e) {
    if(!required) {
      console.log(`Clickable id:${id} not found, but we do not care`)
    }
  }
}

module.exports = clickById;