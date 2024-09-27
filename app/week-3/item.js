

export default function Item({ItemObj}) {

    let {name, quantity, category} = ItemObj;

    return(
        <li className="m-3 p-2 max-w-sm bg-blue-50 border border-blue-950 rounded">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>category: {category}</p>
        </li>
    );
}