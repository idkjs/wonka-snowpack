open ReactDomExperimental
Js.log2("Wonka.fromArray([1, 2, 3])
",Wonka.fromArray([1, 2, 3])
)
switch createRootWithId("root") {
| Some(root) => root->render(<React.StrictMode> <App /> </React.StrictMode>)
| None => ()
}
