function superbowlWin(superBowlObjects) {
    const foundObject = superBowlObjects.find( (obj) => {
        if(obj.result === "W") {
            return true
        }
    })
    if(foundObject !== undefined) {
        return foundObject.year
    }
    else {
        return undefined
    }
}