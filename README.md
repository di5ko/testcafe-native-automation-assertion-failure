# Testcafe Native Automation Assertion Failure POC

The `t.expect(Selector.exists).ok()` assertion will fail when using `Native Automation` if Selector is coming from a page model.

To reproduce:

1. Clone this repostitory
2. Install Testcafe: `npm i`
3. Start test: `npm run test` (this uses `Native Automation`) -> WILL FAIL
4. Repeat test without native automation: `npm run test-without-na` -> WILL PASS

## Output

```
PS C:\Users\di5ko\git\e2e-testing\testcafe-native-automation-assertion-failure> node .\src\run-tests.js                    
[INFO] Native Automation mode: false
 Running tests in:
 - Chrome 112.0.0.0 / Windows 11

 Issue POC
 √ Show Native Automation issue


 1 passed (15s)
[INFO] All tests done!


PS C:\Users\di5ko\git\e2e-testing\testcafe-native-automation-assertion-failure> node .\src\run-tests.js --native-automation
[INFO] Native Automation mode: true
 Running tests in:
 - Chrome 112.0.0.0 / Windows 11

 Issue POC
 × Show Native Automation issue (screenshots: C:\Users\di5ko\git\e2e-testing\testcafe-native-automation-assertion-failure\screenshots\2023-04-24_09-03-02\test-1\Chrome_112.0.0.0_Windows_11\errors\1.png)

   1) - Error in Role initializer -
      AssertionError: expected false to be truthy

      Browser: Chrome 112.0.0.0 / Windows 11
      Screenshot: C:\Users\di5ko\git\e2e-testing\testcafe-native-automation-assertion-failure\screenshots\2023-04-24_09-03-02\test-1\Chrome_112.0.0.0_Windows_11\errors\1.png

          8 |    await t.expect(auth.signInModal.exists).ok();
          9 |
         10 |    await auth.signIn('user@email.com', 'BadPassword');
         11 |
         12 |    // Below assertion (inside Role) will fail with --native-automation
       > 13 |    await t.expect(auth.wrongCredentialsAlert.exists).ok({ timeout: 2000 });
         14 |
         15 |}, { preserveUrl: true });
         16 |

         at <anonymous> (C:\Users\di5ko\git\e2e-testing\testcafe-native-automation-assertion-failure\helpers\roles.js:13:55)
         at asyncGeneratorStep (C:\Users\di5ko\git\e2e-testing\testcafe-native-automation-assertion-failure\helpers\roles.js:2:33)
         at _next (C:\Users\di5ko\git\e2e-testing\testcafe-native-automation-assertion-failure\helpers\roles.js:2:33)



 1/1 failed (19s)
[WARNING] 1 test(s) failed - exiting.
```
