export const generateError = (code: string) => {
    switch (code) {
        case 'password-not-matched':
            return '비밀번호가 일치하지 않습니다.'

        default:
            return '잠시 후 다시 시도해 주세요.'
    }
}
