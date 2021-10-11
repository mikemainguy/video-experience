import Header from '../components/Header';

export default function LayoutVideo({ children }) {
  return (
    <>
      <Header className="bg-gray-500 bg-opacity-10"></Header>
      <main className="bg-black">{children}</main>
    </>
  );
}
