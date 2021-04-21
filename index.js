
function superbowlWin(records) {
    const winningYear = records.find( function(s) { return s.result === "W"})
    if (winningYear) {
        return winningYear.year
    } else {
            return undefined
    }
    

}