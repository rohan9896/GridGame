export const generateDatabase = () => {
    let db = [];
    for(let i=65;i<73;i++) {
        db.push(String.fromCharCode(i));
    }
    return db;
}