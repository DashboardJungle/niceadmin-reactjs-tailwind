import { LibraryProvider } from "src/context/LibraryContext"
import ComponentLayout from "./CompoPage"


function index() {
    return (
        <LibraryProvider>

            <ComponentLayout />

        </LibraryProvider>
    )
}

export default index