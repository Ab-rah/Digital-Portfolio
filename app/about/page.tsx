export default async function AboutPage() {
  await new Promise((resolve) => setTimeout(resolve, 20000));
  return <h1>About Me</h1>;
}
