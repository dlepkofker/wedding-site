export const bride = {
        firstName: 'Fina',
        nickName: null,
        middleName: 'Itzel',
        lastName: 'Garcia',
        altLastName: 'Garcia-Blanco'
};

export const groom = {
    firstName: 'Daniel',
    nickName: 'Dan',
    middleName: 'Allen',
    lastName: 'Lepkofker',
    altLastName: null
};

export function getTitlePhrase() {
    const brideName = bride.nickName === null ? bride.firstName : bride.nickName;
    const groomName = groom.nickName === null ? groom.firstName : groom.nickName;
    return brideName + ' + ' + groomName;
}