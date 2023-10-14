import SelectInput from "../components/form/inputs/selectInput/SelectInput";

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <SelectInput id="asd" placeholder="Escolha!" options={["asd", "abc"]}></SelectInput>
        </>
    );
}
