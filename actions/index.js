const clickById = require("./clickById")
const clickByXpath = require("./clickByXPath")
const clickByText = require('./clickByText')
const clickByFullId = require("./clickByFullId")
const write = require("./write");
const printSource = require("./printSource")

function init(client) {
  return {
    clickById: (...props) => clickById(client, ...props),
    clickByXpath: (...props) => clickByXpath(client, ...props),
    clickByFullId: (...props) => clickByFullId(client, ...props),
    clickByText: (...props) => clickByText(client, ...props),

    write: (...props) => write(client, ...props),
    printSource: () => printSource(client),
  }
}

module.exports = { init }