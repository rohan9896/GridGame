export const shuffleDatabase = (array) => {
    return array.sort(() => Math.random() - 0.5);
}