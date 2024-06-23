function getDateStr(timeStamp: number): string {
    const date = new Date(timeStamp).toString().slice(0, 24);
    
    return date;
}

export default getDateStr;
