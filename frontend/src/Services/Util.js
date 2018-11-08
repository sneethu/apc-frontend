export const merge = (events, newEvents) => {
    return [...new Map(events.concat(newEvents).map((event)=>[event.id,event])).values()]
}