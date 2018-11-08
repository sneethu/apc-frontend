export const merge = (events, newEvents) => {
    return events.concat(newEvents).filter(function(item, pos, self) {
        return self.indexOf(item) === pos;
    })  
}