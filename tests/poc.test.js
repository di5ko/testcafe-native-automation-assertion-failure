import { badCredentialsRole } from '../helpers/roles';

fixture `Issue POC`;


test('Show Native Automation issue', async t => {
    await t
        .maximizeWindow()
        .useRole(badCredentialsRole);

});
