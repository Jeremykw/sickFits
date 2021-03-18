import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';

interface ProductType {
  name: string;
  id: string;
  description: string;
  price: number;
  photo: {
    id: string;
    image: {
      publicUrlTransformed: string;
    };
  };
}

export default function Product({ product }: { product: ProductType }) {
  return (
    <ItemStyles key={product.id}>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
    </ItemStyles>
  );
}
