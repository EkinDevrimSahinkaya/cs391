export default function AddGame() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <form>
                <label>
                Name:
                <input type="text" name = "name" />
                </label>
                < input type = "submit" value = "Submit" />
            </form>
        </main>
    );
}