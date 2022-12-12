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

const getSyncStatusByVal = (val) => {
    switch (val) {
        case SyncStatus.Pending:
            return "Pending";
        break
        case SyncStatus.Synced:
            return "Synced";
        break
        case SyncStatus.StopStockSync:
            return "StopStockSync";
            break
        case SyncStatus.Sent:
            return "Sent";
            break
        case SyncStatus.Error:
            return "Error";
            break
        case SyncStatus.MissingRawData:
            return "MissingRawData";
            break
        case SyncStatus.Processing:
            return "Processing";
            break
        case SyncStatus.Warning:
            return "Warning";
        break
    }
}

 console.log(getSyncStatusByVal(SyncStatus.Sent));