import Container from "./components/Container";
import EmptyState from "./components/EmptyState";

export default function Home() {

  const isEmpty=true;
  if(isEmpty){
    return(
      <EmptyState showReset/>
    )
  }

  return (
    <Container>
       <div
        className="
          pt-24
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2lg:grid-cols-6
          gap-10
        "
       >
          <div>My future listing</div>
       </div>
    </Container>
  );
}