const tests = [
    "./tests/"
];

const BROWSER_OPTIONS = "chrome";
const NATIVE_AUTOMATION_MODE = process.argv.includes("--native-automation");

console.log("[INFO] Native Automation mode:", NATIVE_AUTOMATION_MODE);

const createTestCafe = require("testcafe");

const runTests = async (testPath) => {
    const testcafe = await createTestCafe("localhost");
    const runner = testcafe.createRunner();
    const failedCount = await runner
        .src(testPath)
        .browsers(BROWSER_OPTIONS)
        .screenshots({
            takeOnFails: true,
        })
        .run({
            nativeAutomation: NATIVE_AUTOMATION_MODE
        });

    if (failedCount > 0) {
        console.log("[WARNING] " + failedCount + " test(s) failed - exiting.");
        process.exit(1);
    }
};

const runAllTests = async () => {
    for (const testPath of tests) {
        await runTests(testPath);
    }
};

runAllTests()
    .then(() => console.log("[INFO] All tests done!"))
    .finally(() => process.exit(0))
    .catch(err => console.log("[ERROR] Error occurred: ", err));
