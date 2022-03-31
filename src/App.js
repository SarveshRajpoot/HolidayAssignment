import "./styles.css";

const cityList = [
  { name: "Goa", country: "India" },
  { name: "Amsterdam", country: "Netherlands" },
  { name: "New York", country: "USA" },
  { name: "Darjeeling", country: "India" },
  { name: "Tokyo", country: "Japan" },
  { name: "Lonavala", country: "India" }
];

export default function App() {
  return (
    <>
      <ol>
        {cityList
          .filter((city) => city.country === "India") //filter give filtered list now we apply map on it
          .map((city, index) => {
            // console.log(index+ " "+city.name)
            const key = "location" + index;
            return <li key={key}>{city.name}</li>;
          })}
      </ol>
    </>
  );
}
