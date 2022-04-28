export const goToHome = (history) => {
    history.push('/')
}

export const goToList = (history) => {
    history.push('/list')
}

export const goBack = (history) => {
    history.goBack()
}

