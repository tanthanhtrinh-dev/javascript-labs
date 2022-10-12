/**
 * https://futurestud.io/tutorials/how-to-check-if-an-object-is-empty-in-javascript-or-node-js
 * @type {[{name: string, value: string},{name: string, value: string},{name: string, value: string},{name: string, value: string},{name: string, value: string},null,null]}
 */
const SyncStatus = {
    /**
     * Pending Sync
     */
    Pending: 0,
    Synced: 1,
    Warning: 2,
    Error: 3,
    Processing: 7,
    Sent: 8,
    /**
     * Shop don't need to sync stock
     */
    StopStockSync: 9,
    /**
     * Missing Raw Data
     * We need to got data to sync
     */
    MissingRawData: 10,
};

//console.log(nameof(SyncStatus, x=>x.S))