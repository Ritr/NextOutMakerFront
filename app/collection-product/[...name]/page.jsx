
import { getProductsByCollection } from "@/api/collection";
import ProductList from "@/components/product/list";
export default async function Page({ params }) {
    console.log(params)
    const [id] = params.name;
    const productList = await getProductsByCollection(id);
    // 对productList进行处理
    let list = [];
    for (let p in productList) {
        list.push(productList[p]);
    }
    return (
        <ProductList list={list} />
    );
}
export async function generateStaticParams() {
    const posts = [['3', 'Femshade']];

    return posts.map((post) => ({
        name: post
    }))
}