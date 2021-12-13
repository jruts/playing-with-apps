async function clickByText(client, text, required = false) {
  try {
    const clickable = await client.$(`//*[@text='${text}']`);
    await clickable.waitForDisplayed({ timeout: 20000 })
    return clickable.click()
  } catch (e) {
    if(!required) {
      console.log(`Clickable path://*[@text='${text}'] not found, but we do not care`)
    }
  }
}

module.exports = clickByText;