const currentStatus = (value) => value ? "ON" : "OFF";

export default () => {
    return <h2>Current Status: {currentStatus(false)}</h2>
}