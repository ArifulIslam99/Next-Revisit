export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length == 2) {
    return (
      <h2>
        Docs from {params.slug[0]} of {params.slug[1]}{" "}
      </h2>
    );
  } else if (params.slug?.length == 1) {
    return <h2> Docs from {params.slug[0]} </h2>;
  } else {
    return <h2>Docs Page</h2>;
  }
}
