import DataTable from "./components/DataTable";
import SideNavBar from "./components/SideNavBar";

function App() {

  return (
    <div className="flex">
      <SideNavBar/>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">HomePage</h1>
        <DataTable></DataTable>
      </div>
    </div>
  );
}

export default App;
