import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { string } from 'prop-types';
import styled from 'styled-components';
import Product from './Product';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCT_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

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

const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
`;

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ProductList>
      {data.allProducts.map((product: ProductType) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductList>
  );
}
