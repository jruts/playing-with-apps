const wdio = require("webdriverio");
const actionManager = require("./actions");
const { Parser } = require("xml2js");
const parser = new Parser();
const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "11",
    deviceName: "Android Emulator",
    app: "C:/Users/maur/Downloads/getir_v2.10.3_apkpure.com.apk",
    appPackage: "com.eddress.getgoodys",
    appWaitActivity: "*",
    appAwaitForLauch: true,
    automationName: "UiAutomator2",
    fullReset: true,
    newCommandTimeout: 60 * 60,
    autoGrantPermissions: true,

  }
};

const geoLocation = { latitude: "51.5269", longitude: "-0.0558", altitude: "10"}

function wait(delayms) {
  return new Promise(function (resolve, reject) {
      setTimeout(resolve, delayms);
  });
}

async function main () {
  try {
    const client = await wdio.remote(opts);
    await client.setGeoLocation(geoLocation);
    console.log('connected');
    const actions = actionManager.init(client)
    console.log('actions')
    const source = await actions.printSource();
    console.log(source);
    // const x = await parser.parseStringPromise(source)
    // console.log(x)
    await actions.clickByText('GET STARTED')
    await actions.clickById('searchButton')
    await actions.write('searchProducts', 'Chocolate')
    // await actions.clickByXpath(".//android.widget.Button[@text='Deny']");

    // await actions.clickById('continue_guest_view');
    // await actions.clickById('confirmButton');
   await wait(5000)
   await actions.printSource();


    // console.log(await client.getPageSource())
    // await actions.click('signInButton');
    // await actions.write('emailText', EMAIL);
    // await actions.write('passwordText', PASSWORD);

    // // console.log('ZZZZZZZZZZZZZZZZZZZZZZZZ')

    // await actions.click('signInButton', true);

    // await wait(5000)

    // await actions.printSource();


    // const loginButton = await client.$('id:signInButton');
  } catch (e) {
    console.log(e)
  }
}

main();