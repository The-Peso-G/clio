const { Rule } = require("../rule");
const arr = require("../arr");

const make = (processedData, processedCalls) =>
  arr`new Flow(scope, ${processedData})${processedCalls}`;

class flow extends Rule {
  parseCST() {
    const { data, calls } = this.cst;
    const processedData = this.generate(data);
    const processedCalls = calls.map(call => this.generate(call)).join("");
    return make(processedData, processedCalls);
  }
}

module.exports = { flow };
