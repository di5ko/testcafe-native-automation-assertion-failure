import auth from '../models/auth';
import { Role } from 'testcafe';

export const badCredentialsRole = Role('', async t => {

    await t.expect(auth.topNavMenuElement.exists).ok();

    await t.expect(auth.signInModal.exists).ok();

    await auth.signIn('user@email.com', 'BadPassword');

    // Below assertion will fail with --native-automation
    await t.expect(auth.wrongCredentialsAlert.exists).ok({ timeout: 2000 });

}, { preserveUrl: true });
