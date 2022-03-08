class UserInfo {
    constructor(data) {
        const { userNameElement, userAboutElement, userAvatarElement } = data;
        this._userName = userNameElement;
        this._userAbout = userAboutElement;
        this._userAvatar = userAvatarElement;
    }

    getUserInfo = () => {
        return {
            profileName: this._userName.textContent,
            profileAbout: this._userAbout.textContent
        }
    }

    getUserId = () => this._userId;

    setUserInfo = (data) => {
        const { name, about, id } = data;

        this._userName.textContent = name;
        this._userAbout.textContent = about;
        this._userId = id;
    }

    setUserAvatar = (url) => {
        this._userAvatar.style.backgroundImage = `url("${url}")`;
    }
}

export default UserInfo;