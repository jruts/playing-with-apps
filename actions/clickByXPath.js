async function clickByXPath(client, path, required = false) {
  try {
    const clickable = await client.$(path);
    await clickable.waitForDisplayed({ timeout: 20000 })
    return clickable.click()
  } catch (e) {
    if(!required) {
      console.log(`Clickable path:~${path} not found, but we do not care`)
    }
  }
}

module.exports = clickByXPath;