import { notFound } from "next/navigation";

export default function reviewDetails({
    params,
  }: {
    params: { reviewsId: string, productId: string };
  }) {
    if(parseInt(params.reviewsId) > 1000) {
      notFound();
    }
    return <h2>Review from Author {params.reviewsId} for product {params.productId} </h2>;
  }