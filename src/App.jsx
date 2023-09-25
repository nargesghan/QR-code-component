import QR from "./components/QR";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D6E2F0",
        width: "100%",
        height: "100vh",
      }}
    >
      <QR />
    </div>
  );
}

export default App;
