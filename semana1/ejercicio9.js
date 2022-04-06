const equalsElements = (list1, list2) => {
    const filter = list1.filter(element => {
        return list2.includes(element);
    });
    return filter;
}

console.log(equalsElements([1,3,5,6],[3,5,2,9]));