
export function AuthHeader(contentType) {
    const token = JSON.parse(localStorage.getItem('token'));
    const header = new Headers();
    if(contentType===true){
        header.append('Content-Type', 'application/json');
        header.append('Authorization', 'Bearer ' + token);
        return header;
    } else {
        if (token) {
            header.append('Authorization', 'Bearer ' + token);
        return header;
    } else {
            return {};
    }
}
}
//
//

    //     headers: {'Authorization': AuthHeader(true).get('Authorization'),
    // 'Content-type':AuthHeader(true).get('Content-type')}

//
// headers: {'Authorization':AuthHeader(false).get('Authorization')}
//
