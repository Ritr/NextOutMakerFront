import Item from "./item";
const List = ({ list }) => {
    return (
        <div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
                {list.map((product) => <Item key={product.id} product={product} />)}
            </div>
        </div>
    );
}
export default List;