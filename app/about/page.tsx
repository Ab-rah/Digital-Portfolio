
//  async function getServerSideProps() {
//   const result = await fetch('https://catfact.ninja/fact');
//   const data = await result.json();

//   return(data)
// }

// export default function AboutPage({data}:any) {
//   return (
//     <div>
//       <p>{data.fact}</p>
//     </div>
//   )
// }

 async function getServerSideProps() {
  const result = await fetch('https://catfact.ninja/fact');
  return result.json();
}

export default async function AboutPage() {
  try {
  const data = await fetch('https://catfact.ninja/fact');
  const result = await data.json();
  return (
    <div>
      <p>{result.fact}</p>
    </div>
  )
}
catch (error) {
  console.error("failed to Fetch API",error)
}
}