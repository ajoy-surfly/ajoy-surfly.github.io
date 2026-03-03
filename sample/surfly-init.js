const settings = {
    widget_key: '25444b89443041b1a42abd3be2647567',
    embedded_sessions_only: true,
};
Surfly.init(settings, function (initResult) {
    if (initResult.success) {
        console.log('All good for happy cobrowsing!');
        // it is now safe to use API
        if (!Surfly.isInsideSession) {
            Surfly.button();
        }
    } else {
        console.log('Your browser lacks features required by Surfly');
    }
});