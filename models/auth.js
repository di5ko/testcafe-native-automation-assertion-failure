import { Selector, t } from 'testcafe';

class auth {
    constructor() {
        this.topNavMenuElement     = Selector(".ib-universal-navigation");
        this.signInModal           = Selector("#ib-modal-sign-in").nth(-1);
        this.signInWrapper         = this.signInModal.find(".ib-sign-in-wrapper");
        this.userNameInput         = this.signInWrapper.find("#username");
        this.passwordInput         = this.signInWrapper.find("#password");
        this.signInSubmitButton    = this.signInWrapper.find('input[type="submit"]');
        this.dangerAlertBox        = this.signInWrapper.find(".alert-danger");
        this.wrongCredentialsAlert = this.dangerAlertBox.withText("Username and/or password are not correct");
    }

    async signIn(email, password) {
        await t
            .expect(this.signInModal.exists)
            .ok()
            .typeText(this.userNameInput, email)
            .typeText(this.passwordInput, password)
            .click(this.signInSubmitButton);
    }
}

export default new auth();
