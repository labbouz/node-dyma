const auth = import("./features/authentification");

auth.then((m) => {
    //console.log(m);

    m.login();
});
