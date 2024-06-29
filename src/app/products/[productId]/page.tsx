import { Metadata } from "next";
type Props = {
  params: {
    productId: string;
  };
};
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `product ${params.productId}`,
  };
};
export default function ProductId({ params }: Props) {
  return <h2>Product Details about {params.productId} </h2>;
}
