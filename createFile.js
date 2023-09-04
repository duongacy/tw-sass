const fs = require('fs');
const path = require('path');
const base = 'Hero'
const folderPath = "src/components2/Marketing/PageSections/" + base;

const PROPS_EXTENDS = `DivProps`;
const IMPORT_SENTENCE = `import { ${PROPS_EXTENDS} } from '@/components/types'\n`

async function main() {
  const count = await countFilesInDirectory(folderPath);
  const COMPONENT_NAME = base + (count + 1);
  const PROPS_DECLARE = `
export interface ${COMPONENT_NAME}Props extends ${PROPS_EXTENDS} {}
`
  const pattern = /([A-Za-z]\w*)\s+\{\s*(\w+(?:,\s*\w+)*)\s*\}\s+from\s+['"]([^'"]+)['"]\s*;?/g;

  const firstDivRegex = /<div(\s+className="[^"]*")?>/;
  const classNameRegex = /<div\s+className="([^"]*)">/;

  try {
    let data = fs.readFileSync('sample.txt', 'utf8');
    const matches = [...data.matchAll(pattern)].map(match => match[0]).join('');
    data = data.replace(pattern, '');
    data = data.replace('export default function Example()', `
            export const ${COMPONENT_NAME}: React.FC<${COMPONENT_NAME}Props> = ({
            className,
            ...props
          }) =>
        `);
    data = data.replaceAll('-gray-', '-neutral-');
    data = data.replaceAll('-indigo-', '-primary-');
    data = data.replaceAll('logo-primary-', 'logo-indigo-')
    const firstDiv = data.match(firstDivRegex);
    const className = firstDiv[0].match(classNameRegex)[1];
    data = data.replace(firstDivRegex, `<div className={"${className} "+className} {...props}>`);

    data = `
        ${matches}
        ${IMPORT_SENTENCE}
        ${PROPS_DECLARE}
        ${data}
        `;
    const fileName = COMPONENT_NAME + `.tsx`;
    const fullPath = path.join(folderPath, fileName);
    console.log(fullPath);

    fs.writeFileSync(fullPath, data);
  } catch (err) {
    console.error('Error writing the file', err);
  }
}
main();

function countFilesInDirectory(directory) {
  return new Promise((resolve, reject) => {
    fs.readdir(directory, (err, items) => {
      if (err) {
        reject(err);
        return;
      }

      let fileCount = 0;

      items.forEach(item => {
        if (fs.statSync(path.join(directory, item)).isFile()) {
          fileCount++;
        }
      });

      resolve(fileCount);
    });
  });
}