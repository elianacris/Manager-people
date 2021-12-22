export const goToHome = (history) => {
    history.push('/')
}
export const goToLogin = (history) => {
    history.push('/login')
 
}

export const goToSignUp = (history) => {
    history.push('/signup')
    
}

export const goToList = (history) => {
    history.push('/list')
}

export const goBack = (history) =>{
    history.goBack()
}

