export default function ProjectDetails({ params }: { params: { id: number } }) {
  return <h1>Project: {params.id} </h1>;
}
