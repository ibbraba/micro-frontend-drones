export const eventBus = {

    on: (event, callback) => {
        console.log(`Event listener registered: ${event}`);
    },
    off: (event, callback) => {
        console.log(`Event listener removed: ${event}`);
    },
    emit: (event, data) => {
        console.log(`Event emitted: ${event}`, data);
    },
    clear: () => {
        console.log('All events cleared');
    }
}