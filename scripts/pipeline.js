const fs = require("fs")
const { execSync } = require("child_process")

const packageJSON = JSON.parse(fs.readFileSync("./package.json", "utf8"))
const packages = (packageJSON.packages || []).map((pkg) => `"${pkg}"`).join(" ")

for (const pkg of packages.split(" ")) {
  const len = 24 + process.argv[2].length + pkg.length
  const dash = "-".repeat(len)
  console.log(`\x1b[35m┌${dash}┐\x1b[0m`)
  console.log(`\x1b[35m|    ${process.argv[2]}ing package ${pkg}....    |\x1b[0m`)
  console.log(`\x1b[35m└${dash}┘\x1b[0m`)
  execSync(`node ./scripts/${process.argv[2]}.js "./packages/${pkg}"`, { stdio: "inherit" })
}
