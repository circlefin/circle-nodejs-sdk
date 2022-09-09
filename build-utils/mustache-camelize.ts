import Mustache from "mustache";
import * as fs from "fs";

const customTags: Mustache.OpeningAndClosingTags = ["<%", "%>"];

const template = fs.readFileSync(process.argv[2], "utf8");

function camelize(text: string): string {
  if (text.length === 0) return text;

  const isAllCaps = text.toUpperCase() === text;
  if (isAllCaps) {
    return text.toLowerCase();
  } else {
    return text[0].toLowerCase() + text.substring(1);
  }
}
const view = {
  camelize: function () {
    return function (text: string, render: any): string {
      return camelize(text);
    };
  }
};

const output = Mustache.render(template, view, {}, customTags);
process.stdout.write(output);
