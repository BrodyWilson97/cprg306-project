export default function Recipe({ name, category, time }) {
    return (
        <main>
            <li className="bg-slate-200 p-2">
                <h3 className="text-2xl font-semibold">Name: {name}</h3>
                <p className="text-xl">Category: {category}</p>
                <p className="text-xl">Time: {time}</p>
            </li>
        </main>
    );
}