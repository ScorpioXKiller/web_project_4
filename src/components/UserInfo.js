class UserInfo {
    constructor(data) {
        const { userNameElement, userAboutElement } = data;
        this._userName = userNameElement;
        this._userAbout = userAboutElement;
    }

    getUserInfo = () => {
        return {
            profileName: this._userName.textContent,
            profileAbout: this._userAbout.textContent
        }
    }

    setUserInfo = (data) => {
        const { userName, userAbout } = data;

        this._userName.textContent = userName;
        this._userAbout.textContent = userAbout;
    }
}

export default UserInfo;