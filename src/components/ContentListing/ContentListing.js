
export default () => (
    <main className="container">
        <Route exact path="/">
            <LandingPage/>
        </Route>
        <Route path="*">
            <NotFound/>
        </Route>
    </main>
)