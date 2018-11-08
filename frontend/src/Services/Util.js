const merge = (events, newEvents) => {
    return [...new Map([...events,...newEvents].map((event)=>[event.id,event])).values()]
}