import RootHtml from "../RootHtml";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootHtml locale="es">{children}</RootHtml>;
}
