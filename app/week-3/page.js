import ItemList from "./item-list";


export default function Page() {
    return(
        <main>
            <h1 className="m-4 text-3xl font-bold">Shopping List</h1>
            <ItemList></ItemList>
        </main>
    );
}