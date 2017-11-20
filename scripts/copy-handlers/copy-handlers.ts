import * as path from "path";
import * as fs from "fs-extra";

const ROOT_DIR = path.join(__dirname, "../../");

const TYPES_TEMP_DIR = "@types";
const DIST_TEMP_DIR = "_dist_temp";
const DIST_TARGET_DIR = "dist";

const HANDLERS_ORIGIN_FILE_NAME = "logger-handlers";
const HANDLERS_FILE_NAME = "handlers";
const MODULE_NAME = "simplr-logger-handlers";

function requireString(id: string): string {
    return `require("${id}")`;
}

(async () => {
    try {
        const jsEntryFile = path.join(ROOT_DIR, DIST_TEMP_DIR, `${HANDLERS_FILE_NAME}.js`);
        let jsContent = await fs.readFile(jsEntryFile, "UTF-8");
        jsContent = jsContent.replace(
            requireString(`./${HANDLERS_ORIGIN_FILE_NAME}`),
            requireString(`./${DIST_TARGET_DIR}/${MODULE_NAME}`)
        );
        await fs.writeFile(path.join(ROOT_DIR, `${HANDLERS_FILE_NAME}.js`), jsContent, { encoding: "UTF-8" });

        const tsEntryFile = path.join(ROOT_DIR, TYPES_TEMP_DIR, `${HANDLERS_FILE_NAME}.d.ts`);
        let tsContent = await fs.readFile(tsEntryFile, "UTF-8");
        tsContent = tsContent.replace(`./${HANDLERS_ORIGIN_FILE_NAME}`, `./${TYPES_TEMP_DIR}/${HANDLERS_ORIGIN_FILE_NAME}`);
        await fs.writeFile(path.join(ROOT_DIR, `${HANDLERS_FILE_NAME}.d.ts`), tsContent);
        await fs.remove(tsEntryFile);

        await fs.remove(path.join(ROOT_DIR, DIST_TEMP_DIR));

    } catch (error) {
        throw error;
    }
})();
