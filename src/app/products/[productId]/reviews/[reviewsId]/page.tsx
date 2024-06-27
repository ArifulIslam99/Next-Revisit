export default function reviewDetails({
    params,
  }: {
    params: { reviewsId: string, productId: string };
  }) {
    return <h2>Review from Author {params.reviewsId} for product {params.productId} </h2>;
  }