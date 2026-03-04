if (Surfly.isInsideSession) {
    console.log("TEST")
    Surfly.currentSession.on('message', function (session, event) {
        if (event.origin === window.location.origin) {
            console.log('Outer window says:', event.data);
        } else {
            console.log('Outer window has a different origin');
        }
    });
}